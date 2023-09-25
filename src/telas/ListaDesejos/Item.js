import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

import Texto from "../../componentes/Texto";
import CampoInteiro from "../../componentes/Campointeiro";
import estilos from "../ListaDesejos/estilos";

export default function Item({ nome, descricao, preco, quantidade: qtdeInicial }) {

    const [quantidade, setQuantidade] = useState(qtdeInicial);
    const [total, setTotal] = useState(preco * qtdeInicial);
    const [expandir, setExpandir] = useState(false);

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
            <Texto style={estilos.preco}>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)}</Texto>
        </View>
        <View style={estilos.listadesejos}>
            <View style={estilos.posicao}>
                <Texto>Quantidade</Texto>
                <CampoInteiro valor={quantidade} acao={atualizaQtdeTotal} />
            </View>
            <View style={estilos.posicao}>
                <Texto>Total</Texto>
                <Texto>{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)}</Texto>
            </View>
            <Button title="Remover" />
        </View>

        <View style={estilos.divisor} />
    </>
}