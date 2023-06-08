import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

const PlaceholderImage = require('./assets/images/background-image.png');

export default function App() {
  const [selectImage, setSelectImage] = useState(null);

  const pickImageAsync =  async () => {
      let result =  await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });

      
      if (!result.canceled){
        setSelectImage(result.assets[0].uri);
      }else {
      alert('Select Image to edit');
      }
  }

  return (
  
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} selectedImage={selectImage}/>
      </View>
      <View>
        <Button label='Chose a photo' theme='primary' onPress={pickImageAsync}/>
        <Button label='Use this photo' />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  image: {
    width: 320,
    height: 449,
    borderRadius: 18,
  },
});
