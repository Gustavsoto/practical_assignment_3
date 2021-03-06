import * as React from 'react';
import { Text, View, Button } from 'react-native';
import {
  StyleSheet,
  SafeAreaView,
  SectionList,
  StatusBar,
  FlatList,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default function SecondScreen(props) {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'Dāvis'},
          {key: 'Pēteris'},
          {key: 'Liepa'},
          {key: 'Miks'},
          {key: 'Krists'},
          {key: 'Dārta'},
          {key: 'Kristaps'},
          {key: 'Oto'},
          {key: 'Jānis'},
          {key: 'Salvis'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      <Text> </Text>
      <Button
        title="Go to Homepage"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  );
}