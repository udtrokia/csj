
import React,{Component} from 'react';
import {connect} from 'react-redux'
import EditModel from '../../../../../components/workbench/pages/imanager/itemCategory/editcategories'
import {
    Keyboard,Image,View,TouchableOpacity,Text
} from 'react-native'

import { login, gorefresh }from '../../../../../actions/login'

import {css} from 'init'

const Back = ({navigation})=>(
	<TouchableOpacity
    onPress = {()=>navigation.goBack()}
	><Image
    source={require('../../../../icon/header/back.png')}
    style={[css.headerIcon,{height:24}]}
	/></TouchableOpacity>)

const HEADER = ()=>(
	<Text
    allowFontScaling={false}
    style={{color:css.dark,fontSize:css.f2}}
        >编辑分类</Text>
)

const dsms =()=>Keyboard.dismiss()

class Editcategories extends Component{
    static navigationOptions = ({navigation})=>({
	headerTitle:<HEADER />,
        headerStyle:{backgroundColor:css.light, borderBottomWidth:0},
	headerLeft:<Back navigation={navigation}/>,
    })
    render(){
	const { navigation, dispatch, categories } = this.props
	return(
		<EditModel
	    navigation={navigation} categories = {categories}
	    dispatch = {dispatch}
		/>
	)
    }
}


const mapStateToProps = state=>{
    console.log(state)
    const { categories } = state.workbenchReducer
    return{
	categories
    }
}
export default connect(mapStateToProps)(Editcategories)
