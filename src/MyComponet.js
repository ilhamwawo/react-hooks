import React from 'react'
import {useContext} from 'react'
import Context from './Context'

const MyComponet = () => {
    const valueku  = useContext(Context)

  return (
    <div>
        <h2>Nilai baru : {valueku}</h2>
    </div>
  )
}

export default MyComponet