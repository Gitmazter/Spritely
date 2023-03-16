import { HexColorPicker } from "react-colorful";
import { Pixel } from "./Pixel";
import html2canvas from "html2canvas";
import React, { useState } from "react";


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

    const nftRef = React.useRef();
    const [nftTitle, setNftTitle] = useState("image");

    function erase () {
        setColor("#FFFFFF");
    }

    function handleColorChange (e) {
        console.log(e);
        setColor(e);

    }

    function onClick (pixelMap, rowIndex, columnIndex, color) {
        let newPixelMap = pixelMap;
        newPixelMap[columnIndex][rowIndex] = color;
        setPixelMap(newPixelMap);
    }

    const handleDownloadImage = async () => {
        const element = nftRef.current;
        const canvas = await html2canvas(element);

        // Add input field for title
        const data = canvas.toDataURL(`${nftTitle}.png`);
        const link = document.createElement('a');

        if (typeof link.download === 'string') {
          link.href = data;
          link.download = 'image.jpg';
    
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          window.open(data);
        }
    }


    function handleClear () {
        console.log("clear here");
    }

    function clickMint () {
        console.log("Mint here");
    }

    return (
        <div className="editor">  

            <div className="editorBtns">
                <button className="editorBtn" onClick={handleClear}>Clear</button>
                <button className="editorBtn" onClick={handleDownloadImage}>Download Design</button>
                <button className="editorBtn" onClick={clickMint}>Mint</button>
            </div>

            <div className="pixelmap" ref={nftRef} style={{display:"flex", flexDirection:"row", height:"min-content"}}>
                {pixelMap.map((row, rowIndex) => (
                    <div style={{display: "flex", flexDirection: "column"}} key={rowIndex}>
                    {row.map((pixel, columnIndex) => (
                        <Pixel color={color} rowIndex={rowIndex} columnIndex={columnIndex} onClick={() => onClick(pixelMap, rowIndex, columnIndex, color)}/>
                    ))}
                    </div>
                ))}
            </div>

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