import {
    unstable_createFileUploadHandler,
    unstable_parseMultipartFormData,
  } from "remix";
import { createItem } from "~/shared/api/mutation/nfts";

const uploadHandler = unstable_createFileUploadHandler({
  maxFileSize: 5_000_000,
  file: ({ filename }) => filename,
});

export const uploadItem = async (request: Request) => {
  const formData = await unstable_parseMultipartFormData(
    request,
    uploadHandler
  );

  const form = {
    name: formData.get("asset-name") as string,
    description: formData.get("asset-desc") as string,
    price: formData.get("asset-price") as string,
    file: formData.get("asset-file") as any,
  };

  const { data, error } = await createItem(form);
  if (error) {
    throw Error(error);
  }
  return data;
};
