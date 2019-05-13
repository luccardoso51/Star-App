import React, { Component} from 'react';
import {
  Text, View, Image, ImageBackground, StatusBar, TextInput,Linking
} from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { WebView} from 'react-native-webview';
import api from '../../services/api';



import styles from './styles';

export default class Bio extends Component {
  state = {
    Planet: '',
    Starships: [],
    Movies: [],
    Vehicles: [],
  }

  constructor(props) {
    super(props);

    this.state = {
      bio: this.props.navigation.state.params.bio,
    };
  }

  async componentDidMount() {
    await this.handleMovieList();
    await this.handleHomeName();
    await this.handleStarships();
    await this.handleVehicles();

    console.log(this.state.Movies);
    console.log(this.state.Starships);
    console.log(this.state.Vehicles);
  }

     handleMovieList = async () => {
       const movieList = this.state.bio.films;
       const response = movieList.map(async (films) => {
         const data = await api.get(films);

         const arrayData = Object.values(data.data)
         return arrayData;
       });


       return Promise.all(response)
         .then((results) => {
           this.setState({
             Movies: results,
           });
         });
     }

     handleStarships = async () => {
       const Starships = this.state.bio.starships;
       const response = Starships.map(async (ships) => {
         const data = await api.get(ships);
         const arrayData = Object.values(data.data)

         return arrayData;
       });

       return Promise.all(response)
         .then((results) => {
           this.setState({
             Starships: results,
           });
         });
     }


     handleVehicles = async () => {
       const Vehicles = this.state.bio.vehicles;
       const response = Vehicles.map(async (veh) => {
         const data = await api.get(veh);
         const arrayData = Object.values(data.data)

         return arrayData;
       });

       return Promise.all(response)
         .then((results) => {
           this.setState({
             Vehicles: results,
           });
         });
     }

     handleHomeName = async () => {
       const response = await api.get(this.state.bio.homeworld);
       const planetName = await response.data.name;
       this.setState({
         Planet: planetName,
       });
     }


     renderMovie = ({ item }) => (
       <View>
           <TouchableOpacity>
             <Text
               style={styles.instructions}
               onPress={()=>{
                Linking.openURL(item[13]);
              }}
             > {item[0]}
             </Text>
           </TouchableOpacity>
       </View>
     )

     renderStarShips = ({ item }) => (
      <View>
          <TouchableOpacity>
          <Text
               style={styles.instructions}
               onPress={()=>{
                Linking.openURL(item[17]);
              }}
             > {item[0]}
             </Text>
          </TouchableOpacity>
      </View>
    )

    renderVehicles = ({ item }) => (
      <View>
          <TouchableOpacity>
          <Text
               style={styles.instructions}
               onPress={()=>{
                Linking.openURL(item[15]);
              }}
             > {item[0]}
             </Text>
          </TouchableOpacity>
      </View>
    )

     render() {
       return (
         <ImageBackground
           source={{
             uri: 'https://img.wallpapersafari.com/tablet/768/1024/89/3/HVE5bi.jpg',
           }}btao apertado
           style={styles.container}
           resizeMode="cover"
         >

          <Image
          source={{
            uri: 'https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png',
          }}
          style={styles.logo}
          resizeMode="contain"
        />
           <StatusBar barStyle="light-content" backgroundColor="#000" />

           <Text style={styles.name}>{this.state.bio.name}</Text>
           <Text style={styles.welcome}>Genero: {this.state.bio.gender}</Text>
           <Text style={styles.welcome}>Peso :{this.state.bio.mass} kg</Text>
           <Text style={styles.welcome}>Altura: {this.state.bio.height} cm</Text>
           <Text style={styles.welcome}>Planeta Natal: {this.state.Planet}</Text>

           <Text style={styles.welcome}>Filmes</Text>
           <FlatList
             data={this.state.Movies}
             keyExtractor={item => item.toString()}
             renderItem={this.renderMovie}
           /> 
           <Text style={styles.welcome}>Naves Espaciais</Text>

           <FlatList
             data={this.state.Starships}
             keyExtractor={item => item.toString()}
             renderItem={this.renderStarShips}
           />         
          <Text style={styles.welcome}>Veículos</Text>
  
          <FlatList
           data={this.state.Vehicles}
           keyExtractor={item => item.toString()}
           renderItem={this.renderVehicles}
         /> 

            <TouchableOpacity>
                <Text
                style={styles.back}
                onPress={()=>{
                  this.props.navigation.navigate('Main');
                }}
                >Voltar</Text>
            </TouchableOpacity>

         </ImageBackground>
       );
     }
}
