"use client";

import { BounceLoader } from "react-spinners";

import Box from "@/components/Box";

const Loading = () => {
    return (
        <Box className="h-full flex items-center justify-center">
            <div>
                <BounceLoader color="#22c55e" size={40} />
            </div>
        </Box>
    )
}

export default Loading;