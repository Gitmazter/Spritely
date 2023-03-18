// Logo, wallet connect, start app
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
            <div id="brandDiv">
                <img src="favicon.png" alt="" id="headerLogo"></img>
                <h3>Spritely</h3>
            </div> 
            <button className="ixBtn" onClick={handleConnect}>
                {connected ? publicKey.toString() : "Connect"}
            </button>
        </header>
    )

}