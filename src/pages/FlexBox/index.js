import React, {Component, useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';
import profil from '../../assets/Image/profil.jpeg';
// class FlexBox extends Component {
//   constructor(props) {
//     super(props);
//     console.log('==> Constructor');
//     this.state = {
//       subscriber: 200,
//     };
//   }

//   componentDidMount() {
//     console.log('==> Component did mount');
//     setTimeout(() => {
//       this.setState({
//         subscriber: 500,
//       });
//     }, 2000);
//   }

//   componentDidUpdate() {
//     console.log('==> Component did update');
//   }
//   componentWillUnmount() {
//     console.log('==> Component Will Unmount');
//   }

//   render() {
//     console.log('==> Render');
//     return (
//       <View>
//         <Text style={{fontSize: 18, textAlign: 'center'}}>Materi FlexBox</Text>
//         <View
//           style={{
//             flexDirection: 'row',
//             backgroundColor: 'gray',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}>
//           <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
//           <View style={{backgroundColor: 'red', width: 50, height: 50}} />
//           <View style={{backgroundColor: 'green', width: 50, height: 50}} />
//           <View style={{backgroundColor: 'yellow', width: 50, height: 50}} />
//         </View>
//         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
//           <Text>Beranda</Text>
//           <Text>Video</Text>
//           <Text>Playlist</Text>
//           <Text>Tentang</Text>
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             marginTop: 20,
//             marginLeft: 20,
//           }}>
//           <Image
//             source={profil}
//             style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
//           />
//           <View>
//             <Text style={{fontSize: 20, fontWeight: 'bold'}}>
//               Maulana Sarowis
//             </Text>
//             <Text>{this.state.subscriber} subscribers</Text>
//           </View>
//         </View>
//       </View>
//     );
//   }
// }

const FlexBox = () => {
  const [subscriber, setSubscriber] = useState(200);
  useEffect(() => {
    console.log('did mount');
    // Penyederhanaan
    setTimeout(() => {
      setSubscriber(400);
    }, 2000);
    return () => {
      console.log('did update');
    };
  }, [subscriber]);

  // useEffect(() => {
  //   console.log('did update');
  //   setTimeout(() => {
  //     setSubscriber(400);
  //   }, 2000);
  // }, [subscriber]);
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
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginLeft: 20,
        }}>
        <Image
          source={profil}
          style={{width: 100, height: 100, borderRadius: 50, marginRight: 14}}
        />
        <View>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Maulana Sarowis
          </Text>
          <Text>{subscriber} subscribers</Text>
        </View>
      </View>
    </View>
  );
};

export default FlexBox;
