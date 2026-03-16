import React from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';
import COLORS from '../theme/colors';

const { width } = Dimensions.get('window');
const imageSize = (width - 32) / 3 - 8; // 3 columns with padding

interface ImageItem {
  id: string;
  uri: any; // Can be string for remote URLs or number for require()
}

interface ImageGridProps {
  images: ImageItem[];
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  const renderItem = ({ item }: { item: ImageItem }) => (
    <View style={styles.imageContainer}>
      <Image source={item.uri} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  grid: {
    padding: 16,
  },
  imageContainer: {
    flex: 1,
    margin: 4,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: COLORS.surface,
  },
  image: {
    width: imageSize,
    height: imageSize,
    borderRadius: 8,
  },
});

export default ImageGrid;