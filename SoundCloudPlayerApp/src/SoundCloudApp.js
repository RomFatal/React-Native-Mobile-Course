import React from 'react';
import { FlatList, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import * as actions from './components/Actions';
import TrackItem from './components/getSong';

const mapStateToProps = ({ player }) => {
  return {
    items: player.tracks,
    recentSearches: player.recentSearches
  };
};

const SoundCloud = ({ items, loadTracks, navigation, recentSearches }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={'Search SoundCloud'}
        style={styles.searchBar}
        onSubmitEditing={({ nativeEvent: { text } }) => loadTracks(text)}
      />
      {items.length === 0 ? (
        <View style={styles.body}>
          <Text style={styles.message}>No Results Found</Text>
        </View>
      ) : (
        <FlatList
          data={items}
          renderItem={({ item }) => (
            <TrackItem isGridItem={false} navigation={navigation} trackObj={item} />
          )}
          keyExtractor={(item) => item.id}
        />
      )}
      <Button
        color="#130F0B"
        title="Recent Queries"
        onPress={() => {
          navigation.navigate('RecentQueries', {
            recentSearches
          });
        }}
      />
    </View>
  );
};

const ConnectedSoundCloud = connect(mapStateToProps, actions)(SoundCloud);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333'
  },
  message: {
    fontSize: 30,
    textAlign: 'center',
    color: '#ffffff'
  },
  body: {
    flex: 1,
    justifyContent: 'center'
  },
  searchBar: {
    backgroundColor: '#333333',
    borderColor: '#595959',
    height: 50,
    fontSize: 20,
    borderWidth: 4
  }
});

export default ConnectedSoundCloud;
