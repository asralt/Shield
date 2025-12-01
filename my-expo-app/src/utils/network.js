import * as Network from 'expo-network';

export const getLocalIP = async () => {
  try {
    const state = await Network.getNetworkStateAsync();
    if (state.isInternetReachable && state.isWifi) {
      return state.ipAddress; // e.g., "192.168.1.15"
    }
  } catch (err) {
    console.warn("Failed to get local IP:", err);
  }
  return null;
};

// Assumes backend runs on <same-subnet>.1 (e.g., 192.168.1.1:3000)
export const getBackendUrl = async () => {
  const ip = await getLocalIP();
  if (!ip) return null;
  const parts = ip.split('.');
  parts[3] = '1'; // usually router or your laptop
  const baseIp = parts.join('.');
  return `http://${baseIp}:3000`;
};