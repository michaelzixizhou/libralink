// pages/api/bookings/route.js

import { createBooking, getRoomBookings, getUserBookings } from '../../lib/dynamodb'; // Import DynamoDB functions

// Create a booking
export const POST = async (req, res) => {
    try {
        const bookingData = req.body;  // Booking data from the request body
        await createBooking(bookingData);  // Call createBooking function
        res.status(200).json({ message: `Booking created successfully for room ${bookingData.roomNumber}` });
    } catch (error) {
        res.status(500).json({ message: 'Error creating booking', error: error.message });
    }
};

// Get all bookings for a room
export const GET_ROOM_BOOKINGS = async (req, res) => {
    const { roomNumber } = req.query;  // Get room number from query params
    try {
        const bookings = await getRoomBookings(roomNumber);  // Fetch room bookings using the room number
        res.status(200).json(bookings);  // Return the list of bookings
    } catch (error) {
        res.status(500).json({ message: 'Error fetching room bookings', error: error.message });
    }
};

// Get all bookings for a user
export const GET_USER_BOOKINGS = async (req, res) => {
    const { userID } = req.query;  // Get userID from query params
    try {
        const bookings = await getUserBookings(userID);  // Fetch user bookings using the user ID
        res.status(200).json(bookings);  // Return the list of bookings
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user bookings', error: error.message });
    }
};

