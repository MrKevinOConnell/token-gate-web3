// This script demonstrates access to the NFT API via the Alchemy SDK.
import { useCallback, useEffect, useState} from "react";

interface ProvideProps {
    alchemyApiKey: string;
    wallet: string;
    contractAddress: string;
}
// Provider hook that creates auth object and handles state
export const useNFTAuth = ({alchemyApiKey,wallet,contractAddress}:ProvideProps):[boolean,null | Error] => {
    const [holder, setHolder] = useState(false);
    const [error, setError] = useState(null as any);
  

    const execute = useCallback(async () => {
        if(!alchemyApiKey) {
            setError(new Error("need a alchemy api key!"))
            return
        }
        if(!wallet) {
            setError(new Error("need a wallet address!"))
            return
        }
        if(!contractAddress) {
            setError(new Error("need a contract address!"))
            return
        }
    const options = {method: 'GET', headers: {accept: 'application/json'}};
try {
    const res = await fetch(`https://eth-mainnet.g.alchemy.com/nft/v2/${alchemyApiKey}/isHolderOfCollection?wallet=${wallet}&contractAddress=${contractAddress}`, options)
    const json = await res.json()
    setHolder(json.isHolderOfCollection)
    setError(null as any)
}
  catch(e) {
setError(e)
setHolder(false)
  }
      }, [alchemyApiKey,wallet,contractAddress]);
      
      useEffect(() => {
       execute()
      }, [execute]);

      return [holder,error]
  }