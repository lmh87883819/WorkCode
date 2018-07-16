import React,{Component} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Drawer, List, WhiteSpace, DatePicker } from 'antd-mobile-rn';

export default class DrawerExample extends Component {
  constructor(props){
    super(props)
    this.state={
      open:false
    }
  }
  onOpenChange = (args) => {
    // alert(args);
  }

  render() {
    const sidebar = (
      <ScrollView style={[styles.container]}>
        <DrawerItem/>
      </ScrollView>
    );

    return (
      <Drawer
        sidebar={sidebar}
        position="right"
        open={this.state.open}
        drawerRef={(el) => (this.drawer = el)}
        onOpenChange={this.onOpenChange}
        drawerBackgroundColor="#fff"
      >
        <View style={{ flex: 1, marginTop: 114, padding: 8 }}>
          <Button onClick={() => this.drawer.openDrawer()}>
            Open drawer
          </Button>
          <WhiteSpace />
        </View>
      </Drawer>
    );
  }
}


const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

class DrawerItem extends Component{
  constructor(props){
    super(props)
    this.state={
      beginDate:now,
      endDate:now,
    }
  }
  
  render(){
    return (
      <View>
      {/*按钮选择*/}
      <View style={styles.itemContainer}>
        <View style={styles.itemTitle}>
          <Text style={{fontSize:16}}>title</Text>
        </View>
        <View style={styles.itemContent}>
          {[1,2,3,4,5,6].map((item,index)=>(
            <View key={index} style={styles.checkButton}>
              <Text>按钮</Text>
            </View>
          ))}
        </View>
      </View>
      
      {/*时间选择*/}
      <View style={styles.itemContainer}>
        <View style={styles.itemTitle}>
          <Text style={{fontSize:16}}>title</Text>
        </View>
          <DatePicker
            mode="date"
            title="Select Date"
            extra="Optional"
            value={this.state.beginDate}
            onChange={beginDate => this.setState({ beginDate })}
          >
            <List.Item arrow="horizontal">Date</List.Item>
          </DatePicker>
          <DatePicker
            mode="date"
            title="Select Date"
            extra="Optional"
            value={this.state.endDate}
            onChange={endDate => this.setState({ endDate })}
          >
            <List.Item arrow="horizontal">Date</List.Item>
          </DatePicker>
        </View>

        {/*按钮选择*/}
      <View style={styles.itemContainer}>
        <View style={styles.itemTitle}>
          <Text style={{fontSize:16}}>title</Text>
        </View>
        <View style={styles.itemContent}>
          {[1,2,3,4,5,6].map((item,index)=>(
            <View key={index} style={styles.checkButton}>
              <Text>按钮</Text>
            </View>
          ))}
        </View>
      </View>
      
      {/*时间选择*/}
      <View style={styles.itemContainer}>
        <View style={styles.itemTitle}>
          <Text style={{fontSize:16}}>title</Text>
        </View>
          <DatePicker
            mode="date"
            title="Select Date"
            extra="Optional"
            value={this.state.beginDate}
            onChange={beginDate => this.setState({ beginDate })}
          >
            <List.Item arrow="horizontal">Date</List.Item>
          </DatePicker>
          <DatePicker
            mode="date"
            title="Select Date"
            extra="Optional"
            value={this.state.endDate}
            onChange={endDate => this.setState({ endDate })}
          >
            <List.Item arrow="horizontal">Date</List.Item>
          </DatePicker>
        </View>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer:{
    height:'auto',
    width:'100%',
    borderStyle:'solid',
    borderColor:'#E2E2E2',
    borderBottomWidth:1
  },
  itemTitle:{
    margin:12
  },
  itemContent:{
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'space-around',
    marginLeft:10,
    marginRight:10,
  },
  checkButton:{
    height:40,
    width:'30%',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,
    backgroundColor:'#E2E2E2'
  }
});
