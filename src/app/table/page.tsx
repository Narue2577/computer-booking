'use client'

import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface TableRowType {
  id: number
  username: string
  room: string
  seat: string
  date_in: Date
  date_out: Date
}

export default function TablePage() {
  const [rows, setRows] = useState<TableRowType[]>([])
  const [newRow, setNewRow] = useState({
    username: '',
    room: '',
    seat: '',
    date_in: '',
    date_out: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setRows(prev => [...prev, {
      id: Date.now(),
      ...newRow,
      date_in: new Date(newRow.date_in),
      date_out: new Date(newRow.date_out)
    }])
    setNewRow({ username: '', room: '', seat: '', date_in: '', date_out: '' })
  }

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <Input
          type="text"
          value={newRow.username}
          onChange={e => setNewRow(prev => ({ ...prev, username: e.target.value }))}
          placeholder="Username"
        />
        <Input
          type="text"
          value={newRow.room}
          onChange={e => setNewRow(prev => ({ ...prev, room: e.target.value }))}
          placeholder="Room"
        />
        <Input
          type="text"
          value={newRow.seat}
          onChange={e => setNewRow(prev => ({ ...prev, seat: e.target.value }))}
          placeholder="Seat"
        />
        <Input
          type="datetime-local"
          value={newRow.date_in}
          onChange={e => setNewRow(prev => ({ ...prev, date_in: e.target.value }))}
        />
        <Input
          type="datetime-local"
          value={newRow.date_out}
          onChange={e => setNewRow(prev => ({ ...prev, date_out: e.target.value }))}
        />
        <Button type="submit">Submit</Button>
      </form>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Username</TableHead>
            <TableHead>Room</TableHead>
            <TableHead>Seat</TableHead>
            <TableHead>Date In</TableHead>
            <TableHead>Date Out</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.username}</TableCell>
              <TableCell>{row.room}</TableCell>
              <TableCell>{row.seat}</TableCell>
              <TableCell>{row.date_in.toLocaleString()}</TableCell>
              <TableCell>{row.date_out.toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}