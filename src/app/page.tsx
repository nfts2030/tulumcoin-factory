"use client";

import { ConnectButton } from "thirdweb/react";
import { client } from "./client";
import { inAppWallet } from "thirdweb/wallets";
import { optimism } from "thirdweb/chains";
export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <ConnectButton 
      client={client}
      wallets={[
        inAppWallet({
          auth: {
            options: [
              "email",
              "google",
              "passkey",
              "guest",
            ]
          }
        })
      ]}
      accountAbstraction={{
        chain:optimism,
        sponsorGas: true,
      }}
      />
    </div>
  );
}
