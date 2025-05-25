import { useWeb3React } from '@web3-react/core';
import { InjectedConnector } from '@web3-react/injected-connector';

export const injected = new InjectedConnector({ supportedChainIds: [56] }); // BSC Mainnet

export default function WalletConnect() {
  const { activate, account } = useWeb3React();
  return (
    <button 
      onClick={() => activate(injected)}
      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
    >
      {account ? `Connected: ${account.slice(0, 6)}...` : "Connect MetaMask"}
    </button>
  );
}
