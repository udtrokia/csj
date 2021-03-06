const styles = theme => ({
    root: {
	display:'flex',
	flex:1,
	flexDirection:'column'
    },
    card: {
	margin: 20,
	height: 150,
	backgroundColor:'#119ed8',
    },    
    gridList: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
	flexDirection:'row',
	justifyContent:'space-around',
	alignItems:'center',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    cardBtn: {
	display:'flex',
	flexDirection:'column',
	flex:1
    },
    cardImg:{
	width:48,
    },
    cardBtnWrap:{
	display:'flex',
	justifyContent:'center',
	alignItems:'center',
	width:28,
	flexDirection:'column',
    }
});

export default styles
