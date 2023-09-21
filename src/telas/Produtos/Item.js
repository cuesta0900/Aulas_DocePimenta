import React, { useState } from "react";
import Texto from "../../componentes/Texto";
import estilos from "../Produtos/estilos";
import { Button, View, TouchableOpacity, Image } from "react-native";

export default function Item({ nome, descricao, preco, imagem }) {

    const [expandir, setExpandir] = useState(false);

    //Método para o abre e fecha
    const inverteExpandir = () => {
        setExpandir(!expandir);
    };

    return <>
        <TouchableOpacity style={estilos.produtos} onPress={inverteExpandir}>
            <Texto style={estilos.nome}>{nome}</Texto>
            <Texto style={estilos.preco}>
                        {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })
                            .format(preco)}
                    </Texto>


        </TouchableOpacity>
        {
            expandir &&
            <><View style={estilos.conteudo}>
                <Image style={estilos.imagem} source={imagem} />
                <Texto style={estilos.descricao}>{descricao}</Texto>
            </View><View style={estilos.conteudo}>
                    <Button color={'purple'} title="Adicionar aos Favoritos" />
                </View></>
        }
        <View style={estilos.divisor} />
    </>
}