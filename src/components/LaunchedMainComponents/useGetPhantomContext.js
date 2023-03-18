import { useContext } from "react";

import { PhantomContext } from "./PhantomAdapter";

const error =
  "Seems like PhantomContext is not defined but that should never be the case, since we are gracefully handling Error and Loading states.";

const useGetPhantomContext = () => {
  const results = useContext(PhantomContext);
  if (!results) throw new Error(error);

  const {
    connect,
    disconnect,
    detectPhantom,
    publicKey,
    connected,
    signAndSendTransaction,
  } = results;

  return {
    connect,
    disconnect,
    detectPhantom,
    publicKey,
    connected,
    signAndSendTransaction,
  };
};

export default useGetPhantomContext;