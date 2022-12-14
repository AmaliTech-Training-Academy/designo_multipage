import React from 'react'
import {
    Container,
    Attribute,
    AttributeImage,
    AttributeDescription
} from "./AttributeStyles"

const attributes = [
    {
        image: 'passionate',
        description: 'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
    },
    {
        image: 'resourceful',
        description: 'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
    },
    {
        image: 'friendly',
        description: 'We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
}
]

function AttributeComponent() {
  return (
    <Container>
        {attributes.map((attribute, i) => {
            return (
                <Attribute>
                <AttributeImage rotate= {attribute.image} >
                  <img src={`/assets/home/desktop/illustration-${attribute.image}.svg`} alt=''/>
                </AttributeImage>
                <AttributeDescription>
                  <span>{attribute.image.toUpperCase()}</span>
                  <p>{attribute.description}</p>
                </AttributeDescription>
              </Attribute>
            )
        })}

    </Container>
  )
}

export default AttributeComponent
