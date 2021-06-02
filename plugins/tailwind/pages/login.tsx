import React from 'react';
<% if(answers.authentication === "nextauth" ) { %>
    import {Credentials, GoogleAuth} from "@components";
    import {getProviders} from "next-auth/client";
<% } %>




const LoginPage: React.FC = ({providers}) => {
    return (
        <% if(answers.authentication === "nextauth" ) { %>
        <>
            <div className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 flex flex-col container mx-auto w-5/12 mt-12 mb-12">
                <Credentials/>
                <hr className='mt-3 mb-2'/>
            <% if(answers.providers.length > 0 ) { %>
                <h1 className="text-center">Or Login using a different provider</h1>
                <% if(answers.providers.includes('google')) { %>
                    <GoogleAuth provider={providers.google}/>
                <% } %>
            <% } %>
            </div>
        </>
        <% } else { %>
        <>
            <h1>Next Auth is disabled, this file can be deleted</h1>
        </>
        <% } %>
    );
};

<% if(answers.authentication === "nextauth" ) { %>
    export async function getServerSideProps(context){
        const providers = await getProviders()
        return {
            props: { providers }
        }
    }
<% } %>

export default LoginPage;

