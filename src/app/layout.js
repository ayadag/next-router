import { WalletConnectProvider } from '../components/WalletConnectProvider'
//import '../styles/global.css'
import '@solana/wallet-adapter-react-ui/styles.css'

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WalletConnectProvider>
        {children}
        </WalletConnectProvider>
        </body>
    </html>
  );
}
