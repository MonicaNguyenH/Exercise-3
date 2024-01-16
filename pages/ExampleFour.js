import { useState, useEffect } from "react"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function ExampleFour() {

    /**default template of useState
     * left - see what stored in the useSate : number is a variable that used to display or grab value from useState
     * right - update the useState : setNumber used to update the useState
    */
    const [number, setNumber] = useState(0); //initially start as the number 0
    const [color, setColor] = useState("gray"); //defaults as string of gray 
    //number and color dtarts of at 0 and gray

    const [trigger, setTrigger] = useState(false); //default as boolean false
    //boolean that starts at false

    //call this function -> see if its > 2
    const HandleChange = () => {
        if(number > 2) {
            setColor("orange");
            //change the color of the useState to orange 
            //set the right to change it 
        }
        console.log(number);
    }

    useEffect(() => {
        var interval;

        //now its checking
        //boolean (trigger) already tells if this is true or false -> doesnt need to fact check it
        if(trigger) {
            interval = setInterval(() => {
                HandleChange();
                setTrigger(false);
            }, 3000) //after 3 seconds then it will do the console log bellow
            //afer this interval is done -> goes back to false
        }

        //delay 3 seconds -> do the this after
        console.log(number);
        console.log(trigger);

        return() => clearInterval(interval); //clearing the interval so it doesnt get stuck in a loop
    }, [trigger])

    return (
        <>
        <Header/>
        <main>
            <button
            onClick={() => {
                setNumber(number + 1) //when clicked -> goes up by 1
                setTrigger(true) //when clicked -> goes to true
            }}>Add Number</button>

            <h1 style={{color: color}}>Changing the text color</h1>

            { //checking to see if the number greater than 1
            //only if the number greater than 1 -> display the box (show the div)
                number > 1 && <div style ={{
                    backgroundColor: `${color}`, //color from the useState 
                    //backgroundColor: color, - different way and purpose 
                    lineHeight: 10,
                    padding: 20
                }}>
                    Box
                </div>
            }
        </main>
        
        </>
    )
}