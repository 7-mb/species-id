import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

export default function Tab() {
  const list = [
    {
      title: 'Appointments',
      icon: 'av-timer',
    },
    {
      title: 'Trips',
      icon: 'flight-takeoff',
    },
  ];

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
      <List
        data={[
          {
            id: '1',
            title: 'Hello',
            subTitle: 'World',
          },
          {
            id: '2',
            title: 'Hello',
            subTitle: 'World',
          },

          {
            id: '3',
            title: 'Hello',
            subTitle: 'World',
          },
        ]}
        estimatedItemSize={ESTIMATED_ITEM_HEIGHT.withSubTitle}
        renderItem={(info) => {
          return <ListItem {...info} />;
        }}
        keyExtractor={(item) => item.id}
      />
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
