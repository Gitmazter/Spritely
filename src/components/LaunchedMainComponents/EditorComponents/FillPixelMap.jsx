import { Pixel } from "../../../models/Pixel";

export function FillPixelMap (pixelMap, n) {
    let filledPixelMap = pixelMap;
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            pixelMap[x][y] = new Pixel("#FFFFFF", x, y);
        }
    }
    return filledPixelMap;
}
