import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {ActivityIndicator, Appbar, Card, Text} from 'react-native-paper';
import {Loader} from '../components/organisms/Loader';
import {useNavigation} from '@react-navigation/native';
import {Post} from '../../infrastructure/api/dtos/Post';

export const PostsScreen = () => {
  const {navigate, goBack} = useNavigation();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchData = async () => {
    try {
      const originalFetch = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const data = await originalFetch.json();
      setPosts(data);
      setIsLoading(false);
    } catch (error) {
      setError(error as string);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handlePostClick = useCallback((post: Post) => {
    navigate('DetailsScreen', {
      postId: post.id,
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Text> Oppss!! Ocurrió un error, intentalo otra vez </Text>;
  }

  type CustomCardProps = {
    item: Post;
  };

  const CustomCard = React.memo(({item}: CustomCardProps) => {
    const [isImageLoading, setIsImageLoading] = useState<boolean>(true);
    return (
      <Card
        mode="elevated"
        style={PostsScreenStyles.card}
        onPress={() => handlePostClick(item)}
        elevation={5}>
        <Card.Title
          title={item?.title}
          titleVariant="titleLarge"
          titleNumberOfLines={2}
        />
        <Card.Cover
          source={{uri: `https://picsum.photos/300/150?random=${item?.id}`}}
          resizeMode="contain"
          loadingIndicatorSource={{
            uri: 'https://via.placeholder.com/200x100',
          }}
          onLoadEnd={() => setIsImageLoading(false)}
          style={{display: isImageLoading ? 'none' : 'flex'}}
        />
        {isImageLoading && (
          <ActivityIndicator
            size={'large'}
            style={PostsScreenStyles.imageActivityIndicator}
          />
        )}
      </Card>
    );
  });

  const renderItem = ({item}: {item: Post}) => {
    return <CustomCard item={item} />;
  };

  return (
    <SafeAreaView style={PostsScreenStyles.mainSafeArea}>
      <Appbar.Header style={PostsScreenStyles.header}>
        <Appbar.BackAction
          onPress={goBack}
          color={PostsScreenStyles.white.color}
        />
        <Appbar.Content
          title="Publicaciones"
          color={PostsScreenStyles.white.color}
        />
      </Appbar.Header>
      <View style={PostsScreenStyles.flatListContainer}>
        <FlatList
          data={posts}
          keyExtractor={(post: Post) => post?.id?.toString()}
          renderItem={renderItem}
          ListEmptyComponent={
            <Text>No existen publicaciones por el momento</Text>
          }
        />
      </View>
    </SafeAreaView>
  );
};

const PostsScreenStyles = StyleSheet.create({
  card: {
    backgroundColor: 'lightblue',
    marginBottom: 15,
  },
  header: {
    backgroundColor: 'purple',
  },
  mainSafeArea: {
    flex: 1,
  },
  white: {
    color: '#FFFF',
  },
  flatListContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#FFFF',
  },
  imageActivityIndicator: {
    width: 300,
    height: 150,
    alignSelf: 'center',
  },
});
