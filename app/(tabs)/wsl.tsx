import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';

export default function Tab() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={styles.title}>Hallo Welt!</ThemedText>

        <ThemedView style={styles.stepContainer}>
          <ThemedText>
            Dies ist eine einfache View ohne Parallax oder Headerbild.
          </ThemedText>
        </ThemedView>

        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Nimmt den gesamten Bildschirm ein
    justifyContent: 'center', // Zentriert vertikal
    alignItems: 'center', // Zentriert horizontal
    padding: 16,
    //backgroundColor: '#353636',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    //color: '#fff',
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
});
