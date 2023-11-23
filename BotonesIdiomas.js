import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Button,Spinner } from 'reactstrap';

function Boton(props) {
  return (
  <Button color={props.color} onClick={()=>props.cambia()} outline>
    {props.color}
  </Button>
  )
  }
  function Circulo(props) {
    return (
    <Spinner  color={props.color} onClick={()=>props.cambia(props.color)}>
     
    </Spinner>
    )
    }
  class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
  letrero:"letrero",
  color: "success",
  
  }
  }
  cambiaSuccess() {
    this.setState({color:"success"})
  }
  cambiaDanger() {
    this.setState({color:"danger"})
  }
  cambiaPrimary() {
    this.setState({color:"primary"})
  }

  cambiaColorLetrero(colorSpin){
    this.setState({letrero:colorSpin})
  }
  
  render() {
  return (
    
  <div className="App">
  <h1>{this.state.letrero}</h1>
  <Circulo color={this.state.color} cambia={()=>this.cambiaColorLetrero(this.state.color)}/>
  <Boton  color="success"cambia={()=>this.cambiaSuccess()}/>
  <Boton  color="danger" cambia={()=>this.cambiaDanger()}/>
  <Boton  color="primary" cambia={()=>this.cambiaPrimary()}/>
  </div>
  );
  }
  }
  
  export default App;
  
  /*
  cambia() {
  if (this.state.color === "danger") {
  this.setState({ color: "success" })
  } else {
  this.setState({ color: "danger" })
  }
  }*/