import React from 'react';
import { View, StyleSheet, FlatList, Dimensions, Image } from 'react-native';
import Header from '../../components/Header';
import CategoryList from '../../components/CategoryList';
import COLORS from '../../theme/colors';

const { width } = Dimensions.get('window');
const imageSize = (width - 32) / 3 - 8; // 3 columns with padding

const HomeScreen = () => {
  // Mock data - replace with actual data
  const categories = [
    { id: '1', name: 'Vacation', variant: 'pink' as const, count: 25 },
    { id: '2', name: 'Family', variant: 'blue' as const, count: 42 },
    { id: '3', name: 'Work', variant: 'yellow' as const, count: 18 },
    { id: '4', name: 'Pets', variant: 'red' as const, count: 31 },
  ];

  const images = [
    { id: '1', uri: require('../../assets/images/car/b1.jpg') },
    { id: '2', uri: require('../../assets/images/car/b2.avif') },
    { id: '3', uri: require('../../assets/images/car/b3.jpg') },
    { id: '4', uri: require('../../assets/images/car/b4.jpg') },
    { id: '5', uri: require('../../assets/images/car/c1.jpg') },
    { id: '6', uri: require('../../assets/images/car/c2.jpg') },
  ];

  const handleCategoryPress = (category: any) => {
    // Handle category press - navigate to category screen
    console.log('Category pressed:', category.name);
  };

  const renderImageItem = ({ item }: { item: any }) => (
    <View style={styles.imageContainer}>
      <Image source={item.uri} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="Saiyaara Gallery" />
      <FlatList
        data={images}
        renderItem={renderImageItem}
        keyExtractor={(item) => item.id}
        numColumns={3}
        ListHeaderComponent={
          <CategoryList categories={categories} onCategoryPress={handleCategoryPress} />
        }
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  flatListContent: {
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

export default HomeScreen;