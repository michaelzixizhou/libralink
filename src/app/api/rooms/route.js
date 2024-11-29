import dynamoDB, { TABLES } from '../../../lib/dynamodb';

export async function GET() {
  try {
    const params = { TableName: TABLES.ROOMS };
    const data = await dynamoDB.scan(params).promise();
    return new Response(JSON.stringify(data.Items), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch rooms' }), { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { name, capacity } = await req.json();

    if (!name || !capacity) {
      return new Response(JSON.stringify({ error: 'Missing room data' }), { status: 400 });
    }

    const params = {
      TableName: TABLES.ROOMS,
      Item: { id: Date.now().toString(), name, capacity },
    };

    await dynamoDB.put(params).promise();
    return new Response(JSON.stringify({ message: 'Room created successfully' }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create room' }), { status: 500 });
  }
}
