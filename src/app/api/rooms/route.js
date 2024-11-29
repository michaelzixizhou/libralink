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

// Get room details
export const GET = async (req, res) => {
    // const { roomNumber } = req.query;  // Get room number from query params
    // try {
    //     const roomDetails = await getRoomDetails(roomNumber);  // Fetch room details using the room number
    //     if (roomDetails) {
    //         res.status(200).json(roomDetails);  // Return room details if found
    //     } else {
    //         res.status(404).json({ message: `Room ${roomNumber} not found` });
    //     }
    // } catch (error) {
    //     res.status(500).json({ message: 'Error fetching room details', error: error.message });a
    // }

    try {
        const { library, date, startTime, endTime, numAttendees } = req.query; // Get query parameters

        // Start building the Scan parameters
        const params = {
            TableName: 'RoomsAndBookings',
        };

        // Filter expression array to hold conditions
        let filterExpressions = [];
        let expressionValues = {};

        // Filter by library (if provided)
        if (library && library !== '-- All Libraries --') {
            filterExpressions.push('location = :library');
            expressionValues[':library'] = { S: library };
        }

        // Filter by date (if provided)
        if (date) {
            filterExpressions.push('contains(openTime, :date)');  // Assuming openTime is stored as yyyy-mm-dd --:-- format
            expressionValues[':date'] = { S: date };
        }

        // Filter by start time (if provided)
        if (startTime) {
            filterExpressions.push('openTime >= :startTime');
            expressionValues[':startTime'] = { S: startTime };
        }

        // Filter by end time (if provided)
        if (endTime) {
            filterExpressions.push('closeTime <= :endTime');
            expressionValues[':endTime'] = { S: endTime };
        }

        // Filter by number of attendees (if provided)
        if (numAttendees) {
            filterExpressions.push('capacity >= :numAttendees');
            expressionValues[':numAttendees'] = { N: numAttendees };
        }

        // Combine filter expressions if any
        if (filterExpressions.length > 0) {
            params.FilterExpression = filterExpressions.join(' AND ');
            params.ExpressionAttributeValues = expressionValues;
        }
        const data = await getFilteredRooms(params)
        res.status(200).json(data);

    } catch (error) {
        res.status(500).json({ message: 'Error creating room', error: error.message });
    }
}

