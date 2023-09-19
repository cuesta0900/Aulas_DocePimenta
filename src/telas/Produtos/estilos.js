import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    
    nome: {
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 30
    },
    descricao: {
        color: 'black',
        fontWeight: 'none',
        fontSize: 16,
        marginRight: 8,
    },
    preco: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'right',
    },
    produtos: {
        padding: 24,
    },
    listadesejos: {
        paddingHorizontal: 24,
        paddingBottom: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        flexWrap: 'wrap',
    },
    posicao: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        flexWrap: 'wrap',
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
    }
});