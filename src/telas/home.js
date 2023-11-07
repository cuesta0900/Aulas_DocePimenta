import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Image, Dimensions, View, Button } from "react-native";
import { Audio } from "expo-av";

import Carrossel from '../componentes/Carrossel.js'
import Header from '../componentes/Header.js';
import API from "./apis/api.js";


import cupom from "../../assets/cupom.jpg";
import promo from "../../assets/promo.jpg";


export default function Home() {
    const [audioStatus, setAudioStatus] = useState(false);
    const [sound, setSound] = useState(null);

    useEffect(() => {
        const loadAudio = async () => {
            const { sound } = await Audio.Sound.createAsync(
                require('../../assets/videos/audio.mp3')
            );
            setSound(sound);

            // Adicione o código de reprodução aqui para garantir que o som seja carregado antes de ser reproduzido.
            await sound.setStatusAsync({ shouldPlay: audioStatus });
        };

        loadAudio();

        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    }, [audioStatus]);

    return (
        <>
            <ScrollView>
                <Header style={estilos.header} />
                <Button color={audioStatus ? 'red' : 'green'} title={'Toque-me'} onPress={() => setAudioStatus(!audioStatus)} />
                <Carrossel style={estilos.carrosel} />
                <View style={estilos.container}>
                    <Image style={estilos.imagem} source={cupom} />
                    <Image style={estilos.imagem} source={promo} />
                </View>
                <API></API>
            </ScrollView>
        </>
    );
}

const width = Dimensions.get('screen').width;

const estilos = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: 'center'
    },

    carrosel: {
        marginVertical: 50
    },

    header: {
        marginBottom: 50
    },

    imagem: {
        marginVertical: 20,
        width: width * 0.7,
        height: width * 0.7
    }
});
