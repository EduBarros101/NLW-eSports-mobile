import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface ButtonProps {
  title: string
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, React Native!</Text>

      <Button title='Send 11' />
      <Button title='Send 12' />
      <Button title='Send 13' />
      <Button title='Send 14' />

      <Button title='Hello, Button!' />

      <StatusBar style='auto' backgroundColor='orange' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
