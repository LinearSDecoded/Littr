import { Text, View } from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24 }}>User Profile</Text>
      <Text>Points: 500</Text>
    </View>
  );
}