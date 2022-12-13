import React from 'react'
import {
    WebContainer,
    Content,
} from './ContainerStyles'

export default function WebDesignContainer({variant}) {
  return (
    <>
      <WebContainer variant={variant}>
          <Content>
              <span>Web design</span>
              <p>view project <b>></b></p>
          </Content>
        </WebContainer>
    </>
  )
}
  
