import React from "react";
import { Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import Texto from "../componentes/Texto";
import Header from "../componentes/Header";
import loja from "../../assets/loja.jpg" //Mudar imagem
import {Video, ResizeMode} from 'expo-av';
//import imgSacolao from "../../assets/imagem_sacolao.jpg"

const width = Dimensions.get('screen').width;

export default function Sacolao(){
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({}); 
    return <ScrollView>
        <Header />
        <Texto style={estilos.slogan}>
            Fazemos você se sentir linda
        </Texto>
        <Texto style={estilos.slogan}>
            Vestimos nossas Pimentas com estilo, qualidade e elegância!!!
        </Texto>
        <Texto style={estilos.texto}>
           Somos uma loja de roupa localizada em Pernambuco, 
           buscando sempre visar o bem estar de nossos clientes.
        </Texto>
        <Video ref={video}
            style={estilos.loja}
            source={require('../../assets/videos/video.mp4')}
            useNativeControls
            resizeMode={ResizeMode.CONTAIN}
            isLooping
            onPlaybackStatusUpdate={status => setStatus(() => status)}/>
        <Texto style={estilos.texto}>
        📍Endereço: Rua Pedro Lúcio Albuquerque, 134, Lajedo, Pernambuco, CEP 55385-000 
        </Texto>
    </ScrollView>;
}

const estilos = StyleSheet.create({
    loja:{
        alignSelf: "center",
        margin: 40,
        borderRadius: 30,
        width: "90%",
        height: 1024/900 * width,
    },
    texto:{
        color: 'black', 
        fontSize: 20,
        marginBottom: 20,
        textAlign: "center"
    },
    slogan:{
        color: 'black', 
        fontSize: 30,
        margin: 10,
        textAlign: "center",
        fontWeight: "bold"
    }

})