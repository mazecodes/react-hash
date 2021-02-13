import React from 'react'

import { useHash } from 'react-hash'

const App = () => {
  const [hash] = useHash()

  return (
    <div className='App'>
      <h1>{hash}</h1>
    </div>
  )
}

export default App
