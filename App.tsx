import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Navigation } from "./src/navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigation />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
