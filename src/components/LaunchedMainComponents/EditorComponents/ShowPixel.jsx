export function ShowPixel (pixel, i) {
    return (
        <div 
            className="pixel"
            onClick={handleClick}
            key={i}
            style={{
                backgroundColor: pixel.color,
            }}
        />
    )
}