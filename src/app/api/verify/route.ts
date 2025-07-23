// app/api/auth/verify/route.ts - Token verification endpoint
import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { getConnection } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'No token provided' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);
    const decoded = verifyToken(token);

    if (!decoded) {
      return NextResponse.json(
        { error: 'Invalid token' },
        { status: 401 }
      );
    }

    const connection = await getConnection();
    
    // Get user info
    const [users] = await connection.execute(
      'SELECT id, name, email FROM users WHERE id = ?',
      [decoded.userId]
    );

    const userArray = users as any[];
    
    if (userArray.length === 0) {
      await connection.end();
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    await connection.end();

    return NextResponse.json({
      user: userArray[0]
    });

  } catch (error) {
    console.error('Token verification error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}