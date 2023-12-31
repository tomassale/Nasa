/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import Route from './src/route/Routes'

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <Route/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(7,26,93,255)'
  }
});

export default App;
