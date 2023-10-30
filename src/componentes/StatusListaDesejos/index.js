import React from 'react';
import { View } from "react-native";
import Texto from '../Texto';
import Botao from '../Botao';
import estilos from "./estilos";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Header from '../Header';
export default function StatusLista() {

    const navigation = useNavigation();

    const limpaLista = async () => {
        await AsyncStorage.clear();
        // alert.alert('A lista de desejos foi limpa com sucesso!')
        console.log('A lista de desejos foi limpa com sucesso!');
        navigation.navigate('Catálogo')
    }

    return <>
        <Header style={estilos.header} />

        <View style={estilos.botao}>
            <Botao texto='Limpar lista' acao={() => limpaLista()} style={{ backgroundColor: '#ff6f9c' }}></Botao>
        </View>
    </>
}