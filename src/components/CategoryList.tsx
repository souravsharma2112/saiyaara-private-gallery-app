import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import FolderIcon from '../assets/icons/FolderIcon';
import COLORS from '../theme/colors';

interface Category {
  id: string;
  name: string;
  variant: 'red' | 'pink' | 'brown' | 'yellow' | 'blue';
  count: number;
}

interface CategoryListProps {
  categories: Category[];
  onCategoryPress: (category: Category) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, onCategoryPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Categories</Text>
      <View style={styles.list}>
        {categories?.map((item, index) => (
          <TouchableOpacity
            key={`category${index}`}
            style={styles.categoryItem}
            onPress={() => onCategoryPress(item)}
          >
            <FolderIcon variant={item.variant} width={72} height={72} />
            <Text style={styles.categoryName}>{item.name}</Text>
            <Text style={styles.categoryCount}>{item.count} items</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
    marginBottom: 12,
  },
  list: {
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  categoryItem: {
    alignItems: 'center',
  },
  categoryName: {
    fontSize: 14,
    color: COLORS.textPrimary,
    marginTop: 8,
    textAlign: 'center',
  },
  categoryCount: {
    fontSize: 12,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
});

export default CategoryList;