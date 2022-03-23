import { useState } from "react";
import { createItem } from "~/shared/api/mutation/nfts";

const useForm =  () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e : any) => {
    e.preventDefault();

    setIsLoading((prevState: any) => !prevState);
    const formData = new FormData(e.target);
    
    const form = {
      name: formData.get("asset-name") as string,
      description: formData.get("asset-desc") as string,
      price: formData.get("asset-price") as string,
      file: formData.get("asset-file") as any,
    };

    await createItem(form);
    setIsLoading((prevState: any) => !prevState);
  };

  return { handleSubmit, isLoading };
};

export default useForm;
