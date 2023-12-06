'use client'

import {createContext, useContext, useState} from "react";
import {IAccountProps, IChildProps, IContextType} from "@/types";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

export const Context = createContext<IContextType | null>(null)
const GlobalContext = ({children} : IChildProps) => {
    const [account, setAccount] = useState<IAccountProps | null>(null)

    return (
        <div>
            <Context.Provider value={{account, setAccount}}>
                {children}
            </Context.Provider>
        </div>
    );
};

export default GlobalContext;

export const useGlobalContext = () => {
    const context = useContext(Context);
    if(context === null) {
        throw new Error("useGlobalContext must be used within a GlobalContext")
    }
    return context
}
