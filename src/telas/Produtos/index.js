import React from "react";

import { FlatList, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Item from "./Item";
import estilos from "./estilos";
import Header from "../../componentes/Header";
import Texto from "../../componentes/Texto";
import img1 from "../../../assets/destaques/destaque_1.png";
import img2 from "../../../assets/destaques/destaque_2.png";
import img3 from "../../../assets/destaques/destaque_3.png";
import img4 from "../../../assets/destaques/destaque_4.png";
import img5 from "../../../assets/destaques/destaque_5.png";
import img6 from "../../../assets/destaques/destaque_6.png";
import img7 from "../../../assets/destaques/destaque_7.png";
import img8 from "../../../assets/destaques/destaque_8.png";
import img9 from "../../../assets/destaques/destaque_9.png";
import img10 from "../../../assets/destaques/destaque_10.png";
const produtos = [  
    {
        id: 1,
        nome: 'Vestido Branco',
        preco: 120.40,
        descricao: "Roupas típicas de inverno",
        imagem: img1,
    },
    {
        id: 2,
        nome: 'Conjunto Casual',
        preco: 120.40,
        descricao: "Roupas típicas de inverno",
        imagem: img2,
    },
    {
        id: 3,
        nome: 'Bata Azul Florida',
        preco: 120.40,
        descricao: "Roupas típicas de inverno",
        imagem: img3,
    },
    {
        id: 4,
        nome: 'Conjunto Primavera',
        preco: 120.40,
        descricao: "Roupas típicas de inverno",
        imagem: img4,
    },
    {
        id: 5,
        nome: 'Vestido Milão',
        preco: 120.40,
        descricao: "Roupas típicas de inverno",
        imagem: img5,
    },
    {
        id: 6,
        nome: 'Vestidos Variados',
        preco: 120.40,
        descricao: "Roupas típicas de inverno",
        imagem: img6,
    },
    {
        id: 7,
        nome: 'Vestido Longo Azul',
        preco: 120.40,
        descricao: "Roupas típicas de inverno",
        imagem: img7,
    },
    {
        id: 8,
        nome: 'Blusa pink',
        preco: 120.40,
        descricao: "Roupas típicas de inverno",
        imagem: img8,
    },
    {
        id: 9,
        nome: 'Vestido Lilás',
        preco: 120.40,
        descricao: "Roupas típicas de inverno",
        imagem: img9,
    },
    {
        id: 10,
        nome: 'Vestido Gola Alta Mesclado',
        preco: 120.40,
        descricao: "Roupas típicas de inverno",
        imagem: img10,
    }
];

export default function Produtos() {
    return <SafeAreaView>
        <ScrollView>
            <Header />
        </ScrollView>
        <View style={estilos.textContainer}>
            <Texto style={[estilos.text, { color: '#ff6f9c'} ]}>DESTAQUES DA PRIMAVERA</Texto>
        </View>
        <FlatList
            data={produtos}
            renderItem={({ item }) => (<Item{...item} />)}
            keyExtractor={({ id }) => (String(id))}
        />
    </SafeAreaView>
}
