import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

const Story = (props) => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{uri: props.gambar}}
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};
const PropsDinamis = () => {
  return (
    <View>
      <Text> Materi Component Dinamis dengan Props</Text>
      <ScrollView horizontal>
        <View style={{flexDirection: 'row'}}>
          <Story
            judul="Maulana"
            gambar="https://instagram.fpku2-1.fna.fbcdn.net/v/t51.2885-15/s150x150/127369531_743283182951550_6302827416225917937_n.jpg?_nc_ht=instagram.fpku2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8uPn6Nb-w-wAX9WNcq9&tp=1&oh=816258d1b983cf50036d656416c5d01f&oe=5FEBACCC"
          />
          <Story
            judul="Kelas Online"
            gambar="https://instagram.fpku2-1.fna.fbcdn.net/v/t51.2885-15/e35/c322.561.764.764a/s150x150/126940074_409781603391146_8397094314244910573_n.jpg?_nc_ht=instagram.fpku2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=K7HyCW-xAhYAX_lsHqj&tp=1&oh=f3a50469b145ec321ca654f472ba6185&oe=5FC59309"
          />
          <Story
            judul="Online"
            gambar="https://instagram.fpku2-1.fna.fbcdn.net/v/t51.2885-15/e35/c37.360.1152.1152a/s150x150/126484696_2473013669670011_8926545287637344561_n.jpg?_nc_ht=instagram.fpku2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=CSIE8uo5U5IAX_hLQYS&tp=1&oh=4e6230fb3c25b551f33383a91e81c612&oe=5FC54D9D"
          />
          <Story
            judul="Kelas"
            gambar="https://instagram.fpku3-1.fna.fbcdn.net/v/t51.2885-15/e35/c150.645.934.934a/s150x150/116753565_984354008661494_5448915519100229031_n.jpg?_nc_ht=instagram.fpku3-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=U6k4tNhFqoEAX-cWVIZ&tp=1&oh=2e45a4df9b3e7b317e8ec2352ec71275&oe=5FC5BF9A"
          />
          <Story
            judul="Kelas Online"
            gambar="https://instagram.fpku2-1.fna.fbcdn.net/v/t51.2885-15/e35/c322.561.764.764a/s150x150/126940074_409781603391146_8397094314244910573_n.jpg?_nc_ht=instagram.fpku2-1.fna.fbcdn.net&_nc_cat=1&_nc_ohc=K7HyCW-xAhYAX_lsHqj&tp=1&oh=f3a50469b145ec321ca654f472ba6185&oe=5FC59309"
          />
          <Story
            judul="Maulana"
            gambar="https://instagram.fpku2-1.fna.fbcdn.net/v/t51.2885-15/s150x150/127369531_743283182951550_6302827416225917937_n.jpg?_nc_ht=instagram.fpku2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=8uPn6Nb-w-wAX9WNcq9&tp=1&oh=816258d1b983cf50036d656416c5d01f&oe=5FEBACCC"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
