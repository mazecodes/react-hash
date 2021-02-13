import { useState, useEffect } from 'react'

const useHash = () => {
  const [hash, setHash] = useState('')

  const getHash = () => {
    setHash(window.location.hash.substr(1))
  }

  useEffect(() => {
    window.addEventListener('hashchange', getHash)

    return () => window.removeEventListener('hashchange', getHash)
  }, [hash])

  return [hash]
}

export { useHash }
export default useHash
