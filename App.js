import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StatusBar, SafeAreaView, View } from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';
import Home from './src/telas/home';
import Sobre from './src/telas/sobre';
import Catalogo from './src/telas/Catalogo/catalogo';
import Contato from './src/telas/contato';
import Produtos from './src/telas/Produtos/index';
import ListaDesejos from './src/telas/ListaDesejos/index';
import Camera from './src/telas/camera';
import API from './src/telas/apis/api';

function MenuCesta() {
  return (
    <SafeAreaView>
      <Home />
      <StatusBar />
    </SafeAreaView>
  );
}

const Tab = createBottomTabNavigator();

function TabsMenu() {
  return (
    <Tab.Navigator
      style={{ backgroundColor: '#211F20'}}
      screenOptions={
        ({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: "#211F20", height: 55, paddingTop: 5, paddingBottom: 5},
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Catálogo') {
            iconName = focused
              ? 'shirt'
              : 'shirt-outline';
          } else if (route.name === 'Sobre') {
            iconName = focused
              ? 'chatbubble-ellipses'
              : 'chatbubble-ellipses-outline';
          } else if (route.name === 'Destaques') {
            iconName = focused
              ? 'list'
              : 'list-outline';
          } else if (route.name === 'Lista Desejos') {
            iconName = focused
              ? 'heart'
              : 'heart-outline';
          } else if (route.name === 'Contato') {
            iconName = focused
              ? 'chatbubble'
              : 'chatbubble-outline';
          } else if (route.name === 'API') {
            iconName = focused
              ? 'chatbubble'
              : 'chatbubble-outline';
          } 
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'white',
      })
    }
    >
      <Tab.Screen name="Home" component={MenuCesta}  />
      <Tab.Screen name="Sobre" component={Sobre} />
      <Tab.Screen name="Catálogo" component={Catalogo} />
      <Tab.Screen name="Destaques" component={Produtos} />
      <Tab.Screen name="Lista Desejos" component={ListaDesejos} options={{unmountOnBlur: true}}/>
      <Tab.Screen name="Contato" component={Contato} />
      <Tab.Screen name="API" component={API} />

    </Tab.Navigator>

  );
}

export default function App() {

  //Fonte utilizada para o projeto
  const [fonteCarregada] = useFonts({
    "MontSerratRegular": Montserrat_400Regular,
    "MontSerratBold": Montserrat_700Bold,
  });

  //Checa se as fontes já foram carregadas antes de exibir no APP
  if (!fonteCarregada) {
    return <View />;
  }

  return (
      <NavigationContainer>
        <TabsMenu />
      </NavigationContainer>
  );
}
