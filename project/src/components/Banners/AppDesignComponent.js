import React from 'react'
import { Link } from 'react-router-dom'
import {
    AppContainer,
    Content,
} from './ContainerStyles'

export default function AppDesignContainer() {
  return (
    <>
      <AppContainer>
        <Link to='/app-design'>
          <Content>
              <span>app design</span>
              <p>view project <b>></b></p>
          </Content>
        </Link>
        </AppContainer>
    </>
  )
}
  
