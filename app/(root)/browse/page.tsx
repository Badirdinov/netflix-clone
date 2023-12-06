"use client"
import {useGlobalContext} from "@/context";
import Login from "@/components/shared/login";

const BrowsePage = () => {

    const {account} = useGlobalContext()

    if(account === null) return <Login/>

    return (
        <div>
            Browse Page
        </div>
    );
};

export default BrowsePage;
