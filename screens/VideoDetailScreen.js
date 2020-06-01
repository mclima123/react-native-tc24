import React, { useLayoutEffect } from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../constants/Colors';
import CustomText from '../components/UI/CustomText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomButton from '../components/UI/CustomButton';

const VideoDetailScreen = props => {
  const video = props.route.params.video;

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: video.title,
    });
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.backgroundPosterContainer}>
        <Image
          style={styles.backgroundPoster}
          source={{ uri: video.posterUrl }}
          resizeMode="cover"
        />
        <LinearGradient
          colors={['#1f1f1f61', '#1f1f1f8A', '#1f1f1fB3', Colors.background]}
          style={styles.gradient}
        />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.posterAndTitleContainer}>
          <View style={styles.posterContainer}>
            <Image
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
              source={{ uri: video.posterUrl }}
            />
          </View>
          <View style={styles.movieDetailsTopContainer}>
            <View>
              <CustomText style={{ fontSize: 20, marginBottom: 10 }}>
                {video.title}
              </CustomText>
              <CustomText style={{ color: Colors.secondaryText }}>
                ({video.year}) {video.length}
              </CustomText>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CustomText style={{ fontSize: 22 }}>{video.rating} </CustomText>
              <MaterialIcons name="star" size={30} color={Colors.primaryText} />
            </View>
          </View>
        </View>
        <CustomText style={styles.description}>{video.description}</CustomText>
        <View style={{ alignItems: 'flex-end' }}>
          <CustomButton style={styles.button} title="Play" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  backgroundPosterContainer: {
    height: 200,
    width: '100%',
    position: 'absolute',
  },
  backgroundPoster: {
    height: '100%',
    width: '100%',
  },
  gradient: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    marginTop: 100,
    padding: 20,
  },
  posterAndTitleContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  posterContainer: {
    width: 120,
    height: 180,
  },
  movieDetailsTopContainer: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  description: {
    marginTop: 20,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    width: 100,
    backgroundColor: Colors.primary,
  },
});

export default VideoDetailScreen;
