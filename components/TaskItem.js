import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { theme } from '../app/theme';

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <View style={styles.card}>
      <Pressable
        style={[styles.checkbox, task.completed && styles.checkboxChecked]}
        onPress={() => onToggle(task.id)}
      >
        <Text style={styles.checkboxMark}>{task.completed ? '✓' : ''}</Text>
      </Pressable>

      <View style={styles.textContainer}>
        <Text style={[styles.title, task.completed && styles.titleCompleted]}>
          {task.title}
        </Text>
        <Text style={styles.status}>
          {task.completed ? 'Completed' : 'Active'}
        </Text>
      </View>

      <Pressable style={styles.deleteButton} onPress={() => onDelete(task.id)}>
        <Text style={styles.deleteText}>Delete</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: 16,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  checkboxChecked: {
    backgroundColor: theme.colors.primary,
  },
  checkboxMark: {
    color: 'white',
    fontWeight: '800',
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 15,
    fontWeight: '600',
    color: theme.colors.text,
    marginBottom: 4,
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
    color: theme.colors.muted,
  },
  status: {
    fontSize: 13,
    color: theme.colors.muted,
  },
  deleteButton: {
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  deleteText: {
    color: theme.colors.danger,
    fontWeight: '700',
  },
});
