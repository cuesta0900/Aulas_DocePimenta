import React from "react";
import { View, TextInput, Button } from "react-native";
import Texto from "../../componentes/Texto";
import estilos from "../Produtos/estilos";

export default function Item({ nome, descricao, preco }) {
    return <>
        <View style={estilos.produtos}>
            <Texto style={estilos.nome}>{nome}</Texto>
            <Texto style={estilos.descricao}>{descricao}</Texto>
            <Texto style={estilos.preco}>{preco}</Texto>
        </View>

        <View style={estilos.listadesejos}>
            <View style={estilos.posicao}>
                <Texto>Quantidade</Texto>
                <TextInput value="0"/>
            </View>
            <View style={estilos.posicao}>
                <Texto>Preço</Texto>
                <Texto>0.00</Texto>
            </View>
            <Button title="Adicionar"/>
        </View>
        <View style={estilos.divisor}/>
    </>
}