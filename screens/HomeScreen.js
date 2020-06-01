import React, { useLayoutEffect, useState, useRef, useCallback } from 'react';
import {
  View,
  StyleSheet,
  Alert,
  ScrollView,
  Animated,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Video from 'react-native-video';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useFocusEffect } from '@react-navigation/native';

import CustomText from '../components/UI/CustomText';
import { CustomHeaderButtons, Item } from '../components/UI/CustomHeaderButton';
import { logOut } from '../store/actions/auth';
import Colors from '../constants/Colors';
import { getRandomVideoList } from '../data/dummy-data';
import VideoList from '../components/HomePage/VideoList';

const VIDEOS_1 = getRandomVideoList();
const VIDEOS_2 = getRandomVideoList();
const VIDEOS_3 = getRandomVideoList();
const VIDEOS_4 = getRandomVideoList();

const VIDEO_PREVIEW_HEIGHT = 200;

const HomeScreen = props => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videoOpacity, setVideoOpacity] = useState(0);
  const [paused, setPaused] = useState(false);

  const animatedHeight = useRef(new Animated.Value(0)).current;
  const animatedOpacity = animatedHeight.interpolate({
    inputRange: [0, VIDEO_PREVIEW_HEIGHT],
    outputRange: [0, 1],
  });

  const dispatch = useDispatch();

  const openVideoPreview = video => {
    if (!selectedVideo) {
      Animated.timing(animatedHeight, {
        toValue: VIDEO_PREVIEW_HEIGHT,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else if (selectedVideo.id === video.id) return;

    setVideoOpacity(0);
    setSelectedVideo(video);
  };

  const closeVideoPreview = () => {
    Animated.timing(animatedHeight, {
      toValue: 0,
      duration: 500,
      useNativeDriver: false,
    }).start(() => {
      setVideoOpacity(0);
      setSelectedVideo(null);
    });
  };

  const logoutHandler = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to log out?',
      [
        {
          text: 'No',
          style: 'cancel',
        },
        { text: 'Log Out', onPress: () => dispatch(logOut()) },
      ],
      { cancelable: true }
    );
  };

  useFocusEffect(
    useCallback(() => {
      setPaused(false);
      return () => setPaused(true);
    }, [])
  );

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <CustomHeaderButtons>
          <Item title="logout" iconName="exit-to-app" onPress={logoutHandler} />
        </CustomHeaderButtons>
      ),
    });
  }, []);

  return (
    <View style={styles.screen}>
      <Animated.View
        style={{
          ...styles.videoPreviewContainer,
          height: animatedHeight,
          opacity: animatedOpacity,
        }}
      >
        {selectedVideo && (
          <View style={styles.videoInnerContainer}>
            <View style={styles.activityIndicatorContainer}>
              <ActivityIndicator size={50} color={Colors.highlight} />
            </View>
            <Video
              source={{ uri: selectedVideo.videoUrl }}
              style={{ ...styles.video, opacity: videoOpacity }}
              muted={true}
              repeat={true}
              resizeMode={'cover'}
              rate={1.0}
              ignoreSilentSwitch={'obey'}
              paused={paused}
              onReadyForDisplay={() => setVideoOpacity(1)}
            />
            <View style={styles.videoOverlay}>
              <View style={styles.videoOverlayRowTop}>
                <CustomText style={styles.videoTitle}>
                  {selectedVideo.title}
                </CustomText>
                <TouchableOpacity onPress={closeVideoPreview}>
                  <MaterialIcons
                    name="close"
                    size={30}
                    color={Colors.primaryText}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.videoOverlayRowBottom}
                onPress={() => {
                  props.navigation.navigate('VideoDetail', {
                    video: selectedVideo,
                  });
                }}
              >
                <CustomText>Details</CustomText>
                <MaterialIcons
                  name="chevron-right"
                  size={30}
                  color={Colors.primaryText}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Animated.View>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 }}>
        <VideoList
          listTitle="Suggestions For You"
          videos={VIDEOS_1}
          onPressVideo={openVideoPreview}
        />
        <VideoList
          listTitle="New Releases"
          videos={VIDEOS_2}
          onPressVideo={openVideoPreview}
        />
        <VideoList
          listTitle="TV Action & Adventure"
          videos={VIDEOS_3}
          onPressVideo={openVideoPreview}
        />
        <VideoList
          listTitle="Recently Added"
          videos={VIDEOS_4}
          onPressVideo={openVideoPreview}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  videoPreviewContainer: {
    overflow: 'hidden',
  },
  videoInnerContainer: {
    width: '100%',
    height: VIDEO_PREVIEW_HEIGHT,
    borderBottomWidth: 2,
    borderColor: Colors.secondaryText,
  },
  activityIndicatorContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  videoOverlay: {
    position: 'absolute',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    backgroundColor: '#00000080',
  },
  videoOverlayRowTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  videoOverlayRowBottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 10,
  },
  videoTitle: { fontSize: 20 },
});

export default HomeScreen;
