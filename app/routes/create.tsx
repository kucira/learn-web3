import type { ActionFunction } from "remix";
import { uploadItem } from "~/features/create-asset/hooks/submit.server";
import CreateMobile from "~/features/create-asset/ui/CreateMobile";

export const action: ActionFunction = async ({ request }: any) => {
  return await uploadItem(request)
};

export default function CreateAsset() {
  return <CreateMobile />;
}
