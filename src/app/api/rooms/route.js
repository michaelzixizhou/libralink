import { createRoom, getRoomDetails } from '../../lib/dynamodb'; // Import your DynamoDB functions

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

// Get room details
export const GET = async (req, res) => {
    const { roomNumber } = req.query;  // Get room number from query params
    try {
        const roomDetails = await getRoomDetails(roomNumber);  // Fetch room details using the room number
        if (roomDetails) {
            res.status(200).json(roomDetails);  // Return room details if found
        } else {
            res.status(404).json({ message: `Room ${roomNumber} not found` });
        }
    } catch (error) {
        res.status(500).json({ message: 'Error fetching room details', error: error.message });
    }
}
