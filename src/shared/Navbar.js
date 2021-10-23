import { React, useState } from 'react'
import { Link } from 'react-router-dom'

import { Menu, Segment } from 'semantic-ui-react'

const Navbar = () => {
  const [menuItem, setMenuItem] = useState('home')

  function handleItemClick (e, { name }) {
    setMenuItem(name)
  }

  return (
    <Segment inverted>
      <Menu inverted pointing secondary>
        <Menu.Item
          as={Link}
          to={'/'}
          name='Inicio'
          active={menuItem === 'home'}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to={'/games'}
          name='Top'
          active={menuItem === 'games'}
          onClick={handleItemClick}
        />
        <Menu.Item
          as={Link}
          to={'/about'}
          name='Acerca'
          active={menuItem === 'about'}
          onClick={handleItemClick}
        />
      </Menu>
    </Segment>
  )
}

export default Navbar
