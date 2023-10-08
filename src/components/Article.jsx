import PropTypes from 'prop-types';
import React from 'react';
import {
  View, StyleSheet, Text, Image,
} from 'react-native';

export default function Article(props) {
  const { imageUrl, title, author } = props;

  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={{ width: 100, height: 100 }}
        />
      </View>
      <View style={styles.rightContainer}>
        <Text style={styles.text} numberOfLines={5}>
          {title}
        </Text>
        <Text style={styles.subText}>{author}</Text>
      </View>
    </View>
  );
}

Article.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
};

Article.defaultProps = {
  imageUrl: null,
  author: null,
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: 400,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginVertical: 5,
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 8,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 12,
  },
  subText: {
    fontSize: 8,
    color: 'red',
  },
});
