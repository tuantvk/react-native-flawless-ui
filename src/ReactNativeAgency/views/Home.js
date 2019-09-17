import React, { Component } from 'react';
import {
  ImageBackground,
  View,
  Dimensions,
  StyleSheet,
  FlatList,
  StatusBar,
} from 'react-native';
import {
  CardEntry,
  Text,
} from '../../Customs';
import * as Animatable from 'react-native-animatable';


const PRODUCTS = [
  { id: 1, name: 'Product 1', price: 12, image: 'https://images-na.ssl-images-amazon.com/images/I/71Oi%2ByBX6ML._UL1500_.jpg' },
  { id: 2, name: 'Product 2', price: 52, image: 'https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/293c07a9879349cf87c1a8b700e52a51_9366/Swift_Run_Shoes_Black_AQ0863_01_standard.jpg' },
  { id: 3, name: 'Product 3', price: 16, image: 'https://s7d9.scene7.com/is/image/zumiez/pdp_hero/adidas-Xplorer-Light-Grey-%26-White-Shoes-_297870.jpg' },
  { id: 4, name: 'Product 4', price: 22, image: 'https://www.impericon.com/media/catalog/product/a/d/adidas_xplrcollegiate_burgundysilvermetalliccoregreen_shoes_lg_1.jpg' },
  { id: 5, name: 'Product 5', price: 32, image: 'https://images-na.ssl-images-amazon.com/images/I/71Oi%2ByBX6ML._UL1500_.jpg' },
  { id: 6, name: 'Product 6', price: 42, image: 'https://assets.adidas.com/images/w_600,h_600,f_auto,q_auto:sensitive,fl_lossy/293c07a9879349cf87c1a8b700e52a51_9366/Swift_Run_Shoes_Black_AQ0863_01_standard.jpg' },
  { id: 7, name: 'Product 7', price: 32, image: 'https://s7d9.scene7.com/is/image/zumiez/pdp_hero/adidas-Xplorer-Light-Grey-%26-White-Shoes-_297870.jpg' },
];
const { width, height } = Dimensions.get('window');


export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 0,
    }
  }

  handleViewRef = ref => this.view = ref;

  bounce = () => this.view.bounce(500);

  _keyExtractor = (item) => item.id.toString();

  _itemProduct = ({ item, index }) => (
    <CardEntry item={item} />
  )

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <ImageBackground source={{ uri: 'https://file.yes24.vn/Upload/ProductImage/GmarketSport/1924374_L.jpg' }} style={styles.img_bg}>
          <Text style={styles.felling} color="#fff" size="BS">perfect feeling</Text>
          <View style={styles.content_bg}>
            <Animatable.Text animation="fadeInLeft" direction="alternate" duration={650} easing="linear">
              <Text>Just for you</Text>
            </Animatable.Text>
            <View style={styles.title}>
              <Animatable.Text animation="fadeInLeft" direction="alternate" delay={660} duration={500} easing="linear">
                <Text bold={true} size="BS" color="#000">SPRING</Text>
              </Animatable.Text>
            </View>
            <Animatable.Text animation="fadeInLeft" direction="alternate" delay={1100} duration={450} easing="linear">
              <Text bold={true} size="L">Collection</Text>
            </Animatable.Text>
          </View>
        </ImageBackground>
        <View style={styles.sub_story}>
          <View style={styles.social}>
            <Text color="#e94e2d" style={styles.social_item}>Fb.</Text>
            <Text color="#fff" style={styles.social_item}>Tw.</Text>
            <Text color="#fff" style={styles.social_item}>In.</Text>
          </View>
          <View style={styles.content}>
            <Text bold={true} style={styles.also_make}>You also make like</Text>
            <FlatList
              horizontal
              data={PRODUCTS}
              renderItem={this._itemProduct}
              keyExtractor={this._keyExtractor}
              showsHorizontalScrollIndicator={false}
              onEndReachedThreshold={10}
            />
          </View>
          <View style={styles.category}>
            <Text style={styles.badge} color="#fff">Women</Text>
            <Text color="#e94e2d">Men</Text>
            <Text color="#e94e2d">Kids</Text>
          </View>
        </View>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  img_bg: {
    width,
    height: height / 1.5,
    zIndex: -1,
    position: 'relative'
  },
  content_bg: {
    paddingTop: 45,
    paddingHorizontal: 30
  },
  title: {
    marginTop: 30
  },
  sub_story: {
    paddingVertical: 25,
    paddingLeft: 30,
    backgroundColor: '#fff',
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    height: height / 2,
    width,
    position: 'absolute',
    bottom: 0,
    zIndex: 99
  },
  social: {
    backgroundColor: '#1d1b1d',
    height: 80,
    width: width / 2.4,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    position: 'absolute',
    top: -40,
    right: 0,
    paddingHorizontal: 15,
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center'
  },
  social_item: {

  },
  content: {
    marginVertical: 30
  },
  also_make: {
    marginBottom: 25
  },
  category: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 35,
    left: 0,
    right: 0
  },
  badge: {
    backgroundColor: '#e94e2d',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20
  },
  felling: {
    transform: [{ rotate: "90deg" }],
    position: 'absolute',
    top: 60,
    left: -width / 3,
    letterSpacing: 2.5
  }
});

export default Home