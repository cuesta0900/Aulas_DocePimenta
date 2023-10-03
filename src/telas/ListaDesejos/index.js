import React from "react";
import Item from "./Item.js";
import StatusLista from '../../componentes/StatusListaDesejos';
import { FlatList, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';



/*const produtos = [

    {

        id: 1,

        nome: 'Cesta Inverno',

        preco: 79.90,

        descricao: 'Cesta de frutas típicas do inverno',

        qtde: 1

    },

    {

        id: 2,

        nome: 'Cesta Verão',

        preco: 89.90,

        descricao: 'Cesta de frutas típicas do verão',

        qtde: 2

    }

];*/



export default function ListaDesejos() {



    const total = produtos.reduce((soma, { preco, qtde }) => soma + (preco * qtde), 0);



    return <SafeAreaView>

        <StatusLista total={total} />

        <FlatList

            data={produtos}

            renderItem={({ item }) => (<Item {...item} />)}

            keyExtractor={({ id }) => (String(id))}

        />

    </SafeAreaView>

}