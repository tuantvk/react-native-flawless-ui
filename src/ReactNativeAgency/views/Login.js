import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {
  Icon,
  Item,
  Input,
  Label,
  Card,
} from 'native-base';

const Login = ({ navigation }) => (
  <View>
    <StatusBar hidden />
    <View style={styles.header}>
      <Text style={styles.title}>Log in</Text>
      <View />
    </View>
    <View style={styles.form}>
      <Item style={styles.label} floatingLabel>
        <Label>Email</Label>
        <Input />
      </Item>
      <Item style={styles.label} floatingLabel>
        <Label>Password</Label>
        <Input
          secureTextEntry={true}
        />
      </Item>
      <TouchableOpacity activeOpacity={.9} onPress={() => navigation.navigate('Home')}>
        <Card style={styles.login}>
          <Text style={styles.btn_login}>Log In</Text>
        </Card>
      </TouchableOpacity>
      <Text style={styles.footer_text} size="VS">Or sign up with social account</Text>
    </View>
    <View style={styles.socials}>
      <View style={[styles.social, styles.fb]}>
        <Icon style={styles.icon} name="facebook-f" type="FontAwesome" />
      </View>
      <View style={[styles.social, styles.tw]}>
        <Icon style={styles.icon} name="twitter" type="AntDesign" />
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  header: {
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    fontSize: 34,
    fontWeight: '700',
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
  },
  form: {
    marginHorizontal: 35,
  },
  label: {
    marginTop: 20,
  },
  login: {
    backgroundColor: '#000',
    alignItems: 'center',
    padding: 18,
    marginTop: 50,
  },
  footer_text: {
    textAlign: 'center',
    marginVertical: 25,
  },
  socials: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 35,
  },
  social: {
    borderRadius: 25,
    width: 150,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  fb: {
    backgroundColor: "#4267b2",
  },
  tw: {
    backgroundColor: "#1da1f2",
  },
  icon: {
    color: '#fff',
  },
  btn_login: {
    color: '#fff',
  }
});

export default Login;