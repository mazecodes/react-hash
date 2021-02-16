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

## Contributing

All contributions, issues and feature requests are welcome!<br>
Please feel free to check [issues page](https://github.com/mazecodes/react-hash/issues).

1. Fork the project
1. Create your feature branch (`git checkout -b feature/AwesomeFeature`)
1. Commit your changes (`git commit -m "Add Awesome Feature"`)
1. Push to the branch (`git push origin feature/AwesomeFeature`)
1. Open a Pull Request

## Author

Maze Peterson:

- Twitter: [mazecodes](https://twitter.com/mazecodes)
- GitHub: [mazecodes](https://github.com/mazecodes)
- npm: [mazecodes](https://npmjs.com/~mazecodes)

## Show your support

Give a ⭐ if you liked this project!

## License

[MIT](https://github.com/mazecodes/react-hash/blob/master/LICENSE) © Maze Peterson
