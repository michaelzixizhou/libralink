import dynamoDB, { TABLES } from '../../../lib/dynamodb';

export async function POST(req) {
  try {
    const { userId, roomId, bookingDate } = await req.json();

    if (!userId || !roomId || !bookingDate) {
      return new Response(JSON.stringify({ error: 'Missing booking data' }), { status: 400 });
    }

    const bookingId = Date.now().toString();
    const params = {
      TableName: TABLES.USERS,
      Key: { id: userId },
      UpdateExpression: 'SET bookings = list_append(if_not_exists(bookings, :empty_list), :booking)',
      ExpressionAttributeValues: {
        ':booking': [{ bookingId, roomId, bookingDate }],
        ':empty_list': [],
      },
      ReturnValues: 'UPDATED_NEW',
    };

    await dynamoDB.update(params).promise();
    return new Response(JSON.stringify({ message: 'Booking created successfully' }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create booking' }), { status: 500 });
  }
}
