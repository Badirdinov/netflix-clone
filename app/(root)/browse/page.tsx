"use client"
import {useGlobalContext} from "@/context";
import Login from "@/components/shared/login";
import {useSession} from "next-auth/react";
import ManageAccount from "@/components/shared/manage.account";

const BrowsePage = () => {

    const {account} = useGlobalContext()


    const {data: session} = useSession()

    if(session === null) return <Login/>
    if(account === null) return <ManageAccount/>


    console.log(session)

    return (
        <div>
            Browse Page
        </div>
    );
};

export default BrowsePage;
