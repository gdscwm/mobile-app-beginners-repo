import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native';

import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskItem from './components/TaskItem';
import FilterBar from './components/FilterBar';
import { starterTasks } from './app/data';
import { theme } from './app/theme';

export default function App() {
  const [tasks, setTasks] = useState(starterTasks);
  const [filter, setFilter] = useState('all');

  function addTask(taskTitle) {
    const cleanedTitle = taskTitle.trim();

    if (!cleanedTitle) {
      return;
    }

    const newTask = {
      id: Date.now().toString(),
      title: cleanedTitle,
      completed: false,
    };

    setTasks((currentTasks) => [newTask, ...currentTasks]);
  }

  function toggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function deleteTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  }

  const filteredTasks = useMemo(() => {
    if (filter === 'active') {
      return tasks.filter((task) => !task.completed);
    }

    if (filter === 'completed') {
      return tasks.filter((task) => task.completed);
    }

    return tasks;
  }, [tasks, filter]);

  const completedCount = tasks.filter((task) => task.completed).length;

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <Header />

        <TaskForm onAddTask={addTask} />

        <FilterBar selectedFilter={filter} onSelectFilter={setFilter} />

        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Progress</Text>
          <Text style={styles.summaryText}>
            {completedCount} of {tasks.length} task{tasks.length === 1 ? '' : 's'} completed
          </Text>
        </View>

        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItem
              task={item}
              onToggle={toggleTask}
              onDelete={deleteTask}
            />
          )}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyState}>
              <Text style={styles.emptyTitle}>No tasks here yet</Text>
              <Text style={styles.emptyText}>
                Try changing the filter or adding a new task.
              </Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.md,
  },
  summaryCard: {
    backgroundColor: theme.colors.card,
    borderRadius: 16,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 4,
  },
  summaryText: {
    fontSize: 14,
    color: theme.colors.muted,
  },
  listContent: {
    paddingBottom: 32,
  },
  emptyState: {
    backgroundColor: theme.colors.card,
    borderRadius: 16,
    padding: theme.spacing.lg,
    alignItems: 'center',
    marginTop: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.text,
    marginBottom: 6,
  },
  emptyText: {
    fontSize: 14,
    color: theme.colors.muted,
    textAlign: 'center',
    lineHeight: 20,
  },
});
