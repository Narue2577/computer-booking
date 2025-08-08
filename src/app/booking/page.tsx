'use client'
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


export default function Booking() {
const [value] = useState(new Date());

    return (
        <>
        <div>
           
            <Calendar
                
                value={value}
            />
        </div>
       </>
    );  
};
