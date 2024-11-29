'use client'
import { getTableList, createRoom, getRoomDetails, createBooking, getRoomBookings, getUserBookings } from "../../lib/dynamodb.js"
import React, { useState } from 'react';

const roomNumber = '101';  // Replace with a valid room number in your DynamoDB

// Calling the getRoomDetails function
getRoomDetails(roomNumber)
    .then((roomDetails) => {
        if (roomDetails) {
            console.log('Room details:', roomDetails);  // Successfully fetched room details
        } else {
            console.log('Room not found');
        }
    })
    .catch((error) => {
        console.error('Error fetching room details:', error.message);  // Handle any errors
    });

const bookingData = {
    roomNumber: '101',
    userID: 'user123',
    startTime: '2024-11-29T09:00:00',
    endTime: '2024-11-29T11:00:00',
};

// Test the createBooking function
createBooking(bookingData)
    .then(() => {
        console.log('Booking created successfully');
    })
    .catch((error) => {
        console.error('Booking creation failed:', error.message);
    });

const testCreateRoom = async () => {
    // Sample room data for testing
    const roomData = {
        roomNumber: roomNumber,
        capacity: 30,
        location: '1st Floor',
        openTime: '08:00',
        closeTime: '18:00',
    };

    try {
        await createRoom(roomData);  // Call the createRoom function with test data
        console.log('Test passed: Room created successfully.');
    } catch (error) {
        console.error('Test failed:', error.message);
    }
};

const testGetRoomBookings = async (roomNumber) => {
    try {
        // Call the function with the room number
        const bookings = await getRoomBookings(roomNumber);

        // Log the results
        console.log(`Bookings for Room ${roomNumber}:`, bookings);

        if (bookings && bookings.length > 0) {
            console.log('Test passed: Bookings found.');
        } else {
            console.log('Test failed: No bookings found.');
        }
    } catch (error) {
        console.error('Error in testGetRoomBookings:', error);
    }
};


const testGetUserBookings = async (userID) => {

    try {
        // Call the function with the user ID
        const bookings = await getUserBookings(userID);

        // Log the results
        console.log(`Bookings for User ${userID}:`, bookings);

        if (bookings && bookings.length > 0) {
            console.log('Test passed: Bookings found.');
        } else {
            console.log('Test failed: No bookings found.');
        }
    } catch (error) {
        console.error('Error in testGetUserBookings:', error);
    }
};
const testGetRoomsAPI = async (queryParams) => {
    // Simulate a mock request object
    const req = {
        query: queryParams,  // Query parameters from the test
    };

    // Simulate a mock response object
    const res = {
        statusCode: null,
        data: null,
        status(status) {
            this.statusCode = status;
            return this;
        },
        json(data) {
            this.data = data;
        },
    };
    console.log("apitest")

    // Call the API handler with the mock req/res
    await GET(req, res);

    // Log the result
    if (res.statusCode === 200) {
        console.log('API Response:', res.data);  // This is the data you would return from your API
    } else {
        console.error('Error:', res.data);  // In case of an error, print the error message
    }
};
const testGet = async () => {
    const get = fetch("/api/bookings")
    console.log(get)

}


// Example 1: Test with specific query params
const queryParams1 = {
    library: 'Library A',
    date: '2024-12-01',
    startTime: '09:00',
    endTime: '17:00',
    numAttendees: '20'
};

testGetRoomsAPI(queryParams1)
export default function Page() {
    const s = getTableList()
    const rooms = getRoomDetails(roomNumber)
    const m = createBooking(bookingData)
    const getuser = testGetUserBookings("user123")
    const getbookings = testGetRoomBookings(roomNumber)
    const apitest = testGetRoomsAPI(queryParams1)

    const t = testGet()
}
