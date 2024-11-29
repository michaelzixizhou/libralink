'use server'
import { fromEnv } from '@aws-sdk/credential-providers';
import { DynamoDBClient, ListTablesCommand, PutItemCommand, GetItemCommand, QueryCommand, ScanCommand } from '@aws-sdk/client-dynamodb';
import AWS from "aws-sdk"

const client = new DynamoDBClient({
    region: 'us-west-2',
    credentials: fromEnv(),
});

// Define the async function
export const getTableList = async () => {
    const command = new ListTablesCommand({});
    const response = await client.send(command);
    console.log(response.TableNames.join("\n"));
    return response;
};

// Create a room (Insert room details)
export const createRoom = async (roomData) => {
    const params = {
        TableName: 'RoomsAndBookings',  // Your DynamoDB table name
        Item: {
            PK: { S: `ROOM#${roomData.roomNumber}` },   // Partition Key
            SK: { S: 'DETAILS' },                       // Sort Key
            roomNumber: { S: roomData.roomNumber },     // Room number
            capacity: { N: `${roomData.capacity}` },    // Room capacity (number as string)
            location: { S: roomData.location },         // Room location
            openTime: { S: roomData.openTime },         // Opening time
            closeTime: { S: roomData.closeTime },       // Closing time
        },
    };

    try {
        // Sending the PutItemCommand to DynamoDB
        const command = new PutItemCommand(params);
        await client.send(command);  // This makes the actual API call
        console.log(`Room ${roomData.roomNumber} created successfully!`);
    } catch (error) {
        console.error('Error creating room:', error);
        throw new Error('Error creating room');
    }
};


// Get room details (Retrieve information for a specific room)
export const getRoomDetails = async (roomNumber) => {
    const params = {
        TableName: 'RoomsAndBookings',  // Your DynamoDB table name
        Key: {
            PK: { S: `ROOM#${roomNumber}` },  // Partition Key
            SK: { S: 'DETAILS' },             // Sort Key
        },
    };

    try {
        // Send the GetItemCommand to DynamoDB
        const command = new GetItemCommand(params);
        const data = await client.send(command);

        if (data.Item) {
            console.log('Room details:', AWS.DynamoDB.Converter.unmarshall(data.Item)); // Unmarshall data to JavaScript object
            return AWS.DynamoDB.Converter.unmarshall(data.Item); // Return the unmarshalled item
        } else {
            console.log('Room not found');
            return null;
        }
    } catch (error) {
        console.error('Error fetching room details:', error);
        throw new Error('Error fetching room details');
    }
};

// Create a booking (Insert booking details for a room)
export const createBooking = async (bookingData) => {
    const params = {
        TableName: 'RoomsAndBookings',  // The name of your DynamoDB table
        Item: {
            PK: { S: `ROOM#${bookingData.roomNumber}` },             // Partition Key (Room#RoomNumber)
            SK: { S: `BOOKING#${bookingData.userID}#${bookingData.startTime}` }, // Sort Key (Booking#UserID#StartTime)
            userID: { S: bookingData.userID },                      // User ID
            startTime: { S: bookingData.startTime },                // Booking start time
            endTime: { S: bookingData.endTime },                    // Booking end time
        },
    };

    try {
        // Create the PutItemCommand with the specified parameters
        const command = new PutItemCommand(params);
        // Send the command to DynamoDB
        await client.send(command);
        console.log(`Booking created for room ${bookingData.roomNumber} by user ${bookingData.userID}`);
    } catch (error) {
        console.error('Error creating booking:', error);
        throw new Error('Error creating booking');
    }

}

// Get all bookings for a room (Retrieve all bookings associated with a room)
export const getRoomBookings = async (roomNumber) => {
    const params = {
        TableName: 'RoomsAndBookings',  // The name of your DynamoDB table
        KeyConditionExpression: 'PK = :roomPK AND begins_with(SK, :bookingSK)',  // Query for bookings by room
        ExpressionAttributeValues: {
            ':roomPK': { S: `ROOM#${roomNumber}` },  // Partition key for room
            ':bookingSK': { S: 'BOOKING#' },         // Sort key prefix for bookings
        },
    };

    try {
        // Create the QueryCommand with the specified parameters
        const command = new QueryCommand(params);
        // Send the command to DynamoDB
        const data = await client.send(command);

        console.log('Bookings for room', roomNumber, ':', data.Items);
        return data.Items;  // Return the list of bookings
    } catch (error) {
        console.error('Error fetching room bookings:', error);
        throw new Error('Error fetching room bookings');
    }
};

// Get all rooms a user has booked (Retrieve all bookings for a specific user)

export const getUserBookings = async (userID) => {
    const params = {
        TableName: 'RoomsAndBookings',  // The name of your DynamoDB table
        FilterExpression: 'contains(SK, :bookingSK) AND userID = :userID',  // Filter by bookings and userID
        ExpressionAttributeValues: {
            ':bookingSK': { S: 'BOOKING#' },   // Filter for bookings (SK starts with 'BOOKING#')
            ':userID': { S: userID },          // Filter by user ID
        },
    };

    try {
        // Send the scan command to DynamoDB
        const command = new ScanCommand(params);
        const data = await client.send(command);

        console.log('Bookings for user', userID, ':', data.Items);
        return data.Items; // Return the list of bookings
    } catch (error) {
        console.error('Error fetching user bookings:', error);
        throw new Error('Error fetching user bookings');
    }
}

export const getFilteredRooms = async (params) => {
    try {
        const command = new ScanCommand(params);
        const data = await client.send(command);

        // Log the result of the query
        console.log('Filtered rooms:', data.Items);
        return data.Items;

        res.status(200).json(data.Items);  // Return the filtered rooms as a response
    } catch (error) {
        console.error('Error fetching filtered rooms:', error);
        throw new Error("Error fetching bookings")
    }
};

export const getAllRooms = async () => {
    const params = {
        TableName: 'RoomsAndBookings',  // Name of your DynamoDB table
        FilterExpression: 'SK = :details',  // Only return items where SK is 'DETAILS'
        ExpressionAttributeValues: {
            ':details': { S: 'DETAILS' },  // We only want the rooms, so we filter by 'DETAILS' SK
        },
    };

    try {
        // Perform a Scan on the DynamoDB table
        const command = new ScanCommand(params);
        const data = await client.send(command);

        // Check if we received any items
        if (data.Items && data.Items.length > 0) {
            console.log('All rooms:', data.Items);
            return data.Items;  // Return all rooms
        } else {
            console.log('No rooms found');
            return [];
        }
    } catch (error) {
        console.error('Error fetching rooms:', error);
        throw new Error('Error fetching rooms');
    }
};
