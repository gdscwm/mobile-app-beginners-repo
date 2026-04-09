import React, { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { theme } from '../app/theme';

export default function TaskForm({ onAddTask }) {
  const [taskTitle, setTaskTitle] = useState('');

  function handleSubmit() {
    onAddTask(taskTitle);
    setTaskTitle('');
  }

  return (
    <View style={styles.card}>
      <Text style={styles.label}>Add a new task</Text>
      <TextInput
        placeholder="Example: Prepare for lab quiz"
        value={taskTitle}
        onChangeText={setTaskTitle}
        style={styles.input}
        returnKeyType="done"
        onSubmitEditing={handleSubmit}
      />
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add Task</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: 16,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  label: {
    fontSize: 15,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: theme.colors.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 15,
    backgroundColor: '#FAFAFA',
    marginBottom: 10,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 15,
  },
});
