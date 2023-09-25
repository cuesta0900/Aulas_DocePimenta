import React, { useState } from "react";
import Texto from "../../componentes/Texto";
import estilos from "../Produtos/estilos";
import { Button, View, TouchableOpacity, Image, FlatList } from "react-native";

export default function Item({ nome, descricao, preco, imagem }) {

    const [expandir, setExpandir] = useState(false);

    //Método para o abre e fecha
    const inverteExpandir = () => {
        setExpandir(!expandir);
    };

    const enviaLista =  [];

    const Adicionar = (name, decr, prc, img) => {
        const dicionario = {nome: name, descricao: decr, preco: prc, imagem: img};
        enviaLista.push(dicionario);
        alert(JSON.stringify(enviaLista, null, 2)); // Converte o array para uma string formatada
    }

    function WishList(){
        const [enviaLista, setenviaLista] = useState([]);

        return(
            <FlatList
                data={enviaLista}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <Item item={item} />}
                />
        );
    }

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
                    <Button color={'purple'} onPress={ () =>  Adicionar(nome, descricao, preco, imagem) }  title="Adicionar aos Favoritos" />
                </View></>
        }
        <View style={estilos.divisor} />
    </>
}