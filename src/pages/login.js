import React, {Component} from "react";

import { Form, } from "react-bootstrap";
import '../App.css';
import axios from 'axios';
import md5 from 'md5';

import Cookies from "universal-cookie";


const baseUrl="http://localhost:3001/contraseña";
const cookies = new Cookies();
class Login extends Component {

    state={
        form:{
            password: ""
        }
    }

    handleChange= async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }
   iniciarSesion=async()=>{
    await axios.get(baseUrl, {params:{password: md5(this.state.form.password)}})
    .then(response=>{
        return response.data;
    })
    .then(response=>{
        if(response.length>0){
            var respuesta= response[0];
            cookies.set('id', respuesta.id, {path:"/"});
            alert('Correcto');
            window.location.href="./menu";
        }else{
            alert('error')
        }
    })
    .catch(error=>{
        console.log(error);
    })
   }

    render(){
        return(
            <div id="contenidocodigo" >
      <div className="contraseña">
   <input type= "password" className="form-control" name="password" onChange={this.handleChange}/>
   </div>
   <Form>
   
   
     

      <div id="bn">
      <button variant="outline-warning" onClick={()=> this.iniciarSesion()}
       >
    ENTRAR
  </button>
  </div>
      </Form>
    </div>
        )
    }
}

export default Login;