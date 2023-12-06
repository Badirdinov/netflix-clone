import React, {Dispatch, SetStateAction} from "react";

export interface IContextType {
    account: IAccountProps | null
    setAccount : Dispatch<SetStateAction<IAccountProps | null>>
}

export interface IAccountProps {
    _id: string
    uid: string
    name: string
    pin: string
}

export interface IChildProps {
    children: React.ReactNode
}