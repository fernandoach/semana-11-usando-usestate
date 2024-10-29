import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)

  const url = 'https://anime-db.p.rapidapi.com/anime/by-id/2'
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'c4c82842c7msha88eaaa8809669ep18a1d1jsn346564f8cfe3',
      'x-rapidapi-host': 'anime-db.p.rapidapi.com'
    }
  }

  useEffect(
    () => {
      try {
        fetch(url, options)
          .then(result => result.json())
          .then(result => setData(result))
          .then(() => setLoading(false))
          .catch(error => console.log(error))
      } catch (error) {
        console.log(error)
      }
    }, 
    []
  )

  if(loading){
    return (
      <h1>CARGANDO...</h1>
    )
  }

  if(!data.title){
    return (
      <>
        <h1>Bloqueado...</h1>
      </>
    )
  }

  return (
    <>
      <h1>Lista de animes</h1>
      <div>
        <img src={data.image} alt={`Imagen de ${data.title}`} />
        <h2>{data.title}</h2>
        <p>{data.generes}</p>
        <p>{data.synopsis}</p>
      </div>
    </>
  )
}

export default App
