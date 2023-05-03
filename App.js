import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useEffect,useState } from 'react';

export default function App() {
  const [objectList,setObjectList] = useState(null)
  useEffect(() => {setInterval(()=>{fetch('http://192.168.1.4:8000/fetch/')
  .then(response => response.json())
  .then(data =>setObjectList(JSON.parse(data)) )
  .catch(error => console.error(error));},1000) 

  }, []);
  // Data();
  if(!objectList){
    return <Text>Retreiving...</Text>
  }
  // console.log(typeof(objectList));
  return (
    <View style={styles.container}>
      <Text>FYP APP</Text>
      <Text>{objectList.length}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
