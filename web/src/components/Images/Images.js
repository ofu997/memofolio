import { useMutation, useQuery } from '@redwoodjs/web'
import { Link, routes } from '@redwoodjs/router'
import { QUERY } from 'src/components/ImagesCell'
import { toast } from '@redwoodjs/web/toast'
import { getLoggedInUser, dummyObject } from 'src/functions/WebFunctions'
var jwt = require('jsonwebtoken')
import { useState } from 'react'
import { Card } from 'react-bootstrap'
import { Heart, HeartFill, PersonCircle, Chat } from 'react-bootstrap-icons'

const Images = props => {
  const { images, viewStandalone } = props;

  return (
    <>
      <div id='cardContainer' className='flex flexWrapWrap justifyContentSE'>
      {images.map((image) => {


        return (
            <div key={image.id}>
            <p>{image.url}</p>
            </div>
        )
      })}
      </div>

    </>
  )
}

export default Images



// Show image and edit image are <Link>s, while delete image is an <a>

// useMutation returns a tuple that includes:
// A mutate function that you can call at any time to execute the mutation
// An object with fields that represent the current status of the mutation's execution
// src: https://www.apollographql.com/docs/react/data/mutations/
