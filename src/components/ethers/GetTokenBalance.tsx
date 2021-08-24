import { ethers } from "ethers";
import { isCompositeComponentWithType } from "react-dom/test-utils";

export const getTokenBalance = async (provider: any, walletAddress: string) => {
  const abi = ['function balanceOf(address account) external view returns (uint256)']

  const tokenAddress: any = {
    BKC: {
      // "TUK": "0xAAD64d9b17f86b3ba803369b0d59392b3744ab13",
      "WKUB": "0xDa91a1aee4d7829c118cD6218CDA2cB2C56dd010",
      // "MMP": "0x8bBB504B8a0e855f0F504F8D07061270aa40F928",
      "DAI": "0xED7B8606270295d1b3b60b99c051de4D7D2f7ff2",
      "CAKE": "0xD6aB567E5715b7419eB0949A811D00D40F887D73",
      "BNB": "0x7E7a450fE8BA3d6f551B3912Fa2765F923b89C5D",
      "DOLLY": "0xDD2bb4e845Bd97580020d8F9F58Ec95Bf549c3D9",
      "UST": "0x2920712a36270ba6C48a3D23998D6CFbbe0A677B",
      // "COUPON": "0xe5bdEe3A8c245d9027cD9a460179aF60fe978222",
      // "MVP": "0xDD7847deD760a8e7FB882B4A9B0e990323415ed9",
      // "TTUSD": "0x4b3Ba739A430549f4059A0134Ae6a92C7106A31a",
      // "MMUSD": "0xD460497aE0978899DeADD416e52B1f2235e49e1e",
      // "VON": "0x19dade57B0BBCE7D5E859ba02846820f5c0c2b09",
      // "LOREM": "0x42A7ECC6D2D2780C2C2daAa8F7f2d2C2557e276b",
      "KKUB": "0x67eBD850304c70d983B2d1b93ea79c7CD6c3F6b5"
    },
    BSC: {
      // "COUPON": "0x084bb94e93891D74579B54Ab63ED24C4ef9cd5Ef",
      "BUSD": "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56",
      "BNB": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
      // "MATIC": "0xCC42724C6683B7E57334c4E856f4c9965ED682bD",
      // "KMATIC": "0x032574B64Bf6fa42951f836CC8c5099d1C5747d3",
      // "WMMP": "0x422d0A431D8fb752e3697e90BA04b3324Ea0Cb4a",
      "USDT": "0x55d398326f99059fF775485246999027B3197955",
      "DOLLY": "0xfF54da7CAF3BC3D34664891fC8f3c9B6DeA6c7A5",
      "DOP": "0x844FA82f1E54824655470970F7004Dd90546bB28",
      // "TWIN": "0x3806aae953a3a873D02595f76C7698a57d4C7A57",
      "DAI": "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3"
    }
  }

  const tokenBalance: any = {
  }
  const pushTokenbalance = async (contract:ethers.Contract, chain: string, tokenName: string, walletAddress: string) => {
    tokenBalance[chain][tokenName] = ethers.utils.formatUnits(await (contract.balanceOf(walletAddress)));
  }
  let PromiseBalance = []; 
  for (let chain in tokenAddress) {
    for (let tokenName in tokenAddress[chain]) {
      let contract = new ethers.Contract(tokenAddress[chain][tokenName], abi, provider[chain]);

      PromiseBalance.push({
        'symbol': tokenName,
        'balance': parseFloat(ethers.utils.formatUnits(await (contract.balanceOf(walletAddress)))),
        'chain': chain
      });
    }
  }
  await Promise.all(PromiseBalance);
  return PromiseBalance
}
