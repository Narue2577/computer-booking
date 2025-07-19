"use client"

import React, { useState, useEffect } from 'react';
import { Plane, User, Check, X } from 'lucide-react';

const AirplaneSeatBooking = () => {
  const [selectedAirplane, setSelectedAirplane] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [passengerCount, setPassengerCount] = useState(1);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookings, setBookings] = useState({});

  // Sample airplane data with different configurations
  const airplanes = [
    {
      id: 'room601',
      name: 'Computer Room 601',
      capacity: 54,
      rows: 7,
      seatsPerRow: 8,
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
            occupied: bookings[airplane.id]?.includes(seatId),// || Math.random() < 0.3, // 30% random occupancy
            selected: selectedSeats.includes(seatId)
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
  const handleSeatClick = (seatId, occupied) => {
    if (occupied) return;

    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
    } else {
      if (selectedSeats.length < passengerCount) {
        setSelectedSeats([...selectedSeats, seatId]);
      } else {
        // Replace first selected seat if limit reached
        setSelectedSeats([...selectedSeats.slice(1), seatId]);
      }
    }
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
    setShowBookingForm(false);
    alert(`Successfully booked ${selectedSeats.length} seat(s) on ${selectedAirplane.name}!`);
  };

  // Reset selections when airplane changes
  useEffect(() => {
    setSelectedSeats([]);
  }, [selectedAirplane]);

  // Render seat
  const renderSeat = (seat) => {
    const baseClasses = "w-8 h-8 rounded-t-lg border-2 flex items-center justify-center text-xs font-medium cursor-pointer transition-all duration-200";
    
    let seatClasses = baseClasses;
    
    if (seat.occupied) {
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
        onClick={() => handleSeatClick(seat.id, seat.occupied)}
        title={`Seat ${seat.id} - ${seat.section} ${seat.occupied ? '(Occupied)' : '(Available)'}`}
      >
        {seat.occupied ? <X className="w-3 h-3" /> : seat.selected ? <Check className="w-3 h-3" /> : seat.letter}
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

  return (
    <div className="max-w-6xl min-h-screen p-6 mx-auto bg-gray-50">
      <div className="p-6 bg-white rounded-lg shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          {/*<Plane className="w-8 h-8 text-blue-600" />*/}
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
                  <h3 className="text-lg font-bold text-gray-800 text-center justify-center">{airplane.name}</h3>
                  {/*<span className="text-lg font-bold text-blue-600">${airplane.price}</span> */}
                </div>
                <p className="mb-1 text-sm text-gray-600 text-center justify-center">Capacity: {airplane.capacity} </p>
              </div>
            ))}
          </div>
        </div>

        {/* Passenger Count Selection */}
        {selectedAirplane && (
          <div className="mb-6">
            <h2 className="mb-4 text-xl font-semibold text-gray-700">Number of Reservations</h2>
            <div className="flex items-center gap-4">
              <label className="text-sm font-medium text-gray-600">Seats:</label>
              <select
                value={passengerCount}
                onChange={(e) => {
                  setPassengerCount(Number(e.target.value));
                  setSelectedSeats([]);
                }}
                className="px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>
        )} 

        {/* Seat Map */}
        {selectedAirplane && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-700">
                Select Seats - {selectedAirplane.name}
              </h2>
              {/*<div className="text-sm text-gray-600">
                Selected: {selectedSeats.length} / {passengerCount}
              </div> */}
            </div>

            {/* Legend */}
            <div className="flex justify-center gap-6 mb-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-100 border-2 border-green-400 rounded-t-lg"></div>
                <span>Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 border-2 border-blue-600 rounded-t-lg"></div>
                <span>Selected</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-200 border-2 border-red-400 rounded-t-lg"></div>
                <span>Occupied</span>
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

        {/* Booking Summary and Confirmation */}
        {selectedSeats.length > 0 && (
          <div className="p-4 mb-6 rounded-lg bg-blue-50">
            <h3 className="mb-2 text-lg font-semibold text-blue-800">Booking Summary</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p><strong>Room:</strong> {selectedAirplane.name}</p>
                <p><strong>Selected Seats:</strong> {selectedSeats.join(', ')}</p>
              </div>
              <div>
               {/*} <p><strong>Price per seat:</strong> ${selectedAirplane.price}</p>
                <p><strong>Total:</strong> ${selectedAirplane.price * selectedSeats.length}</p>
              */}</div>
            </div>
            <button
              onClick={handleBooking}
              disabled={selectedSeats.length !== passengerCount}
              className={`mt-4 px-6 py-2 rounded-lg font-medium transition-colors duration-200 ${
                selectedSeats.length === passengerCount
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {selectedSeats.length === passengerCount ? 'Confirm Booking' : `Select ${passengerCount - selectedSeats.length} more seat(s)`}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AirplaneSeatBooking;