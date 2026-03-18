import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import CategoryList from "../../components/CategoryList";
import Header from "../../components/Header";
import ImageViewerModal from "../../components/ImageViewerModal";
import COLORS from "../../theme/colors";

const { width } = Dimensions.get("window");
const imageSize = (width - 32) / 3 - 8;
type GalleryImage = {
  id: string;
  thumbSource: number;
  viewerSource: number;
};
// https://www.figma.com/design/d9pd5u57St2IPzGBCItQWB/Coffee-Shop-Mobile-App-Design--Community-?node-id=0-1&p=f&t=8t0N12fOK7FeEM8M-0

const HomeScreen = () => {
  const [viewerVisible, setViewerVisible] = useState(false);
  const [selectedImage, setSelectedImage] =
    useState<ImageSourcePropType | null>(null);

  const categories = [
    { id: "1", name: "Vacation", variant: "pink" as const, count: 25 },
    { id: "2", name: "Family", variant: "blue" as const, count: 42 },
    { id: "3", name: "Work", variant: "yellow" as const, count: 18 },
    { id: "4", name: "Pets", variant: "red" as const, count: 31 },
  ];

  const images: GalleryImage[] = [
    {
      id: "1",
      thumbSource: require("../../assets/images/car/b1.jpg"),
      viewerSource: require("../../assets/images/car/b1.jpg"),
    },
    {
      id: "2",
      thumbSource: require("../../assets/images/car/b2.avif"),
      viewerSource: require("../../assets/images/car/b2.avif"),
    },
    {
      id: "3",
      thumbSource: require("../../assets/images/car/b3.jpg"),
      viewerSource: require("../../assets/images/car/b3.jpg"),
    },
    {
      id: "4",
      thumbSource: require("../../assets/images/car/b4.jpg"),
      viewerSource: require("../../assets/images/car/b4.jpg"),
    },
    {
      id: "5",
      thumbSource: require("../../assets/images/car/c1.jpg"),
      viewerSource: require("../../assets/images/car/c1-viewer.jpg"),
    },
    {
      id: "6",
      thumbSource: require("../../assets/images/car/c2.jpg"),
      viewerSource: require("../../assets/images/car/c2.jpg"),
    },
  ];

  const renderImageItem = ({ item }: { item: GalleryImage }) => (
    <TouchableOpacity
      style={styles.imageContainer}
      onPress={() => {
        setSelectedImage(item.viewerSource);
        setViewerVisible(true);
      }}
    >
      <Image source={item.thumbSource} style={styles.image} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" backgroundColor={"#FF9BB3"} />

      <LinearGradient
        colors={["#FF9BB3", "#FFF0F6"]}
        style={styles.mainContainer}
      >
        <Header title="Saiyaara Gallery" transparent />

        <LinearGradient
          colors={["#4D2544", "#2B2331", "#4D2544"]}
          style={styles.container}
        >
          <FlatList
            data={images}
            renderItem={renderImageItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
            ListHeaderComponent={
              <CategoryList
                categories={categories}
                onCategoryPress={() => {}}
              />
            }
            contentContainerStyle={styles.flatListContent}
          />
        </LinearGradient>
      </LinearGradient>

      <ImageViewerModal
        visible={viewerVisible}
        image={selectedImage}
        onClose={() => setViewerVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    overflow: "hidden",
  },
  flatListContent: {
    padding: 16,
    paddingTop: 8,
  },
  imageContainer: {
    flex: 1,
    margin: 4,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: COLORS.surface,
  },
  image: {
    width: imageSize,
    height: imageSize,
  },
});

export default HomeScreen;
