import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
       height:'100%',
       width: '100%',
    },
    txt: {
        margin:20,
        marginTop:0,
        borderBottomColor:'#000',
        borderBottomWidth:1,
        fontSize:18,
    },
    touchableOpacity: {
        margin:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#e1e9ed',
        padding:8,
        borderRadius:15
    },
    iconContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    touchText: {
        fontSize:25,
        color:'#000'
    }
})

export default styles