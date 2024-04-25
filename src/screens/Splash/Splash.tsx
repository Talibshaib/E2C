import React from 'react'
import { Button, Text, View } from 'react-native'
import DrawerContent from '../../../DrawerPortion'

const Splash = ({navigation}:any) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent:'flex-start' ,backgroundColor:'black' }}>
      <DrawerContent/>
    </View>
  )
}

export default Splash