import React from 'react';
import { StyleSheet } from 'react-native';
import {
  KeyboardAwareScrollView,
} from 'react-native-keyboard-aware-scroll-view';


const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
});


//  Make sure you are using react-native 0.46 or above.
//  Set windowSoftInputMode to adjustPan in AndroidManifest.xml.


const ScrollableAvoidKeyboard = ({
  children,
  contentContainerStyle,
  ...restProps,
}) => (
    <KeyboardAwareScrollView
      bounces={false}
      bouncesZoom={false}
      alwaysBounceVertical={false}
      alwaysBounceHorizontal={false}
      removeClippedSubviews={false}
      contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
      enableOnAndroid={true}
      {...restProps}
    >
      {children}
    </KeyboardAwareScrollView>
  );

  
export default ScrollableAvoidKeyboard;
