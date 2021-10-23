import React, { useEffect } from 'react'
import { Grid, Header } from 'semantic-ui-react'

const About = () => {
  useEffect(() => {
    document.title = 'Acerca de - Teleperformance'
  })
  return (
    <>
      <Header as='h2'>Acerca de</Header>
      <Grid>
        <Grid.Row>
          <Grid.Column width={8}>
            <h4>Navbar: </h4>
            <p>El menú cuenta con las opciones de Inicio, Top y Acerca de</p>
            <h4>Inicio:</h4>
            <p>
              El usuario podrá buscar juegos por nombre, del cual, si se
              encuentra, mostrará su titulo, id en la plataforma y su portada.
            </p>
            <h4>Top:</h4>
            <p>
              Hace referencia al top 20 de juegos en twitch, organizados en una
              cuadricula para su visualización. La opción "ver más" permite, en
              una nueva vista, tener una imágen ampliada de su portada, el
              título y el id en la plataforma.{' '}
            </p>
          </Grid.Column>
          <Grid.Column width={4}>
            <h4>Desarrollo</h4>
            <p>
              React <code>17.0.2</code>
            </p>
            <p>react-router-dom</p>
            <p>Axios</p>
          </Grid.Column>
          <Grid.Column width={4}>
            <h4>Estilos</h4>
            <p>
              node-sass <code>4.14.1</code>{' '}
            </p>
            <p>semantic-ui-css</p>
            <p>semantic-ui-react</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export default About
