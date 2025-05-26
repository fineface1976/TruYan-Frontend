import { createPublicClient, http } from 'viem';
   import { bsc } from 'viem/chains';
   import { EthereumClient } from '@web3modal/ethereum';

   // Get your Project ID from https://cloud.walletconnect.com
   export const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID';

   const chains = [bsc];
   const transport = http();

   export const publicClient = createPublicClient({
     chain: bsc,
     transport
   });

   export const ethereumClient = new EthereumClient(publicClient, chains);
