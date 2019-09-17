import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';
import { Card } from 'native-base';

const CardEntry = ({ item }) => (
  <Card style={styles.card}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={styles.info}>
      <Text>{item.name}</Text>
      <Text size="S" bold={true}>${item.price}</Text>
    </View>
  </Card>
)

const styles = StyleSheet.create({
  card: {
    width: 125,
    height: 190,
    marginRight: 12,
    borderRadius: 6,
  },
  image: {
    width: '100%',
    height: 135,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  info: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8
  }
});

export default CardEntry;