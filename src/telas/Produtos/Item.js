import React, {useState} from "react";
import Texto from "../../componentes/Texto";
import CampoInteiro from "../../componentes/Campointeiro";
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
            { expandir && <Texto style={estilos.descricao}>{descricao}</Texto>}
            
        </TouchableOpacity>
        { expandir &&
            <View style={estilos.listaDesejos}>
                <View style={estilos.posicao}>
                    <Texto>Preço:</Texto>
                    <Texto style={estilos.preco}>
                {Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
                .format(preco)}
            </Texto>
                </View>
            </View>
        }
        {
            expandir &&
            <View style={estilos.listaDesejos}>
                <Image source={imagem}/>
                <Button title="Adicionar"/>
            </View>
        }
        <View style={estilos.divisor}/>
    </>
}