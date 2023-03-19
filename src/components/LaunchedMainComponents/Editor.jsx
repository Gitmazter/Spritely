import { HexColorPicker } from "react-colorful";
import { Pixel } from "./Pixel";
import html2canvas from "html2canvas";
import React, { useState } from "react";
import useGetPhantomContext from "./useGetPhantomContext";
import { MintNoMeta } from "./EditorComponents/MintNoMeta";
import FileUpload from "./EditorComponents/Storer";
//import { Connection } from "@solana/web3.js";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { confirmTxn, Network, ShyftWallet } from '@shyft-to/js';
import { Connection, Transaction } from "@solana/web3.js";
import { Buffer } from "buffer";


export const Editor = () => {
    //var buffer = require('buffer-browserify')
    const { publicKey, connected, signAndSendTransaction, connect } = useGetPhantomContext();
    const [color, setColor] = useState("#FFFFFF");
    const nftRef = React.useRef();
    const wallet = useGetPhantomContext();
    const [nftTitle, setNftTitle] = useState("image");
    const [nftDesc, setNftDesc] = useState("nodescription")
    //const { connection } = useConnection();
    
    //const { signTransaction, signAllTransactions } = useWallet();


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

    function erase () {
        setColor("#FFFFFF");
    }

    function handleColorChange (e) {
        setColor(e);
    }

    function onClick (pixelMap, rowIndex, columnIndex, color) {
        let newPixelMap = pixelMap;
        newPixelMap[columnIndex][rowIndex] = color;
        setPixelMap(newPixelMap);
    }

    function handleClear () {
    }

    const handleDownloadImage = async () => {
        const element = nftRef.current;
        const canvas = await html2canvas(element);

        // Add input field for title
        const data = canvas.toDataURL(`${nftTitle}.png`);
        const link = document.createElement('a');

        if (typeof link.download === 'string') {
          link.href = data;
          link.download = 'image.png';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          window.open(data);
        }
    }

    function handleTitleChange (e) {
        setNftTitle(e.target.value);
    }

    function handleDescChange (e) {
        setNftDesc(e.target.value);
    }

    async function clickMint () {
        const element = nftRef.current;
        const canvas = await html2canvas(element);    
        const data = canvas.toDataURL('image/png', 1.0);

        var blobBin = atob(data.split(',')[1]);
        var array = [];
        for(var i = 0; i < blobBin.length; i++) {
        array.push(blobBin.charCodeAt(i));
        }
        var file=new Blob([new Uint8Array(array)], {type: 'image/png'});

        const transactionJSON = await MintNoMeta(file, nftTitle, nftDesc, publicKey, wallet);
        console.log(transactionJSON.result.encoded_transaction);
        confirmTransactionFromFrontend( transactionJSON.result.encoded_transaction, signAndSendTransaction) 
    }

    return (
        <div className="editor">  
            <div className="editorBtns">
                <input type="text" placeholder="title" onChange={handleTitleChange} />
                <br/>
                <br/>
                <input type="text" placeholder="description" onChange={handleDescChange} />
                <button className="editorBtn" onClick={() => {handleClear(pixelMap)}}>Clear</button>
                <button className="editorBtn" onClick={handleDownloadImage}>Download Design</button>
                <button className="editorBtn" onClick={connected ? clickMint : connect}>Mint</button>
            </div>

            <div className="pixelmap" ref={nftRef} style={{display:"flex", flexDirection:"row", height:"min-content"}}>
                {pixelMap.map((row, rowIndex) => (
                    <div style={{display: "flex", flexDirection: "column"}} key={rowIndex}>
                    {row.map((pixel, columnIndex) => (
                        <Pixel className="pixel" color={color} rowIndex={rowIndex} columnIndex={columnIndex} onClick={() => onClick(pixelMap, rowIndex, columnIndex, color)}/>
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
                <button onClick={erase} className="editorBtn">Eraser</button>
            </div>
        </div>
    )
}

async function confirmTransactionFromFrontend(encodedTransaction, wallet) {
    const connection = new Connection('https://api.mainnet-beta.solana.com');
    // console.log(encodedTransaction);
    const recoveredTransaction = Transaction.from(
        Buffer.from(encodedTransaction, 'base64')
    );
    const res = await wallet(recoveredTransaction);
    console.log(res);
    // const confirmTransaction = await connection.sendRawTransaction(
    //   signedTx.serialize()
    // );
    return res;
      
} 

