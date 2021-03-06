import React,{Component} from 'react';
import {connect} from 'react-redux'
import {
    Keyboard,Image,TouchableOpacity,Text
} from 'react-native'
import CstmServiceComponent from '../../components/cstmService'
import {switchAccessTab} from '../../actions/cstmService'
import {css} from 'init'
const ICON = ({focused,tintColor})=>(
    focused?
	<Image style={css.tabIcon} source={require('../icon/tabbar/cstmService_tap.png')}/>:
    	<Image style={css.tabIcon} source={require('../icon/tabbar/cstmService.png')}/>
)
const HEADER = ()=>(<Text
                    allowFontScaling={false}
                    style={{color:css.light,fontSize:css.f2}}
                    >微客服</Text>)


const Right = ({navigation})=>(
        <TouchableOpacity
    onPress = {()=>navigation.navigate('Record')}
        ><Image
    source={require('../icon/header/record.png')}
    style={css.headerIcon}
        /></TouchableOpacity>)


class CstmService extends Component{
    static navigationOptions = ({navigation, screenProps })=>{
	return({
	    headerTitle:<HEADER />,
            headerStyle:{backgroundColor:css.color,borderBottomWidth:0},
	    headerRight: <Right navigation={navigation}/>,
            tabBarIcon:ICON
	})
    }
    render(){
	const {isLeft,dispatch,navigation} = this.props
	return(
		<CstmServiceComponent
	    isLeft={isLeft}
	    navigation={navigation}
	    switchAccessTab={(left)=>dispatch(switchAccessTab(left))}
		/>
	)
    }
}

const mapStateToProps = state=>{
    const {isLeft} = state.cstmServiceReducer
    return{
	isLeft
    }
}
export default connect(mapStateToProps)(CstmService)
