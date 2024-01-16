import { useState, useEffect } from "react"
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ExampleFive() {

//we want to set up a counter 
//after every second, the number increases by 1
//we want to display that number on screen as it increases
//no button is needed it will up to date automatically

    const [count, setCounter] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(count + 1);
        }, 1000);

            return() => clearInterval(interval);
        }, [count])

/*

        var interval;

        interval = setCounter(() => {
            setCounter(counter + 1)
        })
    }, 1000)

*/

    return (
        <>
            <main>
                <h1>Number Counter</h1>
                <h3>Example using interval</h3>
                <div>{count}</div>
            </main>
        </>
    )
}