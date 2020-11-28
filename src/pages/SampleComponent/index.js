import React, {Component} from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const SampleComponent = () => {
  return (
    <View>
      <Text style={{fontSize: 18, textAlign: 'center', marginTop: 40}}>
        Materi Sample Component
      </Text>
      <View style={{width: 80, height: 80, backgroundColor: '#2980b9'}} />
      <Text>Maulana</Text>
      <Maulana />
      <Text>Siap</Text>
      <Text>Tempur</Text>
      <Photo />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

const Maulana = () => {
  return <Text>Belajar</Text>;
};

const Photo = () => {
  return (
    <Image
      source={{uri: 'https://placeimg.com/100/100/tech'}}
      style={{width: 100, height: 100}}
    />
  );
};

class BoxGreen extends Component {
  render() {
    return <Text>Ini component dari clas</Text>;
  }
}

class Profile extends Component {
  render() {
    return (
      <View>
        <Image
          source={{uri: 'https://placeimg.com/100/100/people'}}
          style={{width: 100, height: 100, borderRadius: 50}}
        />
        <Text style={{fontSize: 20, color: '#2980b9'}}>Ini manusia</Text>
      </View>
    );
  }
}

export default SampleComponent;
