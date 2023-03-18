import useGetPhantomContext from "../useGetPhantomContext";


export default function MintNoMeta (imgUrl, title, description, address) {
    const devPubKey = "8G46LehJsszbjes5cUZ3M1kXrumiBre2cyRN22opo9HE"
    console.log(imgUrl);

    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "5zWjeguNLeyZMR85");
    myHeaders.append("Content-Type", "multipart/form-data");

    var formdata = new FormData();
    formdata.append("network", "devnet");
    formdata.append("wallet", address.toString());
    formdata.append("name", title);
    formdata.append("symbol", "SLY");
    formdata.append("description", description);
    formdata.append("attributes", "[ {    \"trait_type\": \"Designed and minted at:\",    \"value\": \"Spritely.fun\"  }]");
    formdata.append("external_url", "https://spritely.fun");
    formdata.append("max_supply", "0");
    formdata.append("royalty", "5");
    formdata.append("file", imgUrl);
    formdata.append('service_charge', `{ "receiver": ${devPubKey},  "amount": 0.01}`);
    
    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    redirect: 'follow'
    };

    fetch("https://api.shyft.to/sol/v1/nft/create_detach", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
