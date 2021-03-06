import React, {Component} from 'react'
import {
    View, Text, TouchableOpacity, TextInput, Alert,
    TouchableWithoutFeedback,Keyboard,Image, ListView
} from 'react-native'

import {connect} from 'react-redux'

import { DrawerNavigator } from 'react-navigation'
import { ImagePicker } from 'expo'

import s from './style.js'
import bs from '../style.js'

import { selectCategory } from '../../../../../actions/additem'

const CategoryBar = ({navigation, category}) =>(
	<TouchableOpacity style={s.barBtn} onPress={()=>navigation.navigate('DrawerOpen')}>
	<Text style={s.barf} allowFontScaling={false} >{category}</Text>
	</TouchableOpacity>
)

class AddItemModel extends Component{
    constructor(props){
	super(props)
	this.state = {
	    stock:0,	    
	    price:0,
	    pics:[],
	    toggleRefresh:false,
	    category:this.props.screenProps.screenProps.state.addItemReducer.category
	}
    }
    
    pickImage = async () => {
	if(this.state.pics.length < 3){
            try{
		let result = await ImagePicker.launchImageLibraryAsync({
                    allowsEditing: true,
                    aspect: [4, 3],
		});
		if (!result.cancelled) {
		    this.state.pics.push(result.uri)
		    this.setState({toggleRefresh:!this.state.toggleRefresh})
		}
            }catch(error){
		console.log(error)
            }
	}else{
	    Alert.alert('只可以添加3张图片')
	}
    };
    
    render(){
	const {navigation, screenProps  } = this.props
	const {category} = screenProps.screenProps.state.addItemReducer
	const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	let dataSource =  ds.cloneWithRows(this.state.pics)
	return(
		<TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()} >
		<View style={{display:'flex',flex:1,marginTop:10}}>

		<View style={s.imgWrap}>
		<ListView
            dataSource={dataSource} enableEmptySections={true}
	    contentContainerStyle = {s.listStyle}	    
            renderRow={(pic) => <Image style={s.img} source={{ uri : pic }} />}
		/></View>
		
		<TouchableOpacity onPress={this.pickImage}>		
		<View style={s.imgLabel}>
		<Text style={s.barf} allowFontScaling={false} >添加图片</Text>		
		</View></TouchableOpacity>		

		<CategoryBar  navigation={navigation} category={category} />

		<View style={s.detail}>
		<View style={[s.barBtn,{marginTop:0,marginBottom:0,justifyContent:'flex-start'}]}>
		<Text style={s.barf} allowFontScaling={false} >价格</Text>
		<TextInput
	    keyboardType="numeric" placeholder="单位:元" style={s.ti}
	    onChangeText={(text)=>this.setState({price:text})}
		/>
		<Text style={s.barf} allowFontScaling={false} >库存</Text>
		<TextInput
	    keyboardType="numeric" placeholder="单位:件" style={s.ti}
	    onChangeText={(text)=>this.setState({stock:text})}	    
		/>	
		</View>
		</View>

		<TouchableOpacity style={bs.addItem} onPress={()=>screenProps.navigation.goBack()}>
		<Text style={bs.tabf} allowFontScaling={false} >上传</Text>
		</TouchableOpacity>
		</View>		
		</TouchableWithoutFeedback>
		
	)
    }
}

const CategoryList = ({ navigation, screenProps}) =>{
    const {categories} = screenProps.screenProps.state.workbenchReducer
    const {category} = screenProps.screenProps.state.addItemReducer
    const {dispatch} = screenProps.screenProps

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let dataSource =  ds.cloneWithRows(categories)

    const Category = ({navigation, category}) => {
	let allSubCategories = []
	let { subCategories } = category
	for (var i in subCategories){
	    allSubCategories.push(subCategories[i])
	}
	const ds2 = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
	let dataSource2 =  ds2.cloneWithRows(subCategories)
	const _selectCategory = async (category)=>{
	    await dispatch(selectCategory(category['label']))
	    await navigation.navigate('DrawerClose')
	}
	const Bar = ({category, sub})=>{
	    let sideRowFont = s.sideRowFont
	    sub?sideRowFont=s.sideRowFont2:s.sideRowFont
	    console.log(sideRowFont)
	    return(
		    <TouchableOpacity onPress= {()=>_selectCategory(category)}>
		    <View style={s.sideRow}>
		    <Text allowFontScaling={false} style={sideRowFont}>{category['label']}</Text>
		    </View>
		    </TouchableOpacity>
	    )
	}
	return(
		<View><Bar category = {category}/>
		<ListView
            dataSource={dataSource2} enableEmptySections={true}
            renderRow={(category) => <Bar category={category} sub={true} />}
		/></View>
	)
    }
    return(
	    <ListView
        dataSource={dataSource} enableEmptySections={true} style={{marginTop:20}}
        renderRow={(category) => <Category navigation={navigation} category={category} />}
            />
    )
}

const mapStatesToProps = state =>({ category : state.addItemReducer})


const AddItemWithDrawer = DrawerNavigator({
    Main : {screen: connect(mapStatesToProps)(AddItemModel) }
},{
    drawerWidth: 150,
    drawerPosition:'right',
    contentComponent: ({navigation, screenProps}) => (
	    <CategoryList navigation={navigation} screenProps={screenProps} />
    )
})



const AddItemWithDrawerWithProps = ({navigation, screenProps})=>(
    	    < AddItemWithDrawer screenProps={{ navigation, screenProps}}/>
)

export default AddItemWithDrawerWithProps
