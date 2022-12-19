export interface NFTProps {
    alchemyApiKey: string;
    wallet: string;
    contractAddress: string;
}
export declare const useNFTAuth: ({ alchemyApiKey, wallet, contractAddress }: NFTProps) => any[];
