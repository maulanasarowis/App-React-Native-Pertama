import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import IllustrationSvg from '../../assets/Image/iIlustration_Yacht.svg';

const ReactNativeSvg = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>
        Materi menggunakan file svg didalam React Native
      </Text>
      <IllustrationSvg width={244} height={125} />
    </View>
  );
};

export default ReactNativeSvg;

const styles = StyleSheet.create({
  container: {padding: 20},
  textTitle: {textAlign: 'center'},
});
