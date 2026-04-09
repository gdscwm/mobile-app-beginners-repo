import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../app/theme';

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
];

export default function FilterBar({ selectedFilter, onSelectFilter }) {
  return (
    <View style={styles.container}>
      {filters.map((filter) => {
        const isSelected = selectedFilter === filter.value;

        return (
          <Pressable
            key={filter.value}
            style={[styles.button, isSelected && styles.buttonSelected]}
            onPress={() => onSelectFilter(filter.value)}
          >
            <Text style={[styles.buttonText, isSelected && styles.buttonTextSelected]}>
              {filter.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: theme.spacing.md,
    gap: 8,
  },
  button: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 999,
    backgroundColor: theme.colors.card,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  buttonSelected: {
    backgroundColor: theme.colors.primaryLight,
    borderColor: theme.colors.primary,
  },
  buttonText: {
    color: theme.colors.muted,
    fontWeight: '600',
  },
  buttonTextSelected: {
    color: theme.colors.primary,
  },
});
