import React from 'react';
import Link from 'next/link';


<% if(answers.authentication === "nextauth" ) { %>
    import {signIn, signOut, useSession} from "next-auth/client";
    <% } %>

export const Navigation: React.FC = () => {
    <% if(answers.authentication === "nextauth" ) { %>
        const [session, loading] = useSession();
        <% } %>

    return (
        <div className="bg-gray-800">
            <div className="flex flex-row justify-between pt-5 pb-5 ml-3">
                <div className="flex">
                    <a href="#" className="text-white text-2xl mr-4">Company Logo</a>
                    <Link href="/"
                       className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium mr-2">Home</Link>
                    <a href="#"
                       className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Link</a>
                </div>
                <div className="mr-3 flex">
                   <% if (answers.authentication === "nextauth") { %>
                {!session &&
                    <Link href='/login'>
                    <span className="cursor-pointer bg-green-500 text-white align-middle white px-3 py-2 rounded-md text-sm font-medium">Login</span>
                    </Link>
                }
                {session &&
                    <>
                    <button onClick={signOut} className="cursor-pointer p-2 mr-2 rounded-md text-white">Logout</button>
                    <img src={session.user.image} className="bg-green-500 w-10 h-10 rounded-full"></img>
                    </>
                }
                    <% } %>
                </div>
            </div>
        </div>
    );
};


