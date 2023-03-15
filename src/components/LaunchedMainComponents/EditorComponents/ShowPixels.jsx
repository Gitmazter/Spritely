import { ShowPixel } from "./ShowPixel";

export function ShowPixels ({filledPixelMap}) {
    const pixels = filledPixelMap.map((pixelRow, i) => {

        const rowHtml = pixelRow.map((pixel, j) =>{
            return ShowPixel(pixel, j);
        })
        //console.log(rowHtml);
        return(
            <div className="pixelRow" key={i}>
                {rowHtml}
            </div>
        ) 
    })
    return (
        <>{pixels}</>
    )
}