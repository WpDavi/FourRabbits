import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({




//CSS PRIMEIRA PAGINA DO APP

    container:{     
        flex:2,
        backgroundColor:'#10001B'    
    },

    containerimg:{
        flex:2,        
        justifyContent:'center'
        
    },

    logoimg:{        
        alignSelf:'center',
        
    },

    containerform:{
        flex:1.3,
        padding:20,
        backgroundColor:'#15181F',
        borderTopLeftRadius:25,
        borderTopEndRadius:25,
        
    },

    txtform:{
        color: '#9FA0A2',
        fontSize: 21,
        textAlign: 'center',
         
    },

    txtlogin:{
        color:'#9FA0A2',
        marginTop:25,
        alignSelf:'center'
    },

    button:{
        backgroundColor:'#6D0F6D',
        marginTop: 45,
        width:230,
        alignSelf:'center',
        borderRadius: 20,
    },

    txtbutton:{
        color: '#9FA0A2',
        fontSize:20,
        fontWeight:'bold',
        margin:10,
        alignSelf:'center',
    },

    txtcadastro:{
        color: '#9FA0A2',
        alignSelf:'center',
        fontSize:15,
        marginTop:43,
        
    },


//---------------------Tela de Login--------------------------//----

    containerlogin:{
        flex: 1,
        backgroundColor:'#10001B',
        
    },

    txtbemvindo:{
        fontWeight:'bold',
        fontSize:32,
        color:'white',
        marginBottom:50,
        marginTop:70,
    },
    formlogin:{
        flex:1,
        backgroundColor: '#15181F',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        padding: 20,
       
    },

    txt:{
        color:'#9FA0A2',
        fontSize:20, 
        marginTop:15 
    },
    inputlogin:{
        borderBottomWidth: 2,
        borderBottomColor: '#6D0F6D',
        marginBottom: 20,
        color:'white'        
    },

    buttonlogin:{   
        backgroundColor:'#6C0F6D',        
        borderRadius: 6,
        padding:9,
        marginTop: 14,        
        alignItems:'center'  
    },

    txtbuttonlogin:{
        color:'white',
        fontSize: 18,
        fontWeight: 'bold'         
    },

    txtregistro:{
        color:'#9FA0A2',
        marginTop: 25,
        
    },
    
//---------------------Tela de Cadastro --------------------------//----
     
    containercadastro:{
        backgroundColor:'#10001B',
        flex:1,
    },
    containerimgcadastro:{
        flex:1,
        alignSelf:'center',
        justifyContent:'center'
    },

    containerformcadastro:{
        flex:1.5,
        backgroundColor:'#15181F',
        borderTopEndRadius:30,
        borderTopStartRadius:30,
        padding:20
    },
    txttitulocadastro:{
        color:'#9FA0A2',
        fontSize: 30,
        fontWeight:'bold',
        alignSelf:'center'
    },
    inputcadastro:{
        textAlign:"center",
        borderBottomWidth:2,
        borderColor:'#6C0F6D',
        marginTop:10,
        color:'#9FA0A2'
    },

    buttonentrar:{
        backgroundColor:'#6C0F6D',
        borderRadius:20,
        marginTop:30,
        width:230,
        alignSelf:'center'
    },
    txtbuttonentrar:{
        padding:12,
        fontSize:25,
        fontWeight:'bold',
        color:'#9FA0A2',
        alignSelf:'center'   
    },

    buttonjaecadastrado:{
        alignSelf:'center'

    },

    txtbuttonjaecadastrado:{
        color:'#9FA0A2',
        marginTop:20,
        
        
    }







    

})

export default styles;