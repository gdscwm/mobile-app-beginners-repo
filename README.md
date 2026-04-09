# Campus Task Tracker

The app we're building today is **Campus Task Tracker**, a small React Native + Expo app where users can:
- add tasks
- mark tasks complete
- delete tasks
- filter tasks by status
- view a clean mobile-friendly layout

---

## Who this project is for

This project is designed for **college students with some introductory programming experience**. You should be comfortable with ideas like:
- variables
- functions
- arrays and objects
- conditionals
- basic loops or array methods

Students do **not** need prior mobile development experience.

---

## What students should learn

By the end of this project, students should be able to:
1. explain what Expo and React Native do
2. describe the role of `App.js` in a small app
3. use `useState` to store changing data
4. render lists with `FlatList`
5. pass data and callback functions as props
6. handle input and button presses
7. organize a project into reusable components
8. explain why React apps update the UI when state changes

---

## Big teaching idea

A good way to see this project is:

> Mobile development is not a completely new world. You already know many of the core ideas. The main differences are the UI environment, the component model, and event-driven interaction.

What to emphasize as you learn:
- arrays of objects still matter
- functions still matter
- conditionals still matter
- the new ideas are mostly **components**, **state**, and **mobile UI primitives** like `View`, `Text`, `TextInput`, and `Pressable`

---

## Final repo structure

By the end, the project should look like this:

```text
mobile-app-beginners-repo/
├── .github/
│   └── workflows/
│       └── ci.yml
├── app/
│   ├── data.js
│   └── theme.js
├── components/
│   ├── FilterBar.js
│   ├── Header.js
│   ├── TaskForm.js
│   └── TaskItem.js
├── .gitignore
├── App.js
├── LICENSE
├── package.json
└── README.md
```

---

## Before you build

### Software to install

1. **Node.js** (current LTS is a safe choice)
2. **Git**
3. **Expo Go** on your phone, if you want to test on a physical device

**Recommended**:
- Android Studio for an Android emulator
- Xcode for an iOS simulator on macOS

### How students will run the app

From the project folder:

```bash
npm install
npm start
```

Then:
- scan the QR code with Expo Go, or
- press `a` for Android emulator, or
- press `i` for iOS simulator on macOS

---

## Part 0: Create the repo and starter app

If you want to recreate this project from the ground up instead of cloning the finished repo, start here.

### 0.1 Create a GitHub repo

Create a new GitHub repository named something like:
- `campus-task-tracker`
- `mobile-app-beginners-repo`
- etc.

Then create the local project.

### 0.2 Create a new Expo project

```bash
npx create-expo-app@latest campus-task-tracker
cd campus-task-tracker
```

This creates a working React Native app with Expo.

### 0.3 Replace the starter files with this simpler workshop structure

Create folders:

```bash
mkdir app components docs
mkdir -p .github/workflows
```

At this point, you should understand:
- Expo gives them a working mobile app environment quickly
- React Native lets them build mobile UIs with JavaScript and React concepts
- they will now replace the default starter with a custom app

### Checkpoint 1

Ask:
<details>
<summary><strong>Can you run the starter Expo app?</strong></summary>

Yes — running `npm start` should launch the Expo dev server and display a QR code or simulator.

</details>

<details>
<summary><strong>What command starts the development server?</strong></summary>

`npm start` (or `npx expo start`) starts the Expo development server.

</details>

<details>
<summary><strong>What is the role of <code>App.js</code>?</strong></summary>

`App.js` is the root component of the application. It controls the main UI structure and manages global state.

</details>

---

## Part 1: Create shared data and theme files

This is a good moment to see that even a small app benefits from organization.

### 1.1 Create `app/data.js`

```js
export const starterTasks = [
  {
    id: '1',
    title: 'Review calculus notes before Friday',
    completed: false,
  },
  {
    id: '2',
    title: 'Send email to club project team',
    completed: true,
  },
  {
    id: '3',
    title: 'Finish reading for literature class',
    completed: false,
  },
];
```

What to understand:
- the app starts with an **array of task objects**
- each task has an `id`, `title`, and `completed` flag
- this should feel familiar from intro programming or data structures work

### 1.2 Create `app/theme.js`

```js
export const theme = {
  colors: {
    background: '#F6F8FB',
    card: '#FFFFFF',
    primary: '#4F46E5',
    primaryLight: '#E0E7FF',
    text: '#111827',
    muted: '#6B7280',
    border: '#E5E7EB',
    success: '#16A34A',
    danger: '#DC2626',
  },
  spacing: {
    sm: 8,
    md: 12,
    lg: 20,
  },
};
```

What to understand:
- shared values reduce repetition
- themes make it easier to update styles later
- even small apps benefit from separating data and design constants

### Checkpoint 2

Ask:
<details>
<summary><strong>Can you add another starter task?</strong></summary>

How: add another object to the `starterTasks` array with `id`, `title`, and `completed`.

</details>

<details>
<summary><strong>Can you change one theme color and predict what changes?</strong></summary>

How: changing a theme color (like `primary`) will update all components that reference it.

</details>

---

## Part 2: Build the header component

The header introduces the app title and gives students their first reusable component.

### 2.1 Create `components/Header.js`

```js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { theme } from '../app/theme';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.eyebrow}>Mini mobile app project</Text>
      <Text style={styles.title}>Campus Task Tracker</Text>
      <Text style={styles.subtitle}>
        Learn mobile app development by building something useful.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.lg,
  },
  eyebrow: {
    fontSize: 13,
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: theme.colors.primary,
    marginBottom: 6,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: theme.colors.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: theme.colors.muted,
  },
});
```

What to understand:
- `View` acts like a container
- `Text` is how React Native displays text
- styles are JavaScript objects, not separate CSS files
- components help break larger UIs into smaller pieces

### Checkpoint 3

Ask:
<details>
<summary><strong>Can you change the app title?</strong></summary>

Yes: edit the `Text` inside `Header.js`.

</details>

<details>
<summary><strong>Can you personalize the subtitle?</strong></summary>

Yes: modify the subtitle string in `Header.js`.

</details>

<details>
<summary><strong>What makes this reusable?</strong></summary>

It's a self-contained component that can be imported and reused anywhere.

</details>

---

## Part 3: Build the task input form

Now students create their first interactive component with local state.

### 3.1 Create `components/TaskForm.js`

```js
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
```

What to understand:
- `useState('')` stores the current input text
- `TextInput` shows the current state value
- `onChangeText={setTaskTitle}` updates state as the user types
- pressing the button calls a function passed down from the parent component

Important teaching point:
- the form **does not own the whole task list**
- it only owns the temporary input string
- the full task list should live in `App.js`

### Checkpoint 4

Ask:
<details>
<summary><strong>What value is stored in <code>taskTitle</code>?</strong></summary>

The current text input entered by the user.

</details>

<details>
<summary><strong>Why does this component use <code>useState</code>?</strong></summary>

To store and update dynamic input data.

</details>

<details>
<summary><strong>Why is <code>onAddTask</code> a prop?</strong></summary>

Because the parent (`App.js`) owns the task list and logic.

</details>

---

## Part 4: Build one task row

This component shows a single task and lets users toggle or delete it.

### 4.1 Create `components/TaskItem.js`

```js
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
```

What to understand:
- this component receives a single `task` object as a prop
- it does not store task state itself
- button presses call parent-owned functions with the task id
- conditional styling changes the checkbox and text when a task is completed

### Checkpoint 5

Ask:
<details>
<summary><strong>Which props does TaskItem receive?</strong></summary>

`task`, `onToggle`, and `onDelete`.

</details>

<details>
<summary><strong>Why call <code>onToggle(task.id)</code>?</strong></summary>

Because state lives in the parent; this triggers a state update there.

</details>

<details>
<summary><strong>What changes when <code>completed</code> is true?</strong></summary>

The checkbox fills and text is struck through.

</details>

---

## Part 5: Build the filter buttons

Now students add a small UI control for filtering tasks.

### 5.1 Create `components/FilterBar.js`

```js
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
```

What to understand:
- the filter options are stored in an array
- `map()` generates one button per filter
- the currently selected filter is controlled by the parent
- this is a simple example of conditional styling and event handling

### Checkpoint 6

Ask:
<details>
<summary><strong>Why is <code>map()</code> useful?</strong></summary>

It creates UI elements dynamically from an array.

</details>

<details>
<summary><strong>How does it know which button is selected?</strong></summary>

By comparing `selectedFilter` to each filter value.

</details>

<details>
<summary><strong>What if you wanted a fourth filter?</strong></summary>

Add another object to the `filters` array.

</details>

---

## Part 6: Put the whole app together in `App.js`

This file owns the main data and application logic.

### 6.1 Create `App.js`

```js
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
```

### 6.2 Explain the app architecture

Explain where the data lives:
- `tasks` lives in `App.js`
- `filter` lives in `App.js`
- `TaskForm` owns only its text input state
- child components receive data and callbacks through props

Explain each function:

#### `addTask(taskTitle)`
- trims whitespace
- ignores empty input
- creates a new task object
- adds the new task to the beginning of the array

#### `toggleTask(taskId)`
- uses `map()` to create a new array
- flips `completed` for exactly one task
- keeps every other task unchanged

This is a great place to ask:
- Why do we use `map()` instead of changing the original array directly?

#### `deleteTask(taskId)`
- uses `filter()` to remove one task
- returns a new array without mutating the old one

#### `filteredTasks`
- derives the visible task list from the selected filter
- shows students that not all values need their own separate state variable

#### `FlatList`
- efficiently renders scrolling lists in React Native
- uses `keyExtractor` so React can track items correctly
- renders each task with the `TaskItem` component

### Checkpoint 7

Ask:
<details>
<summary><strong>What does useState store?</strong></summary>

The `tasks` array and the `filter` value.

</details>

<details>
<summary><strong>What part owns the data?</strong></summary>

`App.js`.

</details>

<details>
<summary><strong>Why does toggleTask use map()?</strong></summary>

To create a new array and update one item immutably.

</details>

<details>
<summary><strong>Why does deleteTask use filter()?</strong></summary>

To remove an item by returning a new array without it.

</details>

<details>
<summary><strong>Why FlatList?</strong></summary>

It efficiently renders large lists and handles scrolling performance.

</details>

---

## Part 7: Confirm `package.json`

If you created the app with Expo, your versions may differ slightly over time. That is okay as long as the project runs. The finished repo currently uses:

```json
{
  "name": "campus-task-tracker",
  "version": "1.0.0",
  "private": true,
  "main": "node_modules/expo/AppEntry.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android",
    "ios": "expo start --ios",
    "web": "expo start --web",
    "lint": "echo 'No linter configured yet'"
  },
  "dependencies": {
    "expo": "~53.0.0",
    "expo-status-bar": "~2.2.3",
    "react": "19.0.0",
    "react-native": "0.79.2"
  }
}
```

Install dependencies if needed:

```bash
npm install
```

---

## Part 8: Add a simple GitHub Actions workflow

This step is optional for a workshop demo, but useful for showing what a real repo can include.

Create `.github/workflows/ci.yml`:

```yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm install

      - name: Verify Expo project can start config resolution
        run: npx expo config --type public
```

What to understand:
- this is a very small CI check
- it confirms that dependencies install and Expo can read the project config
- it is an example of professional repo hygiene, even for beginner projects

---

## Part 9: Run the finished project

From the project folder:

```bash
npm install
npm start
```

Try the following:
1. add a task
2. mark it complete
3. switch filters
4. delete a task
5. change the theme color and re-run

If students are editing live during class, encourage them to make one small change at a time and verify that it works before moving on.

---

## Part 10: Suggested workshop lesson plan

<details>
<summary><strong>10.1 Intro to mobile app development (10 minutes)</strong></summary>

Topics:
- What is a mobile framework?
- Why use React Native?
- Why Expo is helpful for beginners

### 10.2 Tour the codebase (15 minutes)

Walk through:
- `App.js`
- `components/`
- `app/data.js`
- `app/theme.js`

Prompt students to identify:
- where data lives
- which parts are reusable
- which parts are purely visual

### 10.3 Build features together (40 minutes)

Build in this order:
1. starter data
2. header
3. form
4. task row
5. filter bar
6. app assembly in `App.js`

Teaching advice:
- keep each step small
- run the app early and often
- narrate why each file exists
- pause after each feature for a checkpoint question

### 10.4 Styling and UI discussion (10 minutes)

Discuss:
- spacing
- readable text hierarchy
- card layout patterns
- visual feedback for selected or completed items
- why mobile UI must stay uncluttered

### 10.5 Extra time (20 to 30 minutes)

Pick one extension and implement:
- priority labels
- due dates
- better empty state
- persistent storage
</details>

---

## Part 11: Instructor notes

### What to emphasize

Start with what is familiar:
- arrays of objects
- functions that transform data
- conditionals
- breaking a big problem into smaller pieces

Then show what is new:
- components
- props
- hooks like `useState`
- mobile UI primitives such as `View`, `Text`, `TextInput`, and `Pressable`

### Common beginner stumbling points

Watch for these:
- confusing **props** with **state**
- mutating arrays directly instead of creating new ones
- forgetting to pass callback functions to child components
- not understanding why the UI re-renders after state changes
- trying to put all logic into one file without using components

---

## Part 12: Student checkpoints and assessment questions

### Core checkpoints

<details><summary><strong>Can you run the app?</strong></summary>
Yes — using `npm start`.
</details>

<details><summary><strong>Where do tasks live?</strong></summary>
In `App.js` state.
</details>

<details><summary><strong>Add starter task?</strong></summary>
Modify `data.js`.
</details>

<details><summary><strong>Personalize app?</strong></summary>
Change text or theme values.
</details>

<details><summary><strong>Why map()?</strong></summary>
Immutable updates.
</details>

<details><summary><strong>Add feature?</strong></summary>
Yes — demonstrates understanding.
</details>

<details><summary><strong>Reusable component?</strong></summary>
Header, TaskItem, etc.
</details>

---

### Wrap-up questions

<details><summary><strong>What part of the app owns the data?</strong></summary>
App.js
</details>
<details><summary><strong>Which components are reusable?</strong></summary>
Header, TaskItem, FilterBar
</details>
<details><summary><strong>Why do we use `FlatList` instead of directly rendering everything inline?</strong></summary>
Efficient rendering
</details>

---

## Part 13: Stretch challenges

Once you finish the core version, try to build one more feature. Thi sis what takes this project from workshop material to resume ready.

### Good beginner stretch ideas

- add a **clear completed** button
- sort tasks alphabetically
- add icons or emoji by task type
- show the number of active tasks
- add priority badges
- add due dates
- let users edit an existing task
- improve the empty state message

### More advanced stretch ideas

- save tasks between app launches with persistent storage
- add multiple screens with Expo Router or React Navigation
- add categories for school, work, and personal tasks
- create a separate statistics screen
- add dark mode

---

## Git commands for publishing the repo

Once the project works locally:

```bash
git init
git add .
git commit -m "feat: build Campus Task Tracker workshop app"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```
