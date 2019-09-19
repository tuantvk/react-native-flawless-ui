import React from 'react';
import {
  TextInput,
  Layout,
} from '../../core';
import {
  ScrollableAvoidKeyboard,
} from '../../common';


const FormScrollView = () => (
  <ScrollableAvoidKeyboard>
    <Layout>
      <TextInput placeholder="Placeholder 1" />
      <TextInput placeholder="Placeholder 2" />
      <TextInput placeholder="Placeholder 3" />
      <TextInput placeholder="Placeholder 4" />
      <TextInput placeholder="Placeholder 5" />
      <TextInput placeholder="Placeholder 6" />
      <TextInput placeholder="Placeholder 7" />
      <TextInput placeholder="Placeholder 8" />
      <TextInput placeholder="Placeholder 9" />
      <TextInput placeholder="Placeholder 10" />
    </Layout>
  </ScrollableAvoidKeyboard>
);

export default FormScrollView;