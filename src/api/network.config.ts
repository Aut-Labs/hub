export enum NetworkConfigEnv {
  Testing = "testing",
  Mainnet = "mainnet"
}

export interface NetworkContracts {
  autIDAddress: string;
  hubRegistryAddress: string;
  taskRegistryAddress: string;
  [key: string]: string | undefined;
}

export interface NetworkConfig {
  network: string;
  name: string;
  chainId: string | number;
  rpcUrls: string[];
  explorerUrls: string[];
  biconomyApiKey: string;
  contracts: NetworkContracts;
  disabled: boolean;
  nativeCurrency: any;
}
