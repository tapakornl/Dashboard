import { ethers } from "ethers";
export const getProvider = async () => {
  const BSC_URL = "https://bsc-dataseed.binance.org/";
  const BKC_URL = "https://rpc.bitkubchain.io";

  const chainURLs: { [chainName: string]: string } = {
    'BSC': BSC_URL,
    'BKC': BKC_URL
  };
  
  const provider:any = {};
  for (let chainName in chainURLs) {
    provider[chainName] = await new ethers.providers.JsonRpcProvider(chainURLs[chainName]);
    console.log(provider[chainName]);
  }

  return provider
  // 0xED7B8606270295d1b3b60b99c051de4D7D2f7ff2
}