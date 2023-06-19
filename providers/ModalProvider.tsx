"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";

const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    //never render modal in server side to avoid hydration errors
    //none of the models can be opened during server side rendering

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if(!isMounted) {
        return null;
    }

    return ( 
        <>
            <AuthModal />
            <UploadModal />
        </>
     );
}
 
export default ModalProvider;