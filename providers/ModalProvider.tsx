"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";

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
        </>
     );
}
 
export default ModalProvider;