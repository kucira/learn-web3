import { ethers } from "ethers";
import { getSupabase } from "~/shared/libs/helpers";
import { NFT_TYPE } from "~/shared/types/nft-type";

import NFT from "../../../../artifacts/contracts/NFT.sol/NFT.json";
import Market from "../../../../artifacts/contracts/NFTMarket.sol/NFTMarket.json";
import { NFT_ADDRESS, NFT_MARKETPLACE_ADDRESS } from "../../constants/config";

const loadNfts = async () => {
  const provider = new ethers.providers.JsonRpcProvider();
  const tokenContract = new ethers.Contract(NFT_ADDRESS, NFT.abi, provider);
  const marketContract = new ethers.Contract(
    NFT_MARKETPLACE_ADDRESS,
    Market.abi,
    provider
  );

  const data = await marketContract.fetchMarketItems();

  const items = await Promise.all(
    data.map(async (i: NFT_TYPE) => {
      const tokenUri = await tokenContract.tokenURI(i.tokenId);
      const res = await fetch(tokenUri);
      if (!res.ok) throw new Error("Failed to fetch");

      const meta = await res.json();
      const price = ethers.utils.formatUnits(i.price.toString(), "ether");

      return {
        price,
        tokenId: i.tokenId.toNumber(),
        seller: i.seller,
        owner: i.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
      };
    })
  );

  return items;
};

const getImageBucket = async (path: string) => {
  // Use the JS library to create a bucket.
  const client = getSupabase();
  const { data, error } = await client.storage.from("assets").download(path);
  if (error) throw Error(error);

  return data;
};

export { loadNfts, getImageBucket };
