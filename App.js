import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Constants, Video, Asset, AppLoading } from 'expo';
import Hair from "./hair.mp4";

export default class App extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        path: null,
      };
    }
  state = {
      isReady: false,
    };
    async _cacheResourcesAsync() {
       const images = [
         require('./hair.mp4'),
       ];

       const cacheImages = images.map((image) => {
         return Asset.fromModule(image).downloadAsync();
       });
       return Promise.all(cacheImages)

     }


    render() {
       if (!this.state.isReady) {
         return (
           <AppLoading
             startAsync={this._cacheResourcesAsync}
             onFinish={() => this.setState({ isReady: true })}
             onError={console.warn}
           />
         );
       };

    return (
      <View style={styles.container}>
      <Video
      source={Hair}   // Can be a URL or a local file.
      rate={2.0}
   volume={1.0}
   isMuted={false}
   resizeMode="cover"
   shouldPlay
   isLooping
   style={StyleSheet.absoluteFill}
       />
      </View>
      );
        {this.state.path ? this.renderVideo() : this.renderImage()}
}

renderImage() {
    return (
      <View style="styles.container">
        <Text>
        Cancel
        </Text>
      </View>
    );
  }

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
