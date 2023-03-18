import useGetPhantomContext from "../useGetPhantomContext";

export async function Mint (uri) {
    const wallet = useGetPhantomContext;
    const apiUrl =  "https://api.shyft.to/sol/v1/nft/create_from_metadata";
    const apiKey = "5zWjeguNLeyZMR85"
    const nftUri = uri;
    const devPubKey = "8G46LehJsszbjes5cUZ3M1kXrumiBre2cyRN22opo9HE"

    var myHeaders = new Headers();
    myHeaders.append("x-api-key", apiKey);
    myHeaders.append("Content-Type", "application/json");
    console.log(uri);
    var raw = JSON.stringify({
    "network": "devnet",
    "metadata_uri": nftUri,
    "max_supply": 1,
    "collection_address": "AmeH6zUfie2gkFrT7ZZJcimsCCMhtk8PtTKD3Yxitvs5",
    "receiver": wallet.publicKey,
    "fee_payer": wallet.publicKey,
    "service_charge": {
        "receiver": devPubKey,
        "token": "1C3n35poNbm2di6W8YTKjG2BmhaFxmTtbScy1ox2xvY",
        "amount": 0.01
    }
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch(apiUrl, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}