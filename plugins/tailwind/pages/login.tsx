import React from 'react';
import {Credentials} from "@components";



const LoginPage: React.FC = () => {
    return (
        <>
            <div className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4 flex flex-col container mx-auto w-5/12 mt-12 mb-12">
                <Credentials/>
            </div>
        </>
    );
};

export default LoginPage;

