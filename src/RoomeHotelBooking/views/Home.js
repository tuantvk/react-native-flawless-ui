import React, { Component } from 'react';
import {
  View,
  FlatList,
} from 'react-native';
import Card from '../components/Card';

const ROOMS = [
  { id: 1, title: 'Practical Soft Computer', img: 'https://www.ashlinghotel.ie/wp-content/uploads/2019/02/Classic-Rooms-Accommodation-Dublin.jpg' },
  { id: 2, title: 'Awesome Fresh Cheese', img: 'https://r-ec.bstatic.com/images/hotel/max1024x768/162/162967334.jpg' },
  { id: 3, title: 'Generic Steel Shoes', img: 'https://r-ec.bstatic.com/images/hotel/max1024x768/162/162967334.jpg' },
  { id: 4, title: 'Refined Rubber Chair', img: 'https://www.ashlinghotel.ie/wp-content/uploads/2019/02/Classic-Rooms-Accommodation-Dublin.jpg' },
  { id: 5, title: 'Handcrafted Plastic Soap', img: 'https://r-ec.bstatic.com/images/hotel/max1024x768/162/162967334.jpg' },
  { id: 6, title: 'Intelligent Steel Shirt', img: 'https://www.ashlinghotel.ie/wp-content/uploads/2019/02/Classic-Rooms-Accommodation-Dublin.jpg' },
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  _listCardItem = ({ item }) => <Card {...item} />

  _keyExtractor = item => item.id;

  render() {
    return (
      <View>
        <FlatList
          data={ROOMS}
          renderItem={this._listCardItem}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }
}

export default Home;
