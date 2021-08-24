type TokenValueBase = {
  // address: string,
  symbol: string,
  // logo: string,
  // decimals: number,
  chain: string,
  // name: string,
  // price: number,
  balance: number
}

export interface TokenValues {
  tokenValues: TokenValueBase[];
  loading?: boolean;
};
