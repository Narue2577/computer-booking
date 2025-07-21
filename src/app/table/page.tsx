'use client'


import { useState } from "react";



export default function Table() {
    const [title, setTitle] = useState("Welcome to Cosci");
    const currentYear = <p>2025</p>
    const handleClick = () => {
        //alert('Hello TypeScript');
        setTitle('Welcome to SWU');
    }
    return(
        <>
          
        </>
    );

}