import React from 'react';
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {FaGithub} from "react-icons/fa6";
import {signIn} from "next-auth/react";

const Login = () => {
    return (
        <div className={"w-full h-screen"}>
            <div className={"absolute inset-0 "}>
                <Image
                    src={"https://repository-images.githubusercontent.com/299409710/b42f7780-0fe1-11eb-8460-e459acd20fb4"}
                    alt={"bg"}
                    fill
                />
            </div>
            <div
                className={"relative z-10 w-[600px] h-[50vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 rounded-[15px] px-8 py-4"}>
                <div className={"flex h-full items-center justify-center flex-col"}>
                    <Button
                        className={"mt-4 flex items-center gap-4"}
                        onClick={() => signIn("github")}
                    >
                        <FaGithub className={"w-6 h-6"}/>
                        Sing in with Github
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Login;
