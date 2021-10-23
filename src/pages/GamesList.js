import React, { useEffect, useState } from 'react'
import GameItem from '../components/GameItem'
import api from '../api'

import { Header } from 'semantic-ui-react'

const IMG_SIZE = 400

const Games = () => {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    document.title = 'Juegos - Teleperformance'

    const fetchData = async () => {
      setLoading(true)
      const result = await api.get('https://api.twitch.tv/helix/games/top')
      result.data.data.map(game => {
        let newUrl = game.box_art_url
          .replace('{width}', IMG_SIZE)
          .replace('{height}', IMG_SIZE)
        game.box_art_url = newUrl
        return game
      })
      setGames(result.data.data)
      setLoading(false)
    }

    fetchData()
  }, [])

  return (
    <>
      <Header as='h2'>Top 20</Header>
      {loading ? (
        <div className='ui active dimmer'>
          <div className='ui massive text loader'>Cargando...</div>
        </div>
      ) : (
        <div className='grid'>
          {games.map(game => (
            <GameItem key={game.id} item={game}/>
          ))}
        </div>
      )}
    </>
  )
}

export default Games
