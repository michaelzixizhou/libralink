import { createRoom, getRoomDetails, getFilteredRooms } from '../../../lib/dynamodb.js'; // Import your DynamoDB functions

// Create a room
export const POST = async (req, res) => {
    try {
        const roomData = req.body; // Room data from the request body
        await createRoom(roomData);  // Call createRoom function
        res.status(200).json({ message: `Room ${roomData.roomNumber} created successfully!` });
    } catch (error) {
        res.status(500).json({ message: 'Error creating room', error: error.message });
    }
};

export const GET = async (req, res) => {
    const { roomNumber } = req.query;  // Get the room number from query parameters

    if (!roomNumber) {
        return res.status(400).json({ message: 'Room number is required' });  // Return 400 if no room number is provided
    }

    try {
        // Call the function to get room bookings
        const bookings = await getRoomBookings(roomNumber);

        if (bookings && bookings.length > 0) {
            console.log(`Bookings for Room ${roomNumber}:`, bookings);
            res.status(200).json(bookings);  // Return the bookings as JSON
        } else {
            console.log(`No bookings found for Room ${roomNumber}`);
            res.status(404).json({ message: `No bookings found for Room ${roomNumber}` });
        }
    } catch (error) {
        console.error('Error fetching bookings for room:', error);
        res.status(500).json({ message: 'Error fetching room bookings', error: error.message });
    }
};
