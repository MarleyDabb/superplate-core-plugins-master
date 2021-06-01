import React, {ProviderProps, useState} from "react";
import {ProviderType} from "next-auth/providers";
import {providers, signIn} from "next-auth/client";


// interface CredentialsProps {
//     provider: ProviderType;
//     submitHandler(provider: string, payload: Record<string, string>)
// }

export const Credentials: React.FunctionComponent = () => {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    const providersArray = providers ? Object.values(providers) : [];
    const emailPasswordProvider = providersArray.find(provider => provider.type === "credentials");

    const submitHandler = async (provider: string, payload: Record<string, string>) => {
        await signIn(provider, payload)
    }

    // const keyDownHandler = (e: React.KeyboardEvent<HTMLFormElement>) => {
    //
    // }

    return (
        <form onSubmit={submitHandler}>
            <div className="mb-4">
                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="email">
                    Email Address
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email"
                       type="email" placeholder="Email" name={'email'} value={emailAddress} onChange={e => setEmailAddress(e.target.value)}
                       autoComplete={'email'} required
                />
            </div>
            <div className="mb-6">
                <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
                    id="password" type="password" placeholder="Enter a password" name={'password'} value={password}
                    autoComplete={'current-password'} required onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button"
                        onClick={() => {
                            submitHandler("email-password-auth", {
                                emailAddress,
                                password
                            })}}>
                    Sign In
                </button>
            </div>
        </form>
    )

}
