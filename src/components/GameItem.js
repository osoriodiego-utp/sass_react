import React from 'react'
import { Link } from 'react-router-dom'

const GameItem = ({ item }) => {
  return (
    <div className='card'>
      <img className='card-img' src={item.box_art_url} alt={item.name} />
      <Link to={`/games/${item.id}`} style={{ color: 'white' }}>
        <button className='card-button'>Ver más</button>
      </Link>
    </div>
  )
}

export default GameItem
