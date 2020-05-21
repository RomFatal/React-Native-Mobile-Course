import * as React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import { Audio } from 'expo-av';

const audioObject = new Audio.Sound();
async function play(stream_url) {
  try {
    await audioObject.unloadAsync();
    await audioObject.loadAsync({
      uri: stream_url + '?client_id=CW62xLA9h8wXrXC1WIaSX9OWA6novVIE'
    });
    await audioObject.playAsync();
  } catch (error) {
    console.log(Error);
  }
}

function songObject({ trackObj }) {
  return (
    <TouchableOpacity
      onPress={() => {
        play(trackObj.stream_url);
      }}
    >
      <View style={styles.SongList}>
        <Image style={styles.img} source={{ uri: trackObj.artwork_url }} />
        <View style={styles.textArea}>
          <Text style={styles.title}>{trackObj.title}</Text>
          <View style={styles.SongList}>
            <Text style={styles.text}>Artist: {trackObj.user.username}</Text>
            <Text style={styles.text}>Views: {trackObj.comment_count}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

songObject.propTypes = {
  trackObj: PropTypes.object
};

const styles = StyleSheet.create({
  SongList: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  img: {
    margin: 10,
    width: 80,
    height: 80
  },
  textArea: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 10
  },
  text: {
    flex: 1,
    fontSize: 15,
    color: 'grey'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff'
  }
});

export default songObject;
