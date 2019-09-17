import React from 'react';
import { Text as TextNative } from 'native-base';
import Consts from '../Consts';

const checkFontSize = size => {
  if (size === "BS") {
    return Consts.FSIZE_BS;
  }
  if (size === "XXL") {
    return Consts.FSIZE_XXL;
  }
  if (size === "XL") {
    return Consts.FSIZE_XL;
  }
  if (size === "L") {
    return Consts.FSIZE_L;
  }
  if (size === "S") {
    return Consts.FSIZE_S;
  }
  if (size === "VS") {
    return Consts.FSIZE_VS;
  }
  return Consts.FSIZE_M;
}

const Text = ({
  onPress,
  bold,
  size,
  color,
  style,
  children,
}) => {
  return (
    <TextNative onPress={onPress}
      style={[
        {
          fontWeight: bold ? '700' : '400',
          fontSize: checkFontSize(size),
          color: color || "#333"
        },
        { ...style }
      ]}>
      {children}
    </TextNative>
  )
}

export default Text;