'use client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React, { useState } from 'react';
import CountCartItem from '../components/CountCartItem';
import { Button } from '@/components/ui/button';




export default function Booking() {


    return (
        <>
        <div><CountCartItem/></div>
        <div>
           <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Username</TableHead>
                    <TableHead>Room</TableHead>
                    <TableHead>Seat</TableHead>
                    <TableHead>Date-In</TableHead>
                    <TableHead>Date-Out</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Eatery</TableCell>
                    <TableCell>Room801</TableCell>
                    <TableCell>4C</TableCell>
                    <TableCell>2025-07-30 17:10:37</TableCell>
                    <TableCell>2025-07-31 17:10:37</TableCell>

                </TableRow>
                <TableRow>
                <TableCell>
                
                </TableCell>
                </TableRow>
            </TableBody>
           </Table>
           <div className='flex flex-row'></div>
           <Button className='bg-blue-400'>Back</Button>
           <Button className='bg-red-500'>Submit</Button>

        </div>
       </>
    );  
};
