import { Web3Modal } from '@web3modal/react';
   import { ethereumClient, projectId } from '../config/wallet';

   function MyApp({ Component, pageProps }) {
     return (
       <>
         <Component {...pageProps} />
         <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
       </>
     );
   }

   export default MyApp;
