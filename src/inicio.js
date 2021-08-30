
import {useState} from "react";
import { Form, } from "react-bootstrap";
import './App.css';

function Inicio (props) {
    const[password, setPassword]= useState("")
    const handleContrasena = (event) => {
        setPassword(event.target.value);
      }
     
    return ( 
 
    <div id="contenidocodigo" >
      <div className="contraseña">
   <input type= "numer"  onChange={handleContrasena} value= {password} />
   </div>
   <Form>
   
   
     

      <div id="bn">
      <button variant="outline-warning" type="submit" onClick={()=>props.login(password,)}>
    ENTRAR
  </button>
  </div>
      </Form>
    </div>
  
    )}

  export default Inicio;