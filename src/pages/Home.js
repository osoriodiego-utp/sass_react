import React, { useEffect, useState } from 'react'
import { Header, Input } from 'semantic-ui-react'
import api from '../api'
import Game from '../components/Game'

const GAME_SIZE = 400

const Home = () => {
  const [inputValue, setInputValue] = useState('')
  const [game, setGame] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setGame({})
    document.title = 'Inicio - Teleperformance'
  }, [])

  function handleInputChange (e) {
    setInputValue(e.target.value)
  }

  function handleSubmit (e) {
    e.preventDefault()
    if (inputValue.trim().length > 1) {
      setLoading(true)
      api
        .get(`https://api.twitch.tv/helix/games?name=${inputValue}`)
        .then(req => {
          req.data.data[0].box_art_url = req.data.data[0].box_art_url
            .replace('{width}', GAME_SIZE)
            .replace('{height}', GAME_SIZE)

          setGame(req.data.data[0])
        })
        .catch(error => console.error(error))
      setInputValue('')
      setLoading(false)
    }
  }

  return (
    <>
      <Header as='h2'>Búsqueda de juegos</Header>
      <form onSubmit={handleSubmit}>
        <Input
          icon='search'
          type='text'
          placeholder='Buscar...'
          value={inputValue}
          onChange={handleInputChange}
          style={{ width: '100%' }}
        />
      </form>
      {loading ? (
        <div className='ui active dimmer'>
          <div className='ui massive text loader'>Cargando...</div>
        </div>
      ) : (
        <>
          {Object.keys(game).length !== 0 && (
            <div style={{ margin: '20px' }}>
              <Game game={game} fromHome />
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Home
