import React from 'react'

import { useHash } from 'react-hash'

const App = () => {
  const [hash, setHash] = useHash()

  return (
    <div className='App'>
      <h1>{hash}</h1>
      <input
        type='text'
        value={hash}
        onChange={(e) => setHash(e.target.value)}
      />
    </div>
  )
}

export default App
