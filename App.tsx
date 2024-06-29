import { StyleSheet } from "react-native";
import { ApolloProvider } from "@apollo/client";
import { SafeAreaView } from "react-native-safe-area-context";

import { Navigation } from "./src/navigation";
import { client } from "./src/services/apollo";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ApolloProvider client={client}>
        <Navigation />
      </ApolloProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
