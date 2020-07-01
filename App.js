import React, { Component } from 'react'
import {StyleSheet} from 'react-native'
//import Jugador from './components/jugador'
// You can import Jugador from components
import Jugador from './components/Jugador';

class App extends Component {
    state = {
      jugadores: [
        {nombre:'Alvaro', asistencia:1},
        {nombre:'Franco', asistencia:0},
        {nombre:'Joaquín', asistencia:2}
      ]
    }
    
    render() {
      return (
        <div style={Styles.body}>
          <div style={Styles.container}>
            <ul>
              {
              this.state.jugadores.map((jugador)=>{
              return(<Jugador asistencia={jugador.asistencia}>{jugador.nombre}</Jugador>)    
              })
            }
            </ul>
          </div>  
        </div> 
      )
    }
}

const Styles = StyleSheet.create({
  body : {
    flex : 1,
  },
  container : {
    flex : 1,
    flexDirection : 'column',
    backgroundColor : '#fff',
  }
})

export default App;