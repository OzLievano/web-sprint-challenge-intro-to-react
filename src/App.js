import React,{useState,useEffect} from 'react';
import axios from 'axios'
import Characters from './components/Characters'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [data,setData] = useState([])


  const myCard = document.querySelectorAll('card')

  const toggleCard = () =>{
    myCard.classList.toggle('open-card');
  }

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() =>{
    axios
    .get("https://swapi.dev/api/people/")
    .then((r)=>{
      console.log(r.data.results)
      setData(r.data.results)
    })
  },[])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Characters data={data} toggleCard={toggleCard}/>
    </div>
  );
}

export default App;
