export function ShowPixel (pixel, i) {
    return (
        <div 
            className="pixel"
            key={i}
            style={{
                backgroundColor: pixel.color,
            }}
        />
    )
}