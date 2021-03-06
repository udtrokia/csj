import React, { Component } from 'react'

import {
    View, Text, TouchableOpacity, StatusBar, ScrollView, Alert, ListView, TextInput, Modal
} from 'react-native'
import s from './style.js'
import bs from '../../items/style.js'
import { css } from 'init'

class Foo extends Component{
    constructor(props){
	super(props)
	this.state={
	    text:"",
	    categories : [],	    
	    category : props.category,
	    toggleRefresh:false,
	    modalVisible: false
	}
    }
    setModalVisible(visible){
	this.setState({ modalVisible : visible })
    }
    render(){
	var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})	
	const dataSource = ds.cloneWithRows(this.state.categories)
	const Row = ({rowData}) => (
		<View style={s.foobar}>
		<Text
	    allowFontScaling={false} style={{paddingLeft:12,fontSize:css.f1}}	    
		>{rowData.a}</Text>
		</View>
	)	
	const refresh = () => this.setState({toggleRefresh:!this.state.toggleRefresh})
	const addCategory = async () => {
	    let category = {text:1}
	    this.state.categories.push(category)
	    await refresh()
	}
	return(
		<View style={s.foowrap}>
		<View style={s.foobar}>
		<Text
	    allowFontScaling={false} style={{paddingLeft:12,fontSize:css.f1}}>限时折扣</Text></View>
		<ListView
	    enableEmptySections={true}
	    style={s.foobody} dataSource={dataSource}
	    renderRow = {(rowData)=><Row rowData={rowData} />}
		/>
		<View style={s.foobar}>
		<TouchableOpacity onPress={addCategory}>
		<Text allowFontScaling={false} style={{paddingLeft:12,fontSize:css.f4}}>+添加子分类</Text>
		</TouchableOpacity></View>
		</View>
	)
    }
}

class EditModel extends Component{
    constructor(props){
	super(props)
	this.state={
	    categories:props.categories,
	    toggleRefresh:false,
	    text:""
	}
	const categories = this.props.categories
    }
    render(){
	let { go, _refresh } = this.props
	var ds = new ListView.DataSource({rowHasChanged: (r1,r2) => r1 !== r2})	
	const dataSource = ds.cloneWithRows(this.state.categories)
        const refresh = () => this.setState({toggleRefresh:!this.state.toggleRefresh})
        const addCategory = async () => {
            let category = {text:1}
            this.state.categories.push(category)
            await refresh()
        }
	return(
		<View style={{display:'flex',flex:1}}>
		<ListView
	    enableEmptySections={true}
	    style={s.foobody,{marginBottom:45}} dataSource={dataSource}
	    renderRow = {(rowData)=><Foo/> }
		/>
		<TouchableOpacity style={bs.addItem} onPress={()=>addCategory()}>
		<Text style={bs.tabf} allowFontScaling={false} >添加分类</Text>
		</TouchableOpacity>
		</View>
	)
    }    
}

export default EditModel
