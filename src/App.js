import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import  axios from 'axios';


//https://gateway.marvel.com:443/v1/public/characters?apikey=84c9afc670217a09f2566ca3189177f9

//key publica: 84c9afc670217a09f2566ca3189177f9
//key privada: 9a4f1874e8f4c201b8895f1aaf372fdf3fa614a1
//ts: 1

//19a4f1874e8f4c201b8895f1aaf372fdf3fa614a184c9afc670217a09f2566ca3189177f9

//hash: 273ddb932eb9647e18e21c589d55f000
//<img
//className="Character__image" 
//src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
//>

//https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=84c9afc670217a09f2566ca3189177f9&hash=273ddb932eb9647e18e21c589d55f000



function App() {

  //esta es una variable para guardar los personajes
  const [characters, setCharacters]=useState([])


  useEffect(()=>{
    //Usando axios obtenemos la informacion del link de marvel
    axios.get('https://gateway.marvel.com:443/v1/public/characters?series=19&ts=1&apikey=84c9afc670217a09f2566ca3189177f9&hash=273ddb932eb9647e18e21c589d55f000').then(res=>{
        setCharacters(res.data.data.results)
        
    }).catch(error=>console.log(error))

  },[])

  console.log(characters)
  return (
    <React.Fragment>
      <div className='App'>
      <h1>Marvel Api using React</h1>

        <div className='Characters_data'>
          { characters.map( per=>(

            <div className="Character__container">
                <img
                    className="Character__image" alt=''
                    src={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                />
            <div className="Character__data">
                <h1 className="Character__name">Name: {per.name}</h1>
                <h3 className="Character__urls">Comics available: {per.comics.available}</h3>
                <h3 className="Character__urls">Series available: {per.series.available}</h3>
                <h4 className="Character__modified">Last Modification: {per.modified}</h4>
                <p className="Character__description">{per.description || "No description"}</p>


            </div>
        </div>

          ))}
  

        </div>
    </div>
    </React.Fragment>
  );
}

export default App;