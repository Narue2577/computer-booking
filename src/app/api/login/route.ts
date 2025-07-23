// app/api/auth/login/route.ts - Login endpoint
import { NextRequest, NextResponse } from 'next/server';
import { getConnection } from '@/lib/db';
import { verifyPassword, generateToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const connection = await getConnection();

    // Find user by email
    const [users] = await connection.execute(
      'SELECT id, name, email, password FROM users WHERE email = ?',
      [email]
    );

    const userArray = users as any[];
    
    if (userArray.length === 0) {
      await connection.end();
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    const user = userArray[0];

    // Verify password
    const isValidPassword = await verifyPassword(password, user.password);

    if (!isValidPassword) {
      await connection.end();
      return NextResponse.json(
        { error: 'Invalid credentials' },
        { status: 401 }
      );
    }

    // Generate JWT token
    const token = generateToken(user.id, user.email);

    await connection.end();

    return NextResponse.json({
      message: 'Login successful',
      token,
      user: { id: user.id, name: user.name, email: user.email }
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
