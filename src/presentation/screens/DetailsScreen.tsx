import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Appbar, Text} from 'react-native-paper';
import {Loader} from '../components/organisms/Loader';
import {Post} from '../../infrastructure/api/dtos/Post';
import {useNavigation} from '@react-navigation/native';

const MAIN_HEADER_COLOR = '#512889';

export const DetailsScreen = ({route}) => {
  const {goBack} = useNavigation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [post, setPost] = useState<Post | null>(null);
  const {postId} = route.params;

  const fetchData = async () => {
    try {
      const originalFetch = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
      );
      const data = await originalFetch.json();
      setPost(data);
      setIsLoading(false);
    } catch (error) {
      setError(error as string);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Text> Oppss!! Ocurrió un error, intentalo otra vez </Text>;
  }

  return (
    <SafeAreaView style={DetailsScreenStyles.safeArea}>
      <Appbar.Header style={DetailsScreenStyles.header}>
        <Appbar.BackAction
          onPress={goBack}
          color={DetailsScreenStyles.white.color}
        />
        <Appbar.Content
          title="Detalles"
          color={DetailsScreenStyles.white.color}
        />
      </Appbar.Header>
      <View style={DetailsScreenStyles.mainView}>
        <Text variant="titleLarge">{post?.title}</Text>
        <Text variant="bodyMedium">{post?.body}</Text>
      </View>
    </SafeAreaView>
  );
};

const DetailsScreenStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    backgroundColor: MAIN_HEADER_COLOR,
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
    gap: 20,
  },
  white: {
    color: '#FFFF',
  },
});
