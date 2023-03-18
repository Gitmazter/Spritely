// Logo, wallet connect, start app
import { handleHeaderClick } from "./HeaderComponents/HandleHeaderClick"
import useGetPhantomContext from "./LaunchedMainComponents/useGetPhantomContext";



export const Header = () => {
    const {connect, publicKey, connected, disconnect} = useGetPhantomContext();

    const handleConnect = () => {
        if (connected) {
            disconnect();
            return;
        } 
        connect();
    }   
    
    return (
        <header className="header">
            <img src="logo192.png" alt="" id="headerLogo"></img>
            <h3>Spritely.fun</h3>
            <button className="ixBtn" onClick={handleConnect}>
                {connected ? publicKey.toString() : "Connect"}
            </button>
        </header>
    )

}