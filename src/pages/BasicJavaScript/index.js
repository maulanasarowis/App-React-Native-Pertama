import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BasicJavaScript = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Materi basic javascript di React Native
      </Text>
    </View>
  );
};

export default BasicJavaScript;
const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
