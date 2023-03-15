import { useState } from "react";
/* import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css"; */
import { CreatePixelMap } from "./EditorComponents/CreatePixelMap";
import { FillPixelMap } from "./EditorComponents/FillPixelMap";
import { ShowPixels } from "./EditorComponents/ShowPixels";
import { HexColorPicker } from "react-colorful";




export const Editor = () => {

    const size = 16;

    const pixelMap = CreatePixelMap(size);

    const filledPixelMap = FillPixelMap(pixelMap, size);

    const [color, setColor] = useState("#aabbcc");

    function erase () {
        setColor("#FFFFFF")
    }

    return (
        <div className="editor">  
            <div className="editorBtns">
                <button className="editorBtn">Clear</button>
                <button className="editorBtn">Save</button>
                <button className="editorBtn">Mint</button>
            </div>
            <div className="pixelSheet" id="pixelSheet">
                <ShowPixels filledPixelMap={filledPixelMap} />
            </div>
            <div className="editorTools">
                <p style={{
                    color: "#FFFFFF",
                }}>Select Color</p>
                <HexColorPicker color={color} onChange={setColor} />
                <br/>
                <button onClick={erase}>Eraser</button>
            </div>
            
        </div>
    )
}