import { useWeb3Modal } from '@web3modal/react';
   import { useAccount, useDisconnect } from 'wagmi';
   import { Button } from 'antd';

   export default function WalletConnect() {
     const { open } = useWeb3Modal();
     const { address } = useAccount();
     const { disconnect } = useDisconnect();

     return (
       <div style={{ padding: 20 }}>
         {address ? (
           <Button onClick={() => disconnect()}>
             Connected: {address.slice(0, 6)}...{address.slice(-4)}
           </Button>
         ) : (
           <Button type="primary" onClick={() => open()}>
             Connect Wallet
           </Button>
         )}
       </div>
     );
   }
