import React from 'react';
import { View, StyleSheet, FlatList, Dimensions, Image, StatusBar } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
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
    <>
       <StatusBar
        barStyle="light-content"
        backgroundColor={"#FF9BB3"}
      />
      <LinearGradient
        colors={['#FF9BB3', '#FFF0F6']}
        locations={[0, 1]}
        style={styles.mainContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Header title="Saiyaara Gallery" transparent />
        <LinearGradient
          colors={['#4D2544', '#2B2331', '#4D2544']}
          locations={[0, 0.45, 1]}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.6, y: 1 }}
          style={styles.container}
        >
          <FlatList
            data={images}
            renderItem={renderImageItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
            ListHeaderComponent={<CategoryList categories={categories} onCategoryPress={handleCategoryPress} />}
            contentContainerStyle={styles.flatListContent}
          />
        </LinearGradient>
      </LinearGradient>
    </>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    overflow: 'hidden',
  },
  container: {
    flex: 1,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    overflow: 'hidden',
  },
  flatListContent: {
    padding: 16,
    paddingTop: 8,
    paddingBottom: 24,
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
  glowTopLeft: {
    position: 'absolute',
    top: -120,
    left: -110,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(206, 160, 231, 0.28)',
  },
  glowTopRight: {
    position: 'absolute',
    top: -110,
    right: -90,
    width: 280,
    height: 280,
    borderRadius: 140,
    backgroundColor: 'rgba(253, 195, 218, 0.24)',
  },
  glowBottomLeft: {
    position: 'absolute',
    bottom: 160,
    left: -120,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(182, 103, 221, 0.22)',
  },
  glowBottomRight: {
    position: 'absolute',
    bottom: -70,
    right: -80,
    width: 260,
    height: 260,
    borderRadius: 130,
    backgroundColor: 'rgba(223, 128, 217, 0.2)',
  },
});

export default HomeScreen;
