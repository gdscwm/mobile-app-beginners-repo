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
