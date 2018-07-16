import React,{Component} from 'react'
import { Image, Text, View, StyleSheet, TextInput, ScrollView, ListView, TouchableHighlight } from 'react-native'
import {Navigator} from 'react-native-deprecated-custom-components'
import PropTypes from 'prop-types'

// class Greeting extends React.Component {
//     render() {
//       return (
//         <Text>Hello {this.props.name}!</Text>
//       );
//     }
//   }

// export default class HelloWorldApp extends React.Component{
//     render(){
//         let pic = {
//             uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
//           };
//         return (
//             <View style={{alignItems:'center'}}>
//                 <Greeting name='Rexxar' />
//                 <Greeting name='Jaina' />
//                 <Greeting name='Valeera' />
//                 <Image source={pic} style={{width: 193, height: 110}} />
//             </View>
//         )
//     }
// }

// class Blink extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             showText:true
//         }
//     }

//     componentDidMount(){
//         setInterval(()=>{
//             this.setState({
//                 showText:!this.state.showText
//             })
//         },1000)
//     }

//     render(){
//         let display = this.state.showText ? this.props.text : ""
//         return (
//             <Text>{display}</Text>
//         )
//     }
// }

// export default class HelloWorldApp extends Component {
//     render() {
//       return (
//         <View>
//           <Blink text='I love to blink' />
//           <Blink text='Yes blinking is so great' />
//           <Blink text='Why did they ever take this out of HTML' />
//           <Blink text='Look at me look at me look at me' />
//         </View>
//       );
//     }
//   }
//+、-、/、()、[]前必须加分号
// export default class HelloWorldApp extends Component {
//     render() {
//       return (
//         <View>
//             <Text style={styles.red}>just red</Text>
//             <Text style={styles.bigblue}>just bigblue</Text>
//             <Text style={[styles.bigblue, styles.red]}>bigblue, then red</Text>
//             <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
//         </View>
//       );
//     }
//   }

// const styles = StyleSheet.create({
//     bigblue:{
//         color:'blue',
//         fontWeight:'bold',
//         fontSize:30,
//     },
//     red: {
//       color: 'red',
//     },
// })

// export default class HelloWorldApp extends Component {
//     render() {
//       return (
//         <View style={{
//             flex: 1,
//             flexDirection: 'row',
//             justifyContent: 'flex-end',
//             alignItems: 'flex-start',
//           }}>
//             <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
//             <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
//             <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
//           </View>
//       );
//     }
//   };


// export default class HelloWorldApp extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             text:''
//         }
//     }

//     render(){
//         return (
//             <View style={{padding:10}}>
//                 <TextInput
//                     style={{height:40}}
//                     placeholder="请输入任意值..."
//                     onChangeText={(text) => this.setState({text})}
//                 />
//                 <Text style={{padding:10,fontSize:42}}>
//                     {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
//                 </Text>
//             </View>
//         )
//     }
// }

// export default class HelloWorldApp extends Component{
//     render() {
//         return(
//           <ScrollView>
//             <Text style={{fontSize:96}}>Scroll me plz</Text>
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Text style={{fontSize:96}}>If you like</Text>
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Text style={{fontSize:96}}>Scrolling down</Text>
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Text style={{fontSize:96}}>What's the best</Text>
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Text style={{fontSize:96}}>Framework around?</Text>
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Image source={require('./DESIGN-WEB.png')} />
//             <Text style={{fontSize:80}}>React Native</Text>
//           </ScrollView>
//       );
//     }
// }

// export default class HelloWorldApp extends Component{
//     //初始化模拟数据
//     constructor(props){
//         super(props)
//         const ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2})
//         this.state = {
//             dataSource: ds.cloneWithRows([
//                 'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//                 , 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//                 , 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//                 , 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//                 , 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//                 , 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//                 , 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//                 , 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//                 , 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
//             ])
//         }
//     }

//     render() {
//         return (
//           <View style={{paddingTop: 22}}>
//             <ListView
//               dataSource={this.state.dataSource}
//               renderRow={(rowData) => <Text>{rowData}</Text>}
//             />
//           </View>
//         );
//       }
// }

class MyScene extends Component{
    static propTypes = {
        title: PropTypes.string.isRequired,
        onForward: PropTypes.func.isRequired,
        onBack: PropTypes.func.isRequired,
      }
    render(){
        return (
            <View>
                <Text>Current Scene: { this.props.title }</Text>
                <TouchableHighlight onPress={this.props.onForward}>
                <Text>点我进入下一场景</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={this.props.onBack}>
                <Text>点我返回上一场景</Text>
                </TouchableHighlight>    
            </View>
        )
    }
}


export default class HelloWorldApp extends Component{
    render(){
        return (
            <Navigator 
                initialRoute={{ title: 'My Initial Scene', index: 0}}
                renderScene={(route,navigator) =>
                    <MyScene
                        title={route.title}
                        onForward={() => {
                            const nextIndex = route.index + 1
                            navigator.push({
                                title: 'Scene' + nextIndex,
                                index: nextIndex,
                            })
                        }}
                        onBack={() => {
                            if(route.index > 0){
                                navigator.pop()
                            }
                        }}
                    />
                }
            />
        )
    }
}

