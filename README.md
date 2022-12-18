React hooks for token gating content via a NFT collection or Farcaster.

## Installation

**npm:**

```sh
npm install token-gate-web3
```

**yarn:**

```sh
yarn add token-gate-web3
```

## Example
```tsx
import logo from './logo.svg';
import './App.css';
import {useNFTAuth,useFarcasterAuth} from 'token-gate-web3'


function App() {
  const [holder,error] = useNFTAuth({alchemyApiKey:'your-key',wallet: 'user-wallet', contractAddress: 'contract-address'})
  const [FCToken,FCError] =  useFarcasterAuth({wallet: 'wallet-address', bearerToken:"bearer-token"})
  return (
    <div className="App">
     {holder ? <p>You are a holder</p> :<p>you are not a holder</p>}
     {FCToken ? <p>You are a Farcaster user</p> :<p>you are not a farcaster User</p>}
     {FCError && <p>Farcaster Error:{FCError.message}</p>}
     {error && <p>Farcaster Error:{error.message}</p>}
    </div>
  );
}

export default App;
```

## Contributing

For fixes or contributions, please open a issue. 

## License

This project is licensed under the terms of the
[MIT license](/LICENSE).