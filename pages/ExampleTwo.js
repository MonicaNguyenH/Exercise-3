import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleTwo() {

    /** the [] 
     * this smake susre the useEffect only runs once on the page load
     * code on pages will run two times. once to render what we want and another is to render 
     * strict mode to find any common bugs
    */
    useEffect(() => {
        console.log("run")
    //"run" 2 times in the console inspect cause the webpage runs 2 times
    }, [])
    
    return (
        <>
            <Header/>
            <main>
                <h1>Example 2</h1>
            </main>
            <Footer/>
        </>
    )
}