"use client"
import React, {useState} from "react"


export default function Datepickerhtml() {
    return(
        <>
        <div className="w-1/3 p-8 ml-20 bg-white rounded-lg"> 
           <label htmlFor="meeting-time">Choose a time for your appointment:</label>

<input
  type="datetime-local"
  id="meeting-time"
  name="meeting-time"
  value="2018-06-12T19:30"
  min="2018-06-07T00:00"
  max="2018-06-14T00:00" />

        </div>
        </>
    )
   
}