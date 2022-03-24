import { useContext, useState } from "react";
import { createItem } from "~/shared/api/mutation/nfts";
import ModalContext from "~/shared/libs/ModalContext";

const useForm = () => {
  const modalContext = useContext(ModalContext);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setIsLoading((prevState: any) => !prevState);
    const formData = new FormData(e.target);

    const form = {
      name: formData.get("asset-name") as string,
      description: formData.get("asset-desc") as string,
      price: formData.get("asset-price") as string,
      file: formData.get("asset-file") as any,
    };

    const { error } = await createItem(form);
    if (error?.includes("not found")) modalContext.setIsShowModal(true);

    setIsLoading((prevState: any) => !prevState);
  };

  return { handleSubmit, isLoading };
};

export default useForm;
