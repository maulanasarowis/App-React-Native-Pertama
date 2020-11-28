import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import profil from '../../assets/Image/profil.jpeg';
class FlexBox extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 18, textAlign: 'center'}}>Materi FlexBox</Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'gray',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
          <View style={{backgroundColor: 'red', width: 50, height: 50}} />
          <View style={{backgroundColor: 'green', width: 50, height: 50}} />
          <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Tentang</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Image
            source={profil}
            style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Maulana Sarowis
            </Text>
            <Text>100k subscribers</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default FlexBox;
