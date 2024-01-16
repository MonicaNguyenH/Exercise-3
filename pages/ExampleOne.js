import { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleOne() {
    const [number, setNumber] = useState(0);

    /**usually, thi swill cuas ena infinite loop so its best not to do this
     * incase your code break 
     * code on pages will run two times. once to render what we want and another is to render 
     * strict mode to find any common bugs
     */

    useEffect(() => {
        console.log(number);
    }) 
    //infinite loop without the [] at the end
    
    return (
        <>
            <Header/>
            <main>
                <h1>Example 1</h1>
                <div>Infinite Loop</div>
                {number}
            </main>
            <Footer/>
        </>
    )
}