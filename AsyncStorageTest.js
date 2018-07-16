import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    AsyncStorage,
    TextInput,
} from 'react-native'

const KEY = 'Test';
export default class AsyncStorageTest extends Component{
    constructor(props){
        super(props)
        this.state={
            status:''
        }
    }
    onSave(){
        AsyncStorage.setItem(KEY,this.text,(err)=>{
            if(err){
                this.setState({
                    status:err
                })
            }else{
                this.setState({
                    status:this.text
                })
            }
        })
    }
    onRemove(){
        AsyncStorage.removeItem(KEY,(err)=>{
            if(err){
                this.setState({
                    status:err
                })
            }else{
                this.setState({
                    status:'已移除'
                })
            }
        })
    }
    onFetch(){
        AsyncStorage.getItem(KEY,(err,result)=>{
            if(err){
                this.setState({
                    status:err
                })
            }else{
                this.setState({
                    status:result
                })
            }
        })
    }
    render(){
        return (
            <View style={styles.container}>
                <TextInput style={{height:40}} onChangeText={(text)=>this.text=text}/>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.text} onPress={()=>this.onSave()}>保存 </Text>
                    <Text style={styles.text} onPress={()=>this.onRemove()}>移除 </Text>
                    <Text style={styles.text} onPress={()=>this.onFetch()}>取出</Text>
                </View>
                    <Text style={styles.text}>状态：{this.state.status}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        // backgroundColor:'gray',
        // justifyContent:'center'
    },
    text: {
        fontSize:20,
    }
})