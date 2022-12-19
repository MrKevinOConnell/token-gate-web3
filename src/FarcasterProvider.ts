// This script demonstrates access to the NFT API via the Alchemy SDK.
import { useCallback, useEffect, useState} from "react";

export interface NFTProps {
    bearerToken: string;
    wallet: string;
}

// Provider hook that creates auth object and handles state
export const useFarcasterAuth = ({bearerToken,wallet}:NFTProps) => {
    const [isUser, setIsUser] = useState(false);
    const [error, setError] = useState(null as any);
    const execute = useCallback(async () => {
        if(!bearerToken) {
            setError(new Error("need bearer token!"))
            return
        }
        if(!wallet) {
            setError(new Error("Need a wallet address"))
            return
        }
try {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${bearerToken}`);
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
      };
    const res = await fetch(`https://api.farcaster.xyz/v2/user-by-verification?address=${wallet}`,requestOptions)
    const json = await res.json()
    if(json.result.user) {
        setIsUser(true)
    }
    else {
        setIsUser(false)
    }
    setError(null)
}
  catch(e) {
setError(e)
setIsUser(false)
  }
      }, [bearerToken,wallet]);
      
      useEffect(() => {
       execute()
      }, [execute]);

      return [isUser,error]
  }