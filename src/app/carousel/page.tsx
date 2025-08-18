"use client"

import React, { useState, useEffect, useActionState } from 'react';
import { Check, X, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { saveReservToDatabase } from '../carousel/reservation'
interface AirplaneSeatBookingProps {
  tableHeader?: string;
}

const AirplaneSeatBooking = ({ tableHeader }: AirplaneSeatBookingProps) => {
  const [selectedAirplane, setSelectedAirplane] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [passengerCount, setPassengerCount] = useState(4);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookings, setBookings] = useState({});
  const [dateTimeInputs, setDateTimeInputs] = useState({});

  // Sample airplane data with different configurations
  const airplanes = [
    {
      id: 'room601',
      name: 'Computer Room 601',
      capacity: 54,
      rows: 7,
      seatsPerRow: 8,
      unused: ['4E','5E'],
      occupied: [],
      layout: [
        { section: 'Room 601', rows: 7, seatsPerRow: 8, seatWidth: 'A B C D   E F G H' }
      ]
    },
    {
      id: 'room602',
      name: 'Computer Room 602',
      capacity: 54,
      rows: 8,
      seatsPerRow: 8,
      unused: ['1A','1B','1G','1H','2A','5A','5H','6A','6H'],
      occupied: [],
      layout: [
        { section: 'Room 602', rows: 8, seatsPerRow: 8, seatWidth: 'A B C D   E F G H' }
      ]
    },
    {
      id: 'room701',
      name: 'Computer Room 701',
      capacity: 54,
      rows: 7,
      seatsPerRow: 8,
      unused: ['4E','5E'],
      occupied: [],
      layout: [
        { section: 'Room 701', rows: 7, seatsPerRow: 8, seatWidth: 'A B C D   E F G H' }
      ]
    },
    {
      id: 'room801',
      name: 'Computer Room 801',
      capacity: 55,
      rows: 8,
      seatsPerRow: 8,
      unused: ['1B','1C','1D','1E','1F','1G','1H','5E','6E'],
      occupied: [],
      layout: [
        { section: 'Room 801', rows: 8, seatsPerRow: 8, seatWidth: 'A B C D   E F G H' }
      ]
    },
    {
      id: 'room802',
      name: 'Computer Room 802',
      capacity: 56,
      rows: 8,
      seatsPerRow: 8,
      unused: ['1A','1B','1G','1H','5A','5H', '6A','6H'],
      occupied: [],
      layout: [
        { section: 'Room 802', rows: 8, seatsPerRow: 8, seatWidth: 'A B C D   E F G H' }
      ]
    }
  ];

  // Generate seat map for an airplane
  const generateSeatMap = (airplane) => {
    const seatMap = [];
    let currentRow = 1;

    airplane.layout.forEach((section) => {
      for (let row = 0; row < section.rows; row++) {
        const rowSeats = [];
        const seatLetters = section.seatWidth.replace(/\s+/g, '').split('');
        
        seatLetters.forEach((letter) => {
          const seatId = `${currentRow}${letter}`;
          rowSeats.push({
            id: seatId,
            row: currentRow,
            letter: letter,
            occupied: bookings[airplane.id]?.includes(seatId),
            unused: airplane.unused.includes(seatId),
            selected: selectedSeats.includes(seatId), 
          });
        });
        
        seatMap.push({
          rowNumber: currentRow,
          seats: rowSeats,
          section: section.section,
          seatWidth: section.seatWidth
        });
        currentRow++;
      }
    });

    return seatMap;
  };

  // Handle seat selection
  const handleSeatClick = (seatId, occupied, unused) => {
    if (occupied || unused) return;

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      if (selectedSeats.length < passengerCount) {
        setSelectedSeats([...selectedSeats, seatId]);
      } else {
        setSelectedSeats([...selectedSeats.slice(1), seatId]);
      }
    }
  };

  // Handle removing a seat from the booking table
  const handleRemoveSeat = (seatId) => {
    setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    // Remove datetime inputs for removed seat
    setDateTimeInputs(prev => {
      const newInputs = { ...prev };
      delete newInputs[seatId];
      return newInputs;
    });
  };

  // Handle datetime input changes
  const handleDateTimeChange = (seatId, field, value) => {
    setDateTimeInputs(prev => ({
      ...prev,
      [seatId]: {
        ...prev[seatId],
        [field]: value
      }
    }));
  };

  // Handle booking confirmation
  const handleBooking = () => {
    if (selectedSeats.length === 0) return;

    const newBookings = { ...bookings };
    if (!newBookings[selectedAirplane.id]) {
      newBookings[selectedAirplane.id] = [];
    }
    newBookings[selectedAirplane.id] = [...newBookings[selectedAirplane.id], ...selectedSeats];
    
    setBookings(newBookings);
    setSelectedSeats([]);
    setDateTimeInputs({});
    setShowBookingForm(false);
    alert(`Successfully booked ${selectedSeats.length} seat(s) on ${selectedAirplane.name}!`);
  };

  // Reset selections when airplane changes
  useEffect(() => {
    setSelectedSeats([]);
    setDateTimeInputs({});
  }, [selectedAirplane]);

  // Render seat
  const renderSeat = (seat) => {
    const baseClasses = "w-8 h-8 border-2 flex items-center justify-center text-xs font-medium cursor-pointer transition-all duration-200";
    
    let seatClasses = baseClasses;
    
    if (seat.unused) {
      seatClasses += " bg-black border-gray-800 text-white cursor-not-allowed";
    } else if (seat.occupied) {
      seatClasses += " bg-red-200 border-red-400 text-red-800 cursor-not-allowed";
    } else if (seat.selected) {
      seatClasses += " bg-blue-500 border-blue-600 text-white transform scale-110";
    } else {
      seatClasses += " bg-green-100 border-green-400 text-green-800 hover:bg-green-200";
    }

    return (
      <div
        key={seat.id}
        className={seatClasses}
        onClick={() => handleSeatClick(seat.id, seat.occupied, seat.unused)}
        title={`Seat ${seat.id} - ${seat.section} ${seat.unused ? '(Not Available)' : seat.occupied ? '(Occupied)' : '(Available)'}`}
      >
        {seat.unused ? 'X' : seat.occupied ? <X className="w-3 h-3 text-red-800" /> : seat.selected ? <Check className="w-3 h-3 text-white" /> : seat.letter}
      </div>
    );
  };

  // Render seat row
  const renderSeatRow = (row) => {
    const seatElements = [];
    const seatPattern = row.seatWidth.split('');
    let seatIndex = 0;

    seatPattern.forEach((char, index) => {
      if (char === ' ') {
        seatElements.push(<div key={`space-${index}`} className="w-4" />);
      } else {
        seatElements.push(renderSeat(row.seats[seatIndex]));
        seatIndex++;
      }
    });

    return (
      <div key={row.rowNumber} className="flex items-center justify-center mb-2 space-x-1">
        <div className="w-8 text-sm font-medium text-center text-gray-600">
          {row.rowNumber}
        </div>
        <div className="flex space-x-1">
          {seatElements}
        </div>
      </div>
    );
  };

  // BookingTable component (embedded)
  const BookingTable = () => (
    <div className="p-6 mb-6 rounded-lg bg-blue-50">
      <h3 className="mb-4 text-lg font-semibold text-blue-800">Booking Summary</h3>
      
      <div className="mb-4 text-sm">
        <p><strong>Username:</strong> {tableHeader || 'Default'}</p>
        <p><strong>Room:</strong> {selectedAirplane.name}</p>
        <p><strong>Total Seats:</strong> {selectedSeats.length}</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b">
                Seat ID
              </th>
        {/*   <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b">
                Row
              </th>
              <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b">
                Position
              </th> */}  
              <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b">
                Date In
              </th>
              <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b">
                Date Out
              </th>
              <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b">
                Status
              </th>
              <th className="px-4 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase border-b">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {selectedSeats.map((seatId, index) => {
              const row = seatId.match(/\d+/)[0];
              const position = seatId.match(/[A-H]/)[0];
              
              return (
                <tr key={seatId} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-6 h-6 mr-2 text-xs font-medium text-white bg-blue-500 border border-blue-600 rounded">
                        <Check className="w-3 h-3" />
                      </div>
                      {seatId}
                    </div>
                  </td>
                  {/*<td className="px-4 py-3 text-sm text-gray-900">
                    Row {row}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    Position {position}
                  </td>*/}
                  <td className="px-4 py-3 text-sm text-gray-900">
                    <input 
                      type="datetime-local" 
                      className="px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={dateTimeInputs[seatId]?.dateIn || ''}
                      onChange={(e) => handleDateTimeChange(seatId, 'dateIn', e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    <input 
                      type="datetime-local" 
                      className="px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={dateTimeInputs[seatId]?.dateOut || ''}
                      onChange={(e) => handleDateTimeChange(seatId, 'dateOut', e.target.value)}
                    />
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <span className="inline-flex px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                      Reserved
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm">
                    <button
                      onClick={() => handleRemoveSeat(seatId)}
                      className="text-red-600 transition-colors duration-200 hover:text-red-800"
                      title="Remove seat"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {selectedSeats.length === 0 && (
        <div className="py-8 text-center text-gray-500">
          No seats selected
        </div>
      )}

      {selectedSeats.length > 0 && (
        <button
          onClick={handleBooking}
          className="px-6 py-2 mt-4 font-medium text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Confirm Booking
        </button>
      )}
    </div>
  );

  export default function Reservation() {
    const initialState = {
      success: false,
      message: "",
    };
  
    const [state, formAction, pending] = useActionState(
      saveReservToDatabase,
      initialState
    );
  return (
    <div className="max-w-6xl min-h-screen p-6 mx-auto bg-gray-50">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Computer Seat Booking System</h1>
        </div>

        {/* Airplane Selection */}
        <div className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-gray-700">Select Room</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            {airplanes.map((airplane) => (
              <div
                key={airplane.id}
                className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                  selectedAirplane?.id === airplane.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                onClick={() => setSelectedAirplane(airplane)}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="justify-center text-lg font-bold text-center text-gray-800">{airplane.name}</h3>
                </div>
                <p className="justify-center mb-1 text-sm text-center text-gray-600">Capacity: {airplane.capacity} </p>
                <p className="justify-center mb-1 text-sm text-center text-gray-600">Occupied: {bookings[airplane.id]?.length || 0} </p>
              </div>
            ))}
          </div>
        </div>

        {/* Passenger Count Selection */}
        {selectedAirplane && (
          <div className="mb-6">
            <h2 className="mb-4 text-xl font-semibold text-gray-700">
              Number of Reservations: <Button>{selectedSeats.length}</Button>
            </h2>
          </div>
        )} 

        {/* Seat Map */}
        {selectedAirplane && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-700">
                Select Seats - {selectedAirplane.name}
              </h2>
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-6 mb-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-100 border-2 border-green-400 "></div>
                <span>Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 border-2 border-blue-600 "></div>
                <span>Selected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-200 border-2 border-red-400 "></div>
                <span>Occupied</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-black border-2 border-gray-800 "></div>
                <span>Not Available</span>
              </div>
            </div>

            {/* Seat Map */}
            <div className="p-6 overflow-y-auto bg-gray-100 rounded-lg max-h-96">
              <div className="flex flex-col items-center">
                {generateSeatMap(selectedAirplane).map(renderSeatRow)}
              </div>
            </div>
          </div>
        )}

        {/* Booking Table */}
        {selectedSeats.length > 0 && <BookingTable />}
      </div>
    </div>
  );
};

export default AirplaneSeatBooking;