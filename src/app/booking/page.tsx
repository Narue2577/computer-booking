
'use client'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React, { useState } from 'react';
import CountCartItem from '../components/CountCartItem';
import { Button } from '@/components/ui/button';

interface TableProps {
  usernameTab?: string; // Prop for the <th> content
  roomTab?: string[]; // Prop for the <th> content
  seatTab?: string; // Prop for the <th> content

}



export default function Booking({ usernameTab, roomTab, seatTab }: TableProps) {
    const eatRoom = ['4D', '5E','6F','7G'];
    const [rows, setRows] = useState([
        {
            id: eatRoom.length + 1,
            username: 'Eatery',
            room: 'Room801',
            seat: eatRoom[eatRoom.length],
            dateIn: '2025-07-30 17:10:37',
            dateOut: '2025-07-31 17:10:37'
        }
    ]);

    const addRow = () => {
        const newRow = {
            id: rows.length + 1, // Auto-increment ID
            username: '',
            room: '',
            seat: eatRoom[rows.length],
            dateIn: '',
            dateOut: ''
        };
        setRows([...rows, newRow]);
    };

    return (
          <>
            <div><CountCartItem /></div>
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
                        {rows.map((row, index) => (
                            <TableRow key={index} onChange={addRow}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{usernameTab || row.username}</TableCell>
                                <TableCell>{roomTab || row.room }</TableCell>
                                <TableCell>{seatTab || row.seat}</TableCell>
                                <TableCell><input type="date" name="datein" required  /> <input type="time" name="datein2" required  /></TableCell>
                                <TableCell><input type="date" name="dateout" required /> <input type="time" name="dateout2" required  /></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className='flex flex-row'>
               {/* <Button onClick={addRow} className='bg-green-500'>Add Row</Button> */}
                <Button className='bg-blue-400'>Back</Button>
                <Button className='bg-red-500'>Submit</Button>
                </div>
            </div>
        </>
    ); 
};

{/*import React, { useState } from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, Button } from './your-component-library'; // Adjust imports based on your UI library

const MyTableComponent = () => {
    const [rows, setRows] = useState([
        {
            id: 1,
            username: 'Eatery',
            room: 'Room801',
            seat: '4C',
            dateIn: '2025-07-30 17:10:37',
            dateOut: '2025-07-31 17:10:37'
        }
    ]);

    const addRow = () => {
        const newRow = {
            id: rows.length + 1, // Auto-increment ID
            username: '',
            room: '',
            seat: '',
            dateIn: '',
            dateOut: ''
        };
        setRows([...rows, newRow]);
    };

    return (
        <>
            <div><CountCartItem /></div>
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
                        {rows.map((row, index) => (
                            <TableRow key={index}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.username}</TableCell>
                                <TableCell>{row.room}</TableCell>
                                <TableCell>{row.seat}</TableCell>
                                <TableCell>{row.dateIn}</TableCell>
                                <TableCell>{row.dateOut}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className='flex flex-row'>
                    <Button onClick={addRow} className='bg-green-500'>Add Row</Button> {/* Button to add rows
                </div>
                <Button className='bg-blue-400'>Back</Button>
                <Button className='bg-red-500'>Submit</Button>
            </div>
        </>
    );
};

export default MyTableComponent; */}