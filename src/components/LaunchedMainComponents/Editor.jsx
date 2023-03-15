import { useState } from "react";
import { HexColorPicker } from "react-colorful";
import { Pixel } from "./Pixel";

export const Editor = () => {

    const [pixelMap, setPixelMap] = useState([
        ["#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF"],
        ["#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF"],
        ["#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF"],
        ["#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF"],
        ["#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF"],
        ["#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF"],
        ["#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF"],
        ["#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF"],
        ["#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF"],
        ["#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF"],
        ["#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF"],
        ["#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF"],
        ["#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF"],
        ["#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF"],
        ["#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF"],
        ["#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF", "#FFF", "#FFF","#FFF"],
    ]);

    const [color, setColor] = useState("#FFFFFF");

    function erase () {
        setColor("#FFFFFF");
    }

    function handleColorChange (e) {
        console.log(e);
        setColor(e);
    }

    return (
        <div className="editor">  

            <div className="editorBtns">
                <button className="editorBtn">Clear</button>
                <button className="editorBtn">Save</button>
                <button className="editorBtn">Mint</button>
            </div>

            {pixelMap.map((row, rowIndex) => (
                <div style={{display: "flex", flexDirection: "column"}} key={rowIndex}>
                {row.map((pixel, columnIndex) => (
                    <Pixel color={color} key={`${rowIndex} - ${columnIndex}`} />
                ))}
                </div>
            ))}

            <div className="editorTools">
                <p style={{
                    color: "#FFFFFF",
                }}>Select Color</p>
                <HexColorPicker color={color} onChange={handleColorChange} />
                <br/>
                <button onClick={erase}>Eraser</button>
            </div>
            
        </div>
    )
}