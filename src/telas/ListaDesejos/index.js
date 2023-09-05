import React from "react";

import Texto from "../../componentes/Texto";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Item from "./Item";
import StatusListaDesejos from "../../componentes/StatusListaDesejos";

const produtos=[
    {
        id: 1,
        nome: 'Roupa de Inverno',
        preco: 120.40,
        descricao: "Roupas típicas de inverno",
        quantidade: 1,
    },
    {
        id: 2,
        nome: 'Roupa de Verão',
        preco: 85.70,
        descricao: "Roupas típicas de verão",
        quantidade: 2,
    },
    {
        id: 3,
        nome: 'Roupa de Outono',
        preco: 99.90,
        descricao: "Roupas típicas de outono",
        quantidade: 4,
    },
    {
        id: 4,
        nome: 'Roupa de Primaveira',
        preco: 199.99,
        descricao: "Roupas típicas da Primavera",
        quantidade: 3,
    }
];

export default function ListaDesejos(){
    
    const total = produtos.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0);
    
    return <SafeAreaView>
        <StatusListaDesejos total = {total}/>
        <FlatList
            data={produtos}
            renderItem={({item})=>(<Item{...item}/>)}
            keyExtractor={({id})=>(String(id))}
        />
    </SafeAreaView>
}
