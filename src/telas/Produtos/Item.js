import React, { useState } from "react";
import Texto from "../../componentes/Texto";
import estilos from "../Produtos/estilos";
import { Button, View, TouchableOpacity, Image, FlatList } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Item({id, nome, descricao, preco, imagem }) {

    const [expandir, setExpandir] = useState(false);

    //Método para o abre e fecha
    const inverteExpandir = () => {
        setExpandir(!expandir);
    };

    async function addListaDesejos(id, nome, descricao, preco){
        const addProduto = [{
            id:id,
            nome: nome,
            descricao: descricao,
            preco: preco,
        }]
        //ASYNCSTORAGE = popular: setItem / recuperar: get Item
        //Verifica se a lista de desejos já contém itens
        const listaDesejosSalva = await AsyncStorage.getItem('ListaDesejos');
        if(listaDesejosSalva !== null){
            //A lista já tem itens
            const listaDesejos = JSON.parse(listaDesejosSalva);
            
            //Adiciona o novo produto na lista de desejos
            listaDesejos.push({id: id, nome: nome, descricao: descricao, preco: preco});


            //Converte a lista em string
            const listaDesejosAtualizada = JSON.stringify(listaDesejos);
            await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
            
            console.log(listaDesejos);
        }else{
            //A lista está vazia. Insere o primeiro item
            const listaDesejosAtualizada = JSON.stringify(addProduto);
            

            //Insere o item no AsyncStorage
            await AsyncStorage.setItem('ListaDesejos', listaDesejosAtualizada);
            console.log("Inserir o item na lista");
        }
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
                    <Button color={'purple'} onPress={ () => addListaDesejos(id, nome, descricao,preco) }  title="Adicionar aos Favoritos" />
                </View></>
        }
        <View style={estilos.divisor} />
    </>
}