import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Icon } from 'semantic-ui-react'

const Game = ({ game, fromHome }) => {
  return (
    <div className='ui middle aligned center aligned grid'>
      <Container>
        <div className='game-container'>
          <h2>{game.name?.toUpperCase()} </h2>
          <sub>{game.id}</sub>
          <img
            style={{ width: '100%' }}
            src={game.box_art_url}
            alt={game.name}
          />
          {!fromHome && (
            <Link to={`/games`} style={{ color: 'white' }}>
              <Icon name='angle double left' />
              <button className='card-button'>Regresar </button>
            </Link>
          )}
        </div>
      </Container>
    </div>
  )
}

export default Game
