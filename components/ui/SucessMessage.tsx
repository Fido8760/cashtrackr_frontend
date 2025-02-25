import { ReactNode } from "react";

export default function SuccessMEssage({children}: {children: ReactNode}) {
    return (
        <p className=" text-center my-4 bg-amber-500 text-white font-bold p-3 text-sm">{children}</p>
    )
}
