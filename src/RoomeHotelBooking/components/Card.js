import React from 'react';
import {
  Card,
} from 'native-base';
import { Image, StyleSheet } from 'react-native';
import { Text } from '../../Customs';

const Card = ({
  title,
  img,
  onPress,
}) => (
    <Card>
      <Image
        resizeMode='contain'
        source={{ uri: img }}
        style={styles.img}
      />
      <Text>{title}</Text>
    </Card>
  );

const styles = StyleSheet.create({
  img: {
    width: 300,
    height: 300,
  }
});

export default Card;