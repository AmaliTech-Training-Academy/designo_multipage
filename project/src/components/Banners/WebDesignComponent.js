import React from 'react'
import { Link } from 'react-router-dom'
import {
    WebContainer,
    Content,
} from './ContainerStyles'

export default function WebDesignContainer({variant}) {
  return (
    <>
      <WebContainer variant={variant}>
        <Link to='/web-design'>
          <Content>
              <span>Web design</span>
              <p>view project <b>></b></p>
          </Content>
        </Link>
        </WebContainer>
    </>
  )
}
  
