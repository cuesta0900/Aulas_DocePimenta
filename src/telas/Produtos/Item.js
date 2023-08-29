import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

import Texto from "../../componentes/Texto";
import CampoInteiro from "../../componentes/Campointeiro";
import estilos from "../Produtos/estilos";

export default function Item({ nome, descricao, preco }) {
    
    const [quantidade, setQuantidade] = useState(1);
    const [total, setTotal] = useState(preco);

    const calculaTotal = (quantidade) => {
        setTotal(quantidade * preco);
    }

    const atualizaQtdeTotal = (novaQtde) => {
        setQuantidade(novaQtde);
        calculaTotal(novaQtde);
    }
    
    return <>
        <View style={estilos.produtos}>
            <Texto style={estilos.nome}>{nome}</Texto>
            <Texto style={estilos.descricao}>{descricao}</Texto>
            <Texto style={estilos.preco}>{ Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(preco) }</Texto>
        </View>

        <View style={estilos.listadesejos}>
            <View style={estilos.posicao}>
                <Texto>Quantidade</Texto>
                <CampoInteiro valor={quantidade} acao = {atualizaQtdeTotal}/>
            </View>
            <View style={estilos.posicao}>
                <Texto>Total</Texto>
                <Texto>{ Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(preco) }</Texto>
            </View>
            <Button title="Adicionar"/>
        </View>
        <View style={estilos.divisor}/>
    </>
}