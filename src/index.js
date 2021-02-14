import { useState, useEffect } from 'react';

const useHash = () => {
  const [hash, setHash] = useState('');

  const getHash = () => {
    setHash(window.location.hash.substr(1));
  };

  useEffect(() => {
    getHash();
    window.addEventListener('hashchange', getHash);

    return () => window.removeEventListener('hashchange', getHash);
  }, []);

  useEffect(() => {
    window.location.hash = hash;
  }, [hash]);

  return [hash, setHash];
};

export { useHash };
export default useHash;
