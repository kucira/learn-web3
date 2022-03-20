import Web3Modal from "web3modal";
import { ethers } from "ethers";
import { createClient } from '@supabase/supabase-js'
import { URL_SUPABASE, SK } from "../constants/config";

let supabase: any = null;
const getSigner = async () => {
  const web3Modal = new Web3Modal();
  const connection = await web3Modal.connect();

  const provider = new ethers.providers.Web3Provider(connection);
  const signer = provider.getSigner();

  return signer;
};

const getSupabase = () => {
  if(supabase) 
    return supabase;
    
  supabase = createClient(URL_SUPABASE, SK);
}

export { getSigner, getSupabase };
