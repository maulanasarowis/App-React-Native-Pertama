import React from 'react';
import {View, ScrollView} from 'react-native';
import SampelComponent from './SampelComponent';
import StylingReactNativeComponent from './StylingReactNativeComponent';
import MateriFlexBox from './MateriFlexBox';

const App = () => {
  return (
    <View>
      <ScrollView>
        <StylingReactNativeComponent />
        <SampelComponent />
        <MateriFlexBox />
      </ScrollView>
    </View>
  );
};

export default App;
