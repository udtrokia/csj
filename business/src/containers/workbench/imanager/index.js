import React,{Component} from 'react';
import {connect} from 'react-redux'
import {url,style,color,w} from '../../../global'
import ImanagerModel from '../../../components/workbench/pages/imanager'
import {
    Keyboard,Image,View,TouchableOpacity
} from 'react-native'

import {switchImanagerTab} from '../../../actions/cstmService'


const dsms =()=>Keyboard.dismiss()
const Back = ({navigation})=>(
	<TouchableOpacity
    onPress = {()=>navigation.goBack()}
	><Image
    source={{uri: url+'/icon/back.png'}}
    style={{height:8*w,width:8*w,marginLeft:6}}
	/></TouchableOpacity>)

class Imanager extends Component{
    static navigationOptions = ({navigation})=>({
	title:"商品管理",
        headerTitleStyle:{color:'#707070',fontSize:22},
        headerStyle:{backgroundColor:'#fff'},
	headerLeft:<Back navigation={navigation}/>,
	headerBackTitleStyle:{color:'#eee'}
    })
    render(){
	const {imanagerTab,dispatch} = this.props
	return(
		<ImanagerModel
	    dsms={dsms}
	    imanagerTab={imanagerTab}
	    switchImanagerTab={(tab)=>dispatch(switchImanagerTab(tab))}
		/>
	)
    }
}


const mapStateToProps = state=>{
    const {imanagerTab} = state.cstmServiceReducer
    return{
	imanagerTab
    }
}
export default connect(mapStateToProps)(Imanager)


