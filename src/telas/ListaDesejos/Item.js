import React, { useState } from "react";
import Botao from "../../componentes/Botao";
import Texto from "../../componentes/Texto";
import estilos from "./estilos"
import CampoInteiro from "../../componentes/Campointeiro";
import { View, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Item({ id, nome, descricao, preco, img}) {

    const navigation = useNavigation();


    function filtroNome(nome){
        if(nome.length < 22){
            return nome;
        }
        return `${nome.substring(0, 20)}...`;
    }

    async function removerItemPeloId(idParaRemover) {
        try {
            // Recupere a lista de desejos do AsyncStorage
            let listaDesejos = JSON.parse(await AsyncStorage.getItem('ListaDesejos')) || [];
        
            if (listaDesejos.length == 1) {
                await AsyncStorage.clear();
                navigation.navigate('Destaques');
            } else {
                // Encontre o índice do item na lista com base no ID
                const index = listaDesejos.findIndex(item => item.id === idParaRemover);
            
                // Se o item foi encontrado, remova-o da lista de desejos
                if (index !== -1) {
                    listaDesejos.splice(index, 1);
            
                    // Salve a lista atualizada de volta no AsyncStorage
                    await AsyncStorage.setItem('ListaDesejos', JSON.stringify(listaDesejos));
            
                    console.log(`Item com ID ${idParaRemover} removido da lista de desejos.`);
                    navigation.navigate('Destaques');
                } else {
                    console.log(`Nenhum item com ID ${idParaRemover} encontrado na lista de desejos.`);
                }
            }
        } catch (erro) {
          console.error('Erro ao remover item da lista de desejos:', erro.message);
        }
    }

    return <>
        <View style={estilos.produtos}>
            <Image
                source={img}
                style={estilos.shoesImg}
            />
            <View style={estilos.textBox}>
                <Texto style={estilos.shoesText}>
                    {filtroNome(nome)}
                </Texto>
                <View style={{justifyContent: 'space-between', width: 250}}>
                <Texto style={estilos.descricao}>{descricao}</Texto>
                    <View opacity={0.4}>
                        <Texto style={estilos.priceText}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)} </Texto>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        </View>
                    </View>
                    <Botao texto='Remover' acao={() => removerItemPeloId(id)} style={{backgroundColor: 'black'}}></Botao>
                </View>
            </View>
        </View>
        <View style={estilos.divisor} />
    </>
}