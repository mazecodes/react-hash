import { useState, useEffect } from 'react'

const useHash = () => {
  const [hash, setHash] = useState('')

  const getHash = () => {
    setHash(window.location.hash.substr(1))
  }

  const changeHash = (value) => {
    setHash(value)
    window.location.hash = value
  }

  useEffect(() => {
    window.addEventListener('hashchange', getHash)

    return () => window.removeEventListener('hashchange', getHash)
  }, [hash])

  return [hash, changeHash]
}

export { useHash }
export default useHash
