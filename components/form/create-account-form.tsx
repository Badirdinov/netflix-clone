"use client"
import {useForm} from "react-hook-form";
import * as z from "zod";
import {createAccountSchema} from "@/lib/validation";
import {zodResolver} from "@hookform/resolvers/zod";
import {inflate} from "zlib";

const CreateAccountForm = () => {


    const form = useForm<z.infer<typeof createAccountSchema>>({
        resolver: zodResolver(createAccountSchema),
        defaultValues: {
            name: '',
            pin: ""
        }
    })

    const {isValid, isSubmitting} = form.formState

    async function onSubmit(values: z.infer<typeof createAccountSchema>) {
        console.log(values)
    }

    return (
        <>
            <h1 className={"text-white text-center font-bold text-3xl"}>
                Create your Account
            </h1>
            <div className={"w-full h-[2px] bg-slate-500/20 mb-4"}/>
        </>
    );
};

export default CreateAccountForm;
