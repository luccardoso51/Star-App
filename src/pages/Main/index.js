import React, { Component, useEffect } from 'react';
import {
  Text, Image, ImageBackground, StatusBar, TextInput,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../../services/api';


import styles from './styles';
// import console = require('console');

export default class Main extends Component {
  // const [Search, setSearch] = useState({ });// usestate = estado inicial do state
  state = {
    charName: '',
  };


  handleSearch = async () => {
    const response = await api.get(`/people/?search=${this.state.charName}`);
    const charData = response.data.results[0];

    if (response.data.results[0]) {
      console.log(charData.name);
      this.props.navigation.navigate('Bio', { bio: charData });
    } else { alert(`Este não é o personagem que você procura`); }
  }

  render() {
    return (
      <ImageBackground
        source={{
          uri: 'https://img.wallpapersafari.com/tablet/768/1024/89/3/HVE5bi.jpg',
        }}
        style={styles.container}
        resizeMode="cover"
      >
        <StatusBar barStyle="light-content" backgroundColor="#000" />
        <Image
          source={{
            uri: 'https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png',
          }}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.welcome}>Bem-vindo ao StarApp!</Text>


        <TextInput
          style={styles.input}
          placeholder="Insira o nome do personagem"
          placeholderTextColor="#999"
          autoCapitalize="none"
          autoCorrect={false}
          underlineColorAndroid="transparent"
          value={this.state.charName}
          onChangeText={text => this.setState({ charName: text })}
        />

        <TouchableOpacity>
          <Text
            style={styles.Search}
            onPress={this.handleSearch}
          >Buscar Personagem
          </Text>
        </TouchableOpacity>


      </ImageBackground>
    );
  }
}
