import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const DOUBLE_TAP_SCALE = 2.5;

const SPRING = {
  damping: 18,
  stiffness: 180,
};

function clamp(val: number, min: number, max: number) {
  "worklet";
  return Math.min(Math.max(val, min), max);
}

export default function ImageViewerModal({ visible, image, onClose }: any) {
  const { width, height } = useWindowDimensions();

  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const savedTranslateX = useSharedValue(0);
  const savedTranslateY = useSharedValue(0);

  // ================= PINCH =================
  const pinch = Gesture.Pinch()
    .onStart((e) => {
      savedScale.value = scale.value;
    })
    .onUpdate((e) => {
      let nextScale = savedScale.value * e.scale;
      nextScale = clamp(nextScale, MIN_SCALE, MAX_SCALE);

      scale.value = nextScale;
    })
    .onEnd(() => {
      if (scale.value < MIN_SCALE) {
        scale.value = withSpring(MIN_SCALE, SPRING);
      }
      savedScale.value = scale.value;
    });

  // ================= PAN =================
  const pan = Gesture.Pan()
    .onStart(() => {
      savedTranslateX.value = translateX.value;
      savedTranslateY.value = translateY.value;
    })
    .onUpdate((e) => {
      if (scale.value <= 1) return;

      const maxX = ((width * scale.value) - width) / 2;
      const maxY = ((height * scale.value) - height) / 2;

      translateX.value = clamp(
        savedTranslateX.value + e.translationX,
        -maxX,
        maxX
      );

      translateY.value = clamp(
        savedTranslateY.value + e.translationY,
        -maxY,
        maxY
      );
    });

  // ================= DOUBLE TAP =================
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onStart((e) => {
      if (scale.value > 1) {
        // Reset
        scale.value = withSpring(1, SPRING);
        translateX.value = withSpring(0, SPRING);
        translateY.value = withSpring(0, SPRING);
        savedScale.value = 1;
        savedTranslateX.value = 0;
        savedTranslateY.value = 0;
      } else {
        // Zoom to tap position
        const x = e.x - width / 2;
        const y = e.y - height / 2;

        const newScale = DOUBLE_TAP_SCALE;

        translateX.value = withSpring(-x * (newScale - 1), SPRING);
        translateY.value = withSpring(-y * (newScale - 1), SPRING);

        scale.value = withSpring(newScale, SPRING);
        savedScale.value = newScale;
      }
    });

  const composed = Gesture.Simultaneous(pinch, pan, doubleTap);

  // ================= STYLE =================
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: translateX.value },
      { translateY: translateY.value },
      { scale: scale.value },
    ],
  }));

  // ================= RESET =================
  useEffect(() => {
    scale.value = 1;
    translateX.value = 0;
    translateY.value = 0;
    savedScale.value = 1;
    savedTranslateX.value = 0;
    savedTranslateY.value = 0;
  }, [image, visible]);

  if (!visible || !image) return null;

  return (
    <View style={styles.overlay}>
      <Pressable style={styles.backdrop} onPress={onClose} />

      <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
        <Text style={styles.closeText}>Close</Text>
      </TouchableOpacity>

      <GestureDetector gesture={composed}>
        <View style={styles.container}>
          <Animated.View style={animatedStyle}>
            <Image
              source={image}
              style={styles.image}
              resizeMode="contain"
            />
          </Animated.View>
        </View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#000",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
  closeBtn: {
    position: "absolute",
    top: 50,
    right: 20,
    zIndex: 10,
  },
  closeText: {
    color: "#fff",
    fontSize: 18,
  },
});