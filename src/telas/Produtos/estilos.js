import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    
    nome: {
        fontSize: 20,
        marginBottom: 5,
        marginTop:5,
    },
    preco: {
        color: '#ff6f9c',
        fontSize: 22,
        textAlign: 'right',
    },
    produtos: {
        padding: 24,
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
    },
    conteudo: {
        paddingHorizontal: 24,
        paddingBottom: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 230,
    },
    imagem:{
        height: 200,
        width: 150,
    },
    descricao: {
        color: 'black',
        fontWeight: 'none',
        fontSize: 16,
        textAlign: 'justify',
        marginLeft: 15,
    },
    divisor: {
        marginHorizontal: 24,
        borderBottomWidth: 1,
        borderBottomColor: 'purple',
    },
    text:{
        marginTop: 10,
        fontSize: 20,
        marginHorizontal: '1%'
    },
    textContainer:{
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
});