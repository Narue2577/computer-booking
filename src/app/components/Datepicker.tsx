"use client"
import React, {useState} from "react"
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css"

export default function Datepicker() {
    return(
        <>
        <div> 
            <Datetime value={new Date()} input={true} className="px-2 py-3 rounded appearance-none shadow-border text-gray-darker" />
            

        </div>
        </>
    )
   
}