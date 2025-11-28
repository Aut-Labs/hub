
import axios from "axios";
import { environment } from "./environment";
import { NetworkConfig } from "./network.config";

export const getAppConfig = async (): Promise<NetworkConfig[]> => {
  return axios
    .get(`${environment.apiUrl}/aut/config/network/${environment.networkEnv}`)
    .then((r) => r.data);
};

const sigilCache: Record<string, string> = {};

export const getHubSigil = async (hubAddress: string): Promise<string> => {
  if (sigilCache[hubAddress]) {
    return sigilCache[hubAddress];
  }
  try {
    const response = await axios.get(`${environment.apiUrl}/user/generateSigil/${hubAddress}`);
    sigilCache[hubAddress] = response.data.sigil;
    return response.data.sigil;
  } catch (error) {
    console.error('Error fetching hub sigil:', error);
    throw error;
  }
};
