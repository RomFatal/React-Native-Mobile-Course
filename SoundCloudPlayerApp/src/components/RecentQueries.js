import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

const SoundCloud = ({ route }) => {
  let { recentSearches } = route.params;
  recentSearches = recentSearches.slice(Math.max(recentSearches.length - 5, 0));
  return (
    <View style={styles.container}>
      <Text>Recent Searches</Text>
      <FlatList
        keyExtractor={(item) => item}
        data={recentSearches}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Text keyExtractor={index}>
                {index + 1}. {item}
              </Text>
            </View>
          );
        }}
        ListEmptyComponent={() => (
          <View>
            <Text>No Items</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'
  }
});

export default SoundCloud;
