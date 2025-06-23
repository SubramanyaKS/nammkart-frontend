import React from "react";

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="flex justify-center bg-white h-screen items-center">
            <div className="w-full max-w-md blue-shadow border border-blue-600 p-8  rounded-lg shadow-2xl">
                {children}
            </div>  
        </main>
    );
}