import useGetPhantomContext from "../useGetPhantomContext";


export async function MintNoMeta (imgUrl, title, description, address, wallet) {
    const devPubKey = "8G46LehJsszbjes5cUZ3M1kXrumiBre2cyRN22opo9HE"
    //const imgUrl = await axios.get('https://www.arweave.net/GZtct3fpYUlB9ZT92SMkVEp7TUvLlFV-kke4f5I5D9E?ext=jpg', { responseType: 'stream' });
    console.log(address.toString());
    var myHeaders = new Headers();
    myHeaders.append("x-api-key", "5zWjeguNLeyZMR85");
    //myHeaders.append("Content-Type", "multipart/form-data");
    console.log(imgUrl);

    var formdata = new FormData();
    formdata.append("network", "mainnet-beta");
    formdata.append("creator_wallet", address.toString());
    formdata.append("name", title);
    formdata.append("symbol", "SLY");
    formdata.append("description", description);
    formdata.append("attributes", "[ {    \"trait_type\": \"Designed and minted at:\",    \"value\": \"Spritely.fun\"  }]");
    formdata.append("max_supply", 0);
    formdata.append("royalty", 5);  
    formdata.append("image", imgUrl, 'hello');
    formdata.append('service_charge', JSON.stringify({ "receiver": devPubKey,  "amount": 0.01}));
    
    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: formdata,
    //redirect: 'follow'
    };

    const result = fetch("https://api.shyft.to/sol/v2/nft/create", requestOptions)
    .then(response => response.text())
    .then(result => {return result})
    .catch(error => console.log('error', error));

    const parsedResult = JSON.parse(await result);
    return await parsedResult;
}
