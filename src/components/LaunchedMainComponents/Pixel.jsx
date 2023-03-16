import { useState } from "react"

export const Pixel = (props) => {

    const [color, setColor] = useState("#FFFFFF");
    
    function handleClick () {
        setColor(props.color);
        props.onClick();
    }

    return (
        <>
            <div style={{backgroundColor:color}} className="pixel" onClick={handleClick} id={`${props.rowIndex} - ${props.columnIndex}`}/>
        </>
    )
}