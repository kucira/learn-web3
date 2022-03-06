import Web3Modal from "web3modal";
import { ethers } from "ethers";
import NFT from "../../../../artifacts/contracts/NFT.sol/NFT.json";
import NFTMarket from "../../../../artifacts/contracts/NFTMarket.sol/NFTMarket.json";

import { NFT_ADDRESS, NFT_MARKETPLACE_ADDRESS } from "../../constants/config";
import { NFT_TYPE } from "~/shared/types/nft-type";
import { getSigner } from "~/shared/libs/helpers";

const buyNft = async (nft: NFT_TYPE) => {
  const signer = await getSigner();
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

  return await transaction.wait();
};

const createItem = async ({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price: number;
}) => {
  // todo create item and save using supabase
};

const createSale = async (url: any) => {
  const signer = await getSigner();
  const contract = new ethers.Contract(NFT_ADDRESS, NFT.abi, signer);

  const transaction = await contract.createToken(url);
};

export { buyNft };
