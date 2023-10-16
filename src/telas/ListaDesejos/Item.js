import React, { useState } from "react";

import { Button, TextInput, View } from "react-native";

 
import Texto from "../../componentes/Texto";

import estilos from "./estilos"

import CampoInteiro from "../../componentes/Campointeiro";

import AsyncStorage from "@react-native-async-storage/async-storage";

 

export default function Item({id, nome, descricao, preco }) {

 

    /*const [quantidade, setQuantidade] = useState(qtdeInicial);

    const [total, setTotal] = useState(preco * qtdeInicial);

 

 

    const calculaTotal = (quantidade) => {

        setTotal(quantidade * preco);

    }

 

    const atualizaQtdeTotal = (novaQtde) => {

        setQuantidade(novaQtde);

        calculaTotal(novaQtde);

    }*/

 
    // Função para remover um item da lista de desejos no AsyncStorage usando o ID
async function removerItemPeloId(idParaRemover) {
    try {
      // Recupere a lista de desejos do AsyncStorage
      let listaDesejos = JSON.parse(await AsyncStorage.getItem('ListaDesejos')) || [];
  
      // Encontre o índice do item na lista com base no ID
      const index = listaDesejos.findIndex(item => item.id === idParaRemover);
  
      // Se o item foi encontrado, remova-o da lista de desejos
      if (index !== -1) {
        listaDesejos.splice(index, 1);
  
        // Salve a lista atualizada de volta no AsyncStorage
        await AsyncStorage.setItem('ListaDesejos', JSON.stringify(listaDesejos));
  
        console.log(`Item com ID ${idParaRemover} removido da lista de desejos.`);
      } else {
        console.log(`Nenhum item com ID ${idParaRemover} encontrado na lista de desejos.`);
      }
    } catch (erro) {
      console.error('Erro ao remover item da lista de desejos:', erro.message);
    }
  }
  
  

    return <>

        <View style={estilos.produtos} >

            <Texto style={estilos.nome}>{nome}</Texto>

            <Texto style={estilos.descricao}>{descricao}</Texto>

            <Texto style={estilos.preco}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)}</Texto>

        </View>

        <View style={estilos.listadesejos}>

        <Button onPress={ () => removerItemPeloId(id)} title="Remover"/>

        </View>

        <View style={estilos.divisor} />     

    </>

}