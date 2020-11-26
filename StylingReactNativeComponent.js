import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import laptop from './11.jpg';

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling component</Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: '#2980b9',
          borderWidth: 2,
          borderColor: '#5f27cd',
          marginTop: 20,
          marginLeft: 30,
        }}
      />
      <View
        style={{
          padding: 12,
          backgroundColor: '#f2f2f2',
          width: 212,
          borderRadius: 8,
        }}>
        <Image
          source={laptop}
          style={{width: 188, height: 187, borderRadius: 8}}
        />
        <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
          New laptop 2020
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            marginTop: 12,
            color: '#f2994a',
          }}>
          Rp. 25.000.000
        </Text>
        <Text style={{fontSize: 12, fontWeight: '300', marginTop: 12}}>
          Riau, Indonesia
        </Text>
        <View
          style={{
            backgroundColor: '#10ac84',
            paddingVertical: 6,
            borderRadius: 10,
            marginTop: 20,
          }}>
          <Text style={{textAlign: 'center', color: 'white'}}>Beli</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#10ac84',
    marginTop: 20,
    marginLeft: 30,
  },
});

export default StylingReactNativeComponent;
