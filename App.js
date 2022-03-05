import { Tab, Text, TabView } from 'react-native-elements';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function App() {
  const [index, setIndex] = React.useState(0);

  function changePage(tabIndex) {
    setIndex(tabIndex)
  }

  return (
    <View style={styles.container}>
      <Tab
        value={index}
        onChange={changePage}
        indicatorStyle={{
          backgroundColor: 'white',
          height: 3,
        }}
        variant="primary"
      >
        <Tab.Item
          title="Input"
        />
        <Tab.Item
          title="Graph"
        />
      </Tab>

      <TabView
        value={index} onChange={changePage} animationType="spring"
      >
        <TabView.Item style={{width: '100%'}}>
          <Text h1>Forms</Text>
        </TabView.Item>
        <TabView.Item style={{width: '100%'}}>
          <Text h1>Graph</Text>
        </TabView.Item>
      </TabView>
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
