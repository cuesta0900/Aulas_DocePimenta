import React from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Texto from '../Texto';
import { Button } from "react-native";
import estilos from './estilos';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function StatusListaDesejos({ total }) {

    const navigation = useNavigation();

    const limpaListaDesejos = async () => {
        await AsyncStorage.clear();
        console.log('A lista de Desejos foi apagada com sucesso')
        navigation.navigate("Produtos");
    }

    return <View style = {estilos.conteudo}>
        <View style = {estilos.total}>
            <Texto style = {estilos.descricao}>Total Lista de Desejos</Texto>
            <Texto style = {estilos.valor}>{
                Intl.NumberFormat('pt-BR', {
                    style: 'currency', currency: 'BRL'
                }).format(total)
            }</Texto>
        </View>
        <View style = {estilos.botao}>
            <Button  onPress={ () => limpaListaDesejos() }  title="Apagar Lista de Desejos" />
        </View>
    </View>
}