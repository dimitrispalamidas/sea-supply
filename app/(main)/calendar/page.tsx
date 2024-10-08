"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Event {
  date: Date;
  description: string;
}

const CalendarPage = () => {
  const [date, setDate] = useState<Value>(new Date());
  const [eventDescription, setEventDescription] = useState<string>("");
  const [events, setEvents] = useState<Event[]>([]);

  const handleDateClick = (date: Value) => {
    setDate(date);
  };

  const handleAddEvent = () => {
    if (!Array.isArray(date) && eventDescription.trim() !== "") {
      const newEvent: Event = {
        date: date as Date,
        description: eventDescription,
      };
      setEvents((prevEvents) => [...prevEvents, newEvent]); // Προσθέτουμε το νέο event στο state
      setEventDescription(""); // Καθαρίζουμε το πεδίο περιγραφής
    }
  };

  const formatDate = (date: Value) => {
    if (Array.isArray(date)) {
      const [start, end] = date;
      return `Selected date range: ${start?.toISOString()} - ${end?.toISOString()}`;
    }
    return `Selected date: ${date?.toDateString()}`;
  };

  const filteredEvents = !Array.isArray(date)
    ? events.filter(
        (eventt) => eventt.date.toDateString() === (date as Date).toDateString()
      )
    : [];

  return (
    <div className='container mx-auto p-8'>
      <h1 className='text-4xl font-semibold text-gray-800 mb-8'>Calendar</h1>
      <div className='flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6'>
        <div className='w-full md:w-1/2'>
          <Calendar
            onChange={handleDateClick}
            onClickDay={() => {}}
            value={date}
            className='w-full p-4 border border-gray-300 rounded-lg shadow-sm'
          />
        </div>
        <div className='flex flex-col w-full md:w-1/2 mt-6 md:mt-0 md:ml-6'>
          <div className='bg-gray-100 p-4 rounded-lg shadow-sm'>
            <h2 className='text-2xl font-medium text-gray-700 mb-4'>
              Selected Date: {formatDate(date)}
            </h2>
            <p className='text-xl font-semibold mb-2'>Current Date Events:</p>
            <ul className='list-disc list-inside mb-6'>
              {filteredEvents.length > 0 ? (
                filteredEvents.map((eventt, index) => (
                  <li key={index} className='text-gray-600'>
                    <span className='font-semibold'>
                      {eventt.date.toDateString()}
                    </span>
                    : {eventt.description}
                  </li>
                ))
              ) : (
                <p className='text-gray-500'>No events for this date.</p>
              )}
            </ul>

            <div className='mt-auto'>
              <input
                type='text'
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                placeholder='Add event description'
                className='w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
              <button
                className='w-full p-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition'
                onClick={handleAddEvent}
              >
                Add Event
              </button>
            </div>
          </div>

          <div className='mt-8'>
            <h2 className='text-2xl font-medium text-gray-700 mb-4'>
              All Events
            </h2>
            <ul className='list-disc list-inside'>
              {events.length > 0 ? (
                events.map((eventt, index) => (
                  <li key={index} className='text-gray-600'>
                    <span className='font-semibold'>
                      {eventt.date.toDateString()}
                    </span>
                    : {eventt.description}
                  </li>
                ))
              ) : (
                <p className='text-gray-500'>No events added yet.</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
