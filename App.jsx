import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, SafeAreaView, FlatList, Alert,
} from 'react-native';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Article from './src/components/Article';

const URL = 'https://newsapi.org/v2/top-headlines?country=jp&category=business&apiKey=d3527dd0054942a38403b9aadd5199d2';

export default function App() {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async () => {
    try {
      const response = await axios.get(URL);
      setArticles(response.data.articles);
    } catch (error) {
      Alert.alert(error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <Article
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(article, index) => index.toString()}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eeee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
