function EditorBtns (props) {
    return (
        
        <div className="editorBtns">
            <button className="editorBtn" onClick={clickClear}>Clear</button>
            <button className="editorBtn" /* onClick={clickSave} */>Save</button>
            <button className="editorBtn" /* onClick={clickMint} */>Mint</button>
        </div>

    )
}