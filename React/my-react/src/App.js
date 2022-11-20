import './App.css';
import HelloWorld from './components/HelloWorld';
import Frases from './components/Frases';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Form2 from './components/Form2';
import Evento2 from './components/Evento2';
import Condicional from './components/Condicional';

function App() {

  const name = "Lima Andersom"
  const newName = name.toUpperCase();
  const url = 'https://t3.ftcdn.net/jpg/03/45/05/92/360_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg'
  // const url = 'http://via.placeholder.com/150' BLOQUEADO Cloudflare Ray ID: 76d01f55989c25fd

  function sum(a,b) {
    return a+b
  }

  return (
    <div className="App">
      <h1>{newName}</h1>
      <p>Anderson Marrins de Lima</p>
      <p>Soma: {sum(7,6)}</p>
      <img src={url} alt="Minha imagem" width="150px"/>

      <Frases />
      <HelloWorld />
      <Frases />
      
      <hr></hr>
      
      <SayMyName name="Anderson" />
      <SayMyName name="Davi" />
      <SayMyName name={name} />
      
      <hr></hr>

      <Pessoa
        name="Satriani"
        year="44"
        job="Guitarrista"
        foto={url}
         />

      <hr></hr>
      <List /> 

      <hr></hr>
      <Evento numero={1} />

      <hr></hr>
      <Form />

      <hr></hr>
      <Form2 />

      <hr></hr>
      <Evento2 />

      <hr></hr>
      <Condicional />
    </div>
  );
}

export default App;
