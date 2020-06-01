import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import CustomText from '../UI/CustomText';
import VideoListItem from './VideoListItem';

const VideoList = props => {
  return (
    <View style={styles.rowListContainer}>
      <CustomText style={styles.rowListTitle}>{props.listTitle}</CustomText>
      <FlatList
        keyExtractor={(item, index) => String(item.id)}
        data={props.videos}
        renderItem={item => (
          <VideoListItem
            posterUrl={item.item.posterUrl}
            title={item.item.title}
            onPress={() => props.onPressVideo(item.item)}
          />
        )}
        horizontal={true}
        contentContainerStyle={{ paddingHorizontal: 5 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rowListContainer: {
    width: '100%',
    height: 200,
  },
  rowListTitle: {
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});

export default VideoList;
