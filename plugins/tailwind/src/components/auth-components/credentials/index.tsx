import React, {ProviderProps, useState} from "react";
import {ProviderType} from "next-auth/providers";
import {providers, signIn} from "next-auth/client";
import {useRouter} from "next/router";

<% if(answers.database === "mongodb" ) { %>
    async function createUser(email, password) {
        const response = await fetch('/api/auth/signup', {
            method: 'POST',
            body: JSON.stringify({email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Something went wrong');
        }

        return data;
    }
    <% } %>

export const Credentials: React.FunctionComponent = () => {
    const [emailAddress, setEmailAddress] = useState("");
    const [password, setPassword] = useState("");

    <% if (answers.database === 'mongodb') { %>
        const [isLogin, setIsLogin] = useState(true);
        const router = useRouter();

        function switchAuthModeHandler() {
            setIsLogin((prevState) => !prevState);
        }

        async function submitHandler(event) {
            event.preventDefault();

            if (isLogin) {
                const result = await signIn('credentials', {
                    redirect: false,
                    email: emailAddress,
                    password: password
                })

                if (!result.error) {
                    // Set auth state
                    await router.replace('/') // Redirects to profile page after login
                }

                console.log(result);
            } else {
                try {
                    const result = await createUser(emailAddress, password)
                    console.log(result);
                } catch(err) {
                    console.log(err);
                }
            }
        }

        <% } %>

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
                        onClick={submitHandler}>
                    Sign In
                </button>
            </div>
        </form>
    )

}
