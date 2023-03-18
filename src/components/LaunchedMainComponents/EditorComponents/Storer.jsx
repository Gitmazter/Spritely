import { NFTStorage } from 'nft.storage';
import useGetPhantomContext from '../useGetPhantomContext';
import { Mint } from './Mint';

async function getImg (imgUrl) {
    const r = await fetch(imgUrl);
    //window.open(imgUrl)

    if (!r.ok) {
        throw new Error(`error fetching image: [${r.statusCode}]: ${r.status}`)
    }
    else {
        return r.blob();
    }
}

export async function Store (imgUrl, title, description) {
    //add to .env later
    const NFT_STORAGE_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDZCYzAzNWZDMWZEOWRhOWQ2ZkNiMGM0NDJBNDNFY2FmNWYwQWFGQkIiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3OTAyNjY4NDAxMiwibmFtZSI6InNwcml0ZWx5In0.1evygK63md0KaLqKuJnXnAJrhAmX7R-7075kwUWfyIg'

    const image = await getImg(imgUrl);

    const nft = {
        image,
        name: title,
        description: description,
    }

    console.log(nft);
    const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });
    const metadata = await client.store(nft);

    console.log('NFT data stored!');
    console.log('Metadata URI: ', metadata.url);

    // Mint function goes here
    Mint(metadata.url);

}