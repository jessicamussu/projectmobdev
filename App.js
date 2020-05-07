import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Greeting from './component/Greeting';
import Header from './component/Header';
import Global from './component/Global';
import CovidIndonesia from './component/CovidIndonesia';
import TextBody from './component/TextBody';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.boxHeader}>
        <Header />
      </View>
      <View style={styles.boxSub}>
        <Greeting />
        <Global />
      </View>
      <View style={styles.boxBody}>
        <TextBody />
        <CovidIndonesia />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#996633',
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  boxHeader: {
    flex: 2,
    alignItems: 'center',
    backgroundColor: '#59190b'
  },
  boxSub: {
    flex: 4,
    alignItems: 'center',
    backgroundColor: '#59190b'
  },
  boxSubBody: {
    flex: 4,
    alignItems: 'center',
    backgroundColor: '#59190b'
  },
  boxBody: {
    flex: 10
  }
})

export default App;