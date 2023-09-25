import React from "react";

import { FlatList, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Item from "./Item";
import estilos from "./estilos";
import Header from "../../componentes/Header";
import Texto from "../../componentes/Texto";
import img1 from "../../../assets/destaques/destaque_1.png";
import img2 from "../../../assets/destaques/destaque_2.png";
import img4 from "../../../assets/destaques/destaque_4.png";
import img5 from "../../../assets/destaques/destaque_5.png";
import img7 from "../../../assets/destaques/destaque_7.png";
import img8 from "../../../assets/destaques/destaque_8.png";
import img9 from "../../../assets/destaques/destaque_9.png";
import img10 from "../../../assets/destaques/destaque_10.png";
const produtos = [  
    {
        id: 1,
        nome: 'Vestido Azul Florido',
        preco: 120.40,
        descricao: "Um vestido azul florido que é a escolha perfeita para um dia ensolarado. Sinta-se leve e radiante com este elegante vestido primaveril.",
        imagem: img1,
    },
    {
        id: 2,
        nome: 'Conjunto Casual',
        preco: 120.40,
        descricao: "Conjunto casual: a escolha confortável e estilosa para os dias de primavera. Um look versátil que combina perfeitamente com qualquer ocasião descontraída.",
        imagem: img2,
    },
    {
        id: 3,
        nome: 'Vestido Lilás',
        preco: 120.40,
        descricao: "Vestido Lilás: uma escolha suave e elegante para qualquer ocasião. Sinta-se radiante e confiante com este vestido de cor suave.",
        imagem: img9,
    },
    {
        id: 4,
        nome: 'Conjunto Primavera',
        preco: 120.40,
        descricao: "Blusa branca transparente com saia rosa: um conjunto charmoso e delicado para a primavera. Esta combinação traz um toque de elegância e feminilidade à sua aparência na estação das flores.",
        imagem: img4,
    },
    {
        id: 5,
        nome: 'Vestido Milão',
        preco: 120.40,
        descricao: "Uma peça deslumbrante que irradia elegância e sofisticação, perfeito para ocasiões especiais.",
        imagem: img5,
    },
    {
        id: 6,
        nome: 'Gola Alta Mesclado',
        preco: 120.40,
        descricao: "Um estilo sofisticado que combina conforto e moda. Mantenha-se aquecida e elegante com este vestido de gola alta mesclado",
        imagem: img10,
    },
    {
        id: 7,
        nome: 'Vestido Longo Azul',
        preco: 120.40,
        descricao: "Uma peça deslumbrante que combina elegância com um toque de romance. Destaque-se com detalhes florais rosas na manga",
        imagem: img7,
    },
    {
        id: 8,
        nome: 'Blusa pink',
        preco: 120.40,
        descricao: "Adicione um toque de ousadia ao seu guarda-roupa com esta blusa vibrante. Perfeita para criar looks cheios de energia e estilo.",
        imagem: img8,
    },
    {
        id: 9,
        nome: 'Vestido Lilás',
        preco: 120.40,
        descricao: "Vestido Lilás: uma escolha suave e elegante para qualquer ocasião. Sinta-se radiante e confiante com este vestido de cor suave.",
        imagem: img9,
    },
    {
        id: 10,
        nome: 'Gola Alta Mesclado',
        preco: 120.40,
        descricao: "Um estilo sofisticado que combina conforto e moda. Mantenha-se aquecida e elegante com este vestido de gola alta mesclado",
        imagem: img10,
    },
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

