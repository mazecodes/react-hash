<div align="center">
  <h1>React Hash</h1>
  <p><i>React custom hook to get hash from the URL.</i></p>
</div><br>

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Contributing](#contributing)
- [Author](#author)
- [Support](#show-your-support)
- [License](#license)

## Install

npm:

```bash
npm install react-hash
```

Yarn:

```bash
yarn add react-hash
```

## Usage

```javascript
import React from 'react';
import { useHash } from 'react-hash';

const App = () => {
  const [hash, setHash] = useHash();

  return (
    <div className='App'>
      <h1>{hash}</h1>
      <input
        type='text'
        value={hash}
        onChange={(e) => setHash(e.target.value)}
      />
    </div>
  );
};

export default App;
```
