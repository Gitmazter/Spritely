import { useState } from "react"

export const Pixel = (color2) => {

    const [color, setColor] = useState("#FFFFFF");
    
    function handleClick () {
        setColor(color2.color);
    }

    return (
        <>
            <div style={{backgroundColor:color}} className="pixel" onClick={handleClick} />
        </>
    )
}