import React, {useEffect, useState} from "react";
import StatusLista from '../../componentes/StatusListaDesejos';
import { FlatList, SafeAreaView, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Item from "./Item.js";

export default function ListaDesejos() {

    const [data, setData] = useState([]);
    // const [total, setTotal] = useState(0);
    
    const getData = async () => {
        const ListaDesejos = await AsyncStorage.getItem('ListaDesejos');
        if (ListaDesejos !== null) {
            setData(JSON.parse(ListaDesejos));
        }
    };
    
    useEffect(() => {
        getData();
    }, [])
    
    return <View>
        <SafeAreaView>
            <StatusLista/>
        </SafeAreaView>
        <FlatList
            data={data}
            renderItem={({item}) => (<Item {...item}/>)}
            keyExtractor={({id}) => (String(id))}
        />
    </View>
}