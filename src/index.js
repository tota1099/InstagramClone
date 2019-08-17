import React, { View, Text } from 'react';
import { StatusBar } from 'react-native';

import Routes from './routes';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F5F5"/>
      <Routes />
    </>
  );
}
