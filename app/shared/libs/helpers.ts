import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { createClient } from "@supabase/supabase-js";
import { URL_SUPABASE, SK } from "../constants/config";

let supabase: any = null;

const isMetamaskAvailable = () => {
  if (typeof window.ethereum !== "undefined") {
    return true;
  }
  return false;
};

const getSigner = async () => {
  if (isMetamaskAvailable()) {
    console.log("MetaMask is installed!");
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();

    const provider = new ethers.providers.Web3Provider(connection);
    return provider.getSigner();
  }
  return new Promise((resolve) => resolve(null));
};

const getSupabase = () => {
  if (supabase) return supabase;

  return (supabase = createClient(URL_SUPABASE, SK));
};

export { getSigner, getSupabase, isMetamaskAvailable };
