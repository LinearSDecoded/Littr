import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  const handleStartPicking = () => {
    router.push('/report'); // This will navigate to /app/report.tsx
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Välkommen till Littr</Text>

      {/* Placeholder for Challenges */}
      <View style={styles.box}>
        <Text style={styles.label}>Pågående utmaningar</Text>
        <Text>🚧 Kommer snart...</Text>
      </View>

      {/* Placeholder for Partners */}
      <View style={styles.box}>
        <Text style={styles.label}>Våra partners</Text>
        <Text>🚧 Kommer snart...</Text>
      </View>

      {/* CTA to Start Reporting Trash */}
      <TouchableOpacity style={styles.ctaButton} onPress={handleStartPicking}>
        <Text style={styles.ctaText}>Börja plocka</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  box: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  ctaButton: {
    marginTop: 'auto',
    backgroundColor: '#2E7D32',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  ctaText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});