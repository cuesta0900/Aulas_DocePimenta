import React from "react";
import Item from "./Item.js";
import StatusLista from '../../componentes/StatusListaDesejos';
import { FlatList, SafeAreaView } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ListaDesejos() {

    //Variável de estado
    const [lista, setLista] = useState([]);

    //Carrega os dados armazenados no AsyncStorage
    const carregaLista = async () => {
        const storedList = await AsyncStorage.getItem('ListaDesejos');
        if (storedList !== null) {
            setLista(JSON.parse(storedList));
        }
    }

    //Carrega a lista de desejos quando monta o componente
    useEffect(() => {
        carregaLista();
    }, [])

    //Faz o cálculo do valor total
    const total = lista.reduce((soma, { preco, qtde }) => soma + (preco * qtde), 0);



    return <SafeAreaView>

        <StatusLista total={total} />

        <FlatList

            data={lista}

            renderItem={({ item }) => (<Item {...item} />)}

            keyExtractor={({ id }) => (String(id))}

        />

    </SafeAreaView>

}