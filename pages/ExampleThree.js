import { useState, useEffect } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function ExampleThree() {
    //cant be redeclared / reassigned
    const [number, setNumber] = useState(0);

    const colors = ["red", "orange", "yellow", "green", "blue", "violet"];

    useEffect(() => {
        //length of  an array 
        // 5 = violet  > colors.length = 6 - 1 = 5
        
        //if(number >= colors.length)
        if(number > colors.length -1) {
            setNumber(0);
            console.log("changing number value :" + colors[0]);
        } else {
            console.log("changing number value :" + colors[number]);
        }
    },[number])

    return (
        <>
            <Header/>
            <main>
                <h1>Example 3</h1>

                <button 
                    style={{backgroundColor: colors[number]}} 
                    onClick={() => setNumber(number + 1)}>
                        Increment Number
                </button>
                <div>
                    {number}
                </div>
            </main>
            <Footer/>
        </>
    )
}

/*
    useEffect(() => {
        if(color === "red" || color === "green" ) {
            setHoliday("Christmas");
        } else {
            setHoliday("no holiday today");
        }
        
    }, [color])
    //only run when the useState of the color changes
\

if(loopvariable = arrayLength){
  set loopVariable = 0
}
*/