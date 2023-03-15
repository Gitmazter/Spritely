export function CreatePixelMap (n) {
    // Creating array with n items representing rows to hold columns
    let pixelMap = new Array(n);
    // creating n arrays with n items representing columns
    for (let i = 0; i < n; i++) {
        pixelMap[i] = new Array(n);
    }
    return pixelMap;
}