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
    try {
        // Call the getAllRooms function to retrieve rooms from DynamoDB
        const rooms = await getAllRooms();

        if (rooms && rooms.length > 0) {
            res.status(200).json(rooms);  // Return the rooms as JSON
        } else {
            res.status(404).json({ message: 'No rooms found' });  // Return a message if no rooms are found
        }
    } catch (error) {
        console.error('Error fetching rooms:', error);
        res.status(500).json({ message: 'Error fetching rooms', error: error.message });
    }
};
