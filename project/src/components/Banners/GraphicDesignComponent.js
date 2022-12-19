import React from 'react'
import { Link } from 'react-router-dom'
import {
    GraphicContainer,
    Content,
} from './ContainerStyles'

export default function GraphicDesignContainer() {
  return (
    <GraphicContainer>
      <Link to='/graphic-design'>
        <Content>
            <span>Graphic design</span>
            <p>view project <b>></b></p>
        </Content>
      </Link>
    </GraphicContainer>
  )
}
