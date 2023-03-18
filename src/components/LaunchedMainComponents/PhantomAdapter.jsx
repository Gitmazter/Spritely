import React, { createContext, useEffect, useState } from "react";

export const PhantomContext = createContext(undefined);

export const getProvider = () => {
  try {
    if (!window) return;

    if ("phantom" in window) {
      // @ts-ignore
      const provider = window.phantom?.solana;

      if (provider?.isPhantom) {
        return provider;
      }
    }
  } catch (error) {
    console.error(error);
  }
};

const PhantomProvider = ({ children }) => {
  const [phantomContext, setPhantomContext] = useState(undefined);

  const handleSuccessfulConnection = (response) => {
    setPhantomContext({
      publicKey: response.publicKey,
      signAndSendTransaction: getProvider()?.signAndSendTransaction,
    });
  };

  /**
   * Will either automatically connect to Phantom, or do nothing
   */
  useEffect(() => {
    getProvider()
      ?.connect({ onlyIfTrusted: true })
      .then((response) => {
        handleSuccessfulConnection(response);
      })
      .catch(() => {
        // This is an eager connection. Do nothing.
      });
  }, []);

  /**
   * Handle disconnect events
   */
  useEffect(() => {
    getProvider()?.on("disconnect", () => {
      setPhantomContext(undefined);
    });
  }, []);


  const connect = async () => {
    const isPhantomInstalled = detectPhantom();
    if (isPhantomInstalled) {
      try {
        const resp = await getProvider()?.connect();

        handleSuccessfulConnection(resp);
      } catch (err) {
        if (err && err.code === 4001) {
          alert("Connection rejected");
          return;
        }

        alert();
      }

      return;
    }

    window.open("https://phantom.app/", "_blank");
  };

  const disconnect = async () => {
    const isPhantomInstalled = detectPhantom();
    if (isPhantomInstalled) {
      getProvider()?.disconnect();

      return;
    }
  };

  const detectPhantom = () => {
    try {
      if (!window) return false;

      // @ts-ignore
      return window.phantom?.solana?.isPhantom;
    } catch (error) {
      return false;
    }
  };

  return (
    <PhantomContext.Provider
      value={{
        connect,
        disconnect,
        detectPhantom,
        connected: !!phantomContext?.publicKey,
        ...phantomContext,
      }}
    >
      {children}
    </PhantomContext.Provider>
  );
};

export default PhantomProvider;