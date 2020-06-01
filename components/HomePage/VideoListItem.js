import React from 'react';
import { StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';

const VideoListItem = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <ImageBackground
        style={styles.container}
        source={{ uri: props.posterUrl }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.backgroundLight,
  },
});

export default VideoListItem;
