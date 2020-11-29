import React from 'react';
import {Image, Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import laptop from '../../assets/Image/11.jpg';

const Product = (props) => {
  return (
    <View style={styles.wrapper}>
      <Image source={laptop} style={styles.imageProduct} />
      <Text style={styles.productName}>New laptop 2020</Text>
      <Text style={styles.productPrice}>Rp. 25.000.000</Text>
      <Text style={styles.location}>Riau, Indonesia</Text>
      <TouchableOpacity onPress={props.onButtonPress}>
        <View style={styles.buttonWrapper}>
          <Text style={styles.buttonText}>Beli</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  wrapper: {
    padding: 12,
    backgroundColor: '#f2f2f2',
    width: 212,
    borderRadius: 8,
  },
  imageProduct: {width: 188, height: 187, borderRadius: 8},
  productName: {fontSize: 14, fontWeight: 'bold', marginTop: 16},
  productPrice: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#f2994a',
  },
  location: {fontSize: 12, fontWeight: '300', marginTop: 12},
  buttonWrapper: {
    backgroundColor: '#10ac84',
    paddingVertical: 6,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {textAlign: 'center', color: 'white'},
});
