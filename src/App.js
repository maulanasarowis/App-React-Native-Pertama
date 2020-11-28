import React from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import Styling from './pages/Styling';
import FlexBox from './pages/FlexBox';
import Position from './pages/Position';

const App = () => {
  return (
    <View>
      <ScrollView>
        <FlexBox />
        <Position />
        <Styling />
        <SampleComponent />
      </ScrollView>
    </View>
  );
};

export default App;
