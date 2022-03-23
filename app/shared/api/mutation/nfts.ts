import Web3Modal from "web3modal";
import { ethers } from "ethers";
import NFT from "../../../../artifacts/contracts/NFT.sol/NFT.json";
import NFTMarket from "../../../../artifacts/contracts/NFTMarket.sol/NFTMarket.json";

import { NFT_ADDRESS, NFT_MARKETPLACE_ADDRESS } from "../../constants/config";
import { NFT_TYPE } from "~/shared/types/nft-type";
import { getSigner, getSupabase } from "~/shared/libs/helpers";

const buyNft = async (nft: NFT_TYPE) => {
  const signer = await getSigner();
  if (signer) {
    const contract = new ethers.Contract(
      NFT_MARKETPLACE_ADDRESS,
      NFTMarket.abi,
      signer
    );

    const price = ethers.utils.formatUnits(nft.price.toString(), "ether");

    const transaction = await contract.createMarketSale(
      NFT_MARKETPLACE_ADDRESS,
      nft.tokenId,
      {
        value: price,
      }
    );

    return transaction.wait();
  }
};

const createItem = async ({
  name,
  description,
  price,
  file,
}: {
  name: string;
  description: string;
  price: string;
  file: any;
}) => {
  const client = getSupabase();
  // upload to storage
  // const arrBuffer = await file.arrayBuffer();
  const res = await client.storage
    .from("assets")
    .upload(`public/${file.name}`, file, {
      cacheControl: "3600",
      contentType: file.type,
      upsert: false,
    });

  if (res.error) {
    return res.error;
  }

  const { publicURL } = client.storage
    .from("assets")
    .getPublicUrl(`public/${file.name}`);

  //todo create  item on blockchain and save the metadata
  const { tokenId, transactionRes }: any = await createSale(price, publicURL);

  // todo create item and save using supabase
  const { data, error } = await client.from("nfts").insert([
    {
      name,
      description,
      price,
      image: publicURL,
      tokenId,
      owner: transactionRes?.from,
    },
  ]);

  return { data, error };
};

const createSale = async (priceInput: string, url: any) => {
  const signer = await getSigner();

  if (signer) {
    let contract = new ethers.Contract(NFT_ADDRESS, NFT.abi, signer);

    let transaction = await contract.createToken(url);
    const tx = await transaction.wait();
    console.log(tx, "tx", transaction, "transaction");

    const event = tx.events[0];
    const value = event.args[2];
    const tokenId = value.toNumber();

    const price = ethers.utils.parseUnits(priceInput, "ether");
    contract = new ethers.Contract(
      NFT_MARKETPLACE_ADDRESS,
      NFTMarket.abi,
      signer
    );

    let listingPrice = await contract.getListingPrice();
    listingPrice = listingPrice.toString();

    transaction = await contract.createMarketItem(NFT_ADDRESS, tokenId, price, {
      value: listingPrice,
    });
    const transactionRes = await transaction.wait();
    return {
      tokenId,
      price,
      transactionRes,
    };
  }
};

export { buyNft, createItem };
