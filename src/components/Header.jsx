// Logo, wallet connect, start app
import { handleHeaderClick } from "./HeaderComponents/HandleHeaderClick"

export const Header = () => {
    return (
        <header className="header">
            <img src="logo192.png" alt="" id="headerLogo"></img>
            <h3>Spritely.io</h3>
            <button className="ixBtn" onClick={handleHeaderClick}>
                // button for launching app and connecting to wallet
            </button>
        </header>
    )

}