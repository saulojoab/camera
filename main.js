import React, { useState } from 'react';
import { View, Slider, Text, TouchableOpacity, StatusBar } from 'react-native';
import { RNCamera } from 'react-native-camera';

export default function Main() {
  const [hud, setHud] = useState(false);
  const [exposure, setExposure] = useState(0.5);
  const [zoom, setZoom] = useState(0);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden />
      <RNCamera onTap={() => setHud(previous => !previous)} style={{ flex: 1 }} autoFocus="on" exposure={exposure} zoom={zoom}  />
      {hud ? (
        <TouchableOpacity onPress={() => setHud(previous => !previous)} style={{ width: '100%', height: '100%', position: 'absolute', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', zIndex: -10}}>
          <View style={{ width: '50%', height: 60,  alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.2)'}}>
            <Text style={{ marginLeft: 16, color: 'white', fontWeight: 'bold' }}>Exposição foda: {exposure}</Text>
            <Slider minimumTrackTintColor="white" maximumTrackTintColor="black" thumbTintColor="white" value={exposure} onValueChange={(val) => setExposure(val)} minimumValue={0} maximumValue={1} style={{ width: '100%' }}  />
          </View>

          <View style={{ width: '50%', height: 60, marginTop: 15, alignItems: 'center', justifyContent: 'center',  backgroundColor: 'rgba(0,0,0,0.2)'}}>
            <Text style={{ marginLeft: 16, color: 'white', fontWeight: 'bold' }}>Zoom foda: {`${parseInt(zoom*100)}%`}</Text>
            <Slider minimumTrackTintColor="white" maximumTrackTintColor="black" thumbTintColor="white" value={zoom}  onValueChange={(val) => setZoom(val)} minimumValue={0} maximumValue={1} style={{ width: '100%' }}  />
          </View>
        </TouchableOpacity>
      ) : <></>}
    </View>
  )
}
