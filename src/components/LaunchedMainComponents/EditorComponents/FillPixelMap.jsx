import { Pixel } from "./Pixel";


export function FillPixelMap (pixelMap, color, onClick) {
    console.log(pixelMap);
    return (
        <>
            {
                pixelMap.pixelMap.map((pixelRow, i ) => {
                    <div className="pixelRow" key={i}>
                        {pixelRow.map((pixel, j) => {
                            <div className="pixel" />
                            {/* <Pixel color={color} x={j} y={i} onClick={onClick} /> */}
                        })}
                    </div>
                })
            }
        </>
    )
}
