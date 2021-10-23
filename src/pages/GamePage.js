import React, { useState, useEffect } from 'react'

import { Icon, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import Game from '../components/Game'

import api from '../api'
import './pages.sass'

const ITEM_SIZE = 500

const GamePage = ({ match }) => {
  const gameId = match.params.id
  const [game, setGame] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const result = await api.get(
        `https://api.twitch.tv/helix/games?id=${gameId}`
      )

      result.data.data[0].box_art_url = result.data.data[0].box_art_url
        .replace('{width}', ITEM_SIZE)
        .replace('{height}', ITEM_SIZE)

      setGame(result.data.data[0])
      setLoading(false)
    }
    fetchData()
  }, [gameId])

  return (
    <>
      {loading ? (
        <div className='ui active dimmer'>
          <div className='ui massive text loader'>Cargando...</div>
        </div>
      ) : (
        <>
          {game ? (
            <Game game={game} />
          ) : (
            <div>
              <Message color='red'>Juego no encontrado</Message>
              <Link to={`/games`} style={{ color: 'white' }}>
                <Icon name='angle double left' />
                <button className='card-button'>Regresar </button>
              </Link>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default GamePage
