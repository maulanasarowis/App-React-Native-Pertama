import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import Styling from './pages/Styling';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';
import StateDinamis from './pages/StateDinamis';
import Communication from './pages/Communication';
import ReactNativeSvg from './pages/ReactNativeSvg';
import BasicJavaScript from './pages/BasicJavaScript';
import CallAPIVanilla from './pages/CallAPIVanilla';

const App = () => {
  const [isShow, SetIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     SetIsShow(false);
  //   }, 6000);
  // }, []);
  return (
    <View>
      <ScrollView>
        {/* <FlexBox />
        <Position />
        <Styling />
        <SampleComponent />
        <PropsDinamis />
        <StateDinamis />
        <Communication />
        <ReactNativeSvg />
        <BasicJavaScript /> */}
        <CallAPIVanilla />
      </ScrollView>
    </View>
  );
};

export default App;
