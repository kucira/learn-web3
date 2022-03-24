import React from "react";

const ModalContext = React.createContext({
    isShowModal: false,
    setIsShowModal: (state: any) => {}
});

export default ModalContext;
