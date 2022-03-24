import React, { useMemo, useState } from "react";
import ModalContext from "./ModalContext";

type Props = {
  children: React.ReactElement[];
};

function ModalProvider({ children }: Props) {
  const [isShowModal, setIsShowModal] = useState(false);

  const provided: any = useMemo(
    () => ({
      isShowModal,
      setIsShowModal,
    }),
    [isShowModal]
  );

  return (
    <ModalContext.Provider value={provided}>{children}</ModalContext.Provider>
  );
}

export default ModalProvider;
