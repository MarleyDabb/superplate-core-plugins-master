import React from "react";
<% if(answers.authentication === "nextauth" ) { %>
    import {getProviders, signIn} from "next-auth/client";
    <% } %>

export const GoogleAuth: React.FC = ({provider}) => {

    return (
        <% if(answers.authentication === "nextauth" ) { %>
        <form onSubmit={submitHandler}>
            <button
                onClick={() => signIn(provider.id)}
                className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline mt-3"
                type="button"
            >Login with Google
            </button>
        </form>
        <% } else { %>
        <>
            <h1>Nextauth is not enabled on this project, you can delete this file</h1>
        </>
        <% } %>
    )
}

