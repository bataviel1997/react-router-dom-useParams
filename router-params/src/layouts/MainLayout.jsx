import React from "react";

export default function MainLayout({children}){

    return(
        <main className="main-layout">

            <div className="content">
            { children }
            </div>
            
        </main>
    )
}