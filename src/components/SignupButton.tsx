"use client"
import { Button } from "@/components/ui/button"
import { signIn } from "next-auth/react";

function SignupButton() {
    return <>
        <Button variant="destructive" onClick={() => {

            signIn('google', { callbackUrl: process.env.NEXT_PUBLIC_URL });
        }}>

            Sing Up

        </Button>
    </>
}

export default SignupButton;