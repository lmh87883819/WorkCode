import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Drawer, List, WhiteSpace } from 'antd-mobile-rn';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class DrawerExample extends React.Component {
  constructor(props){
    super(props)
    this.state={
      open:false
    }
  }
  onOpenChange = (...args) => {
    console.log(args);
    // this.setState({ open: !this.state.open });
  }

  render() {
    const itemArr = Array.apply(null, Array(20))
      .map((_i, index) => {
        return (
          <List.Item
            key={index}
          >
            <Text>Categories - {index}</Text>
          </List.Item>
        );
      });

    // Todo: https://github.com/DefinitelyTyped/DefinitelyTyped
    const sidebar = (
      <ScrollView style={[styles.container]}>
        <List>{itemArr}</List>
      </ScrollView>
    );

    return (
      <Drawer
        sidebar={sidebar}
        position="right"
        open={this.state.open}
        onOpenChange={this.onOpenChange}
        drawerBackgroundColor="#ccc"
      >
        <View style={{ flex: 1, marginTop: 114, padding: 8 }}>
          <Button onClick={() => this.setState({open:!this.state.open})}>
            Open drawer
          </Button>
          <WhiteSpace />
        </View>
      </Drawer>
    );
  }
}