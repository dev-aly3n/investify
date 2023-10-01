import '../styles/globals.css';
import '@rainbow-me/rainbowkit/styles.css';
import type { AppProps } from 'next/app';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import {
  arbitrum,
  goerli,
  mainnet,
  optimism,
  polygon,
  base,
  zora,
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    zora,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);



const wagmiConfig = createConfig(getDefaultConfig({
walletConnectProjectId:"gujh876lkasjd",
  // Required
  appName: "investiiify",

  // Optional
  appDescription: "Your App Description",
  appUrl: "https://family.co", // your app's url
  appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
}));

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <ConnectKitProvider>
        <Component {...pageProps} />
        </ConnectKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
