import React from 'react';
import { View } from 'react-native';


const Layout = ({
  children,
}) => (
    <View style={{
      padding: 25,
    }}>
      {children}
    </View>
  );


export default Layout;