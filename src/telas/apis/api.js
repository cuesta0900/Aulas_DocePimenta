import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import estilos from "./estilos";
import Botao from '../../componentes/Botao';
import Texto from '../../componentes/Texto';

export default function API() {
    const [cep, setCep] = useState('');
    const [address, setAddress] = useState('');

    const fetchAddress = () => {
        axios.get(`https://viacep.com.br/ws/${cep}/json/`)
            .then(response => {
                const data = response.data;
                setAddress(`CEP: ${data.cep} Logradouro: ${data.logradouro} Bairro: ${data.bairro} Cidade: ${data.localidade} Estado: ${data.uf} ` );
            })
            .catch(error => {
                console.error('Erro na requisição:', error);
                setAddress('CEP não encontrado');
            });
    };

    return (
        <View>
            <TextInput style={estilos.titulo}
                placeholder="Digite o CEP"
                value={cep}
                onChangeText={text => setCep(text)}
                keyboardType="numeric"
            />
            <Botao texto='Buscar endereço' acao={() => fetchAddress()} style={{backgroundColor: 'black'}}></Botao>
            <Texto style={estilos.endereco}>{address}{'\n'}{'\n'}
                <Texto style={estilos.preco}>Frete: R$12,99</Texto>
            </Texto>
        </View>
    );
}
