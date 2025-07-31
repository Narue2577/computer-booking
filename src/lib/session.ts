// lib/session.ts
'use server';
import { serialize } from 'cookie';
//import { v4 as uuidv4 } from 'uuid';
import pool from './db';
import * as crypto from "crypto";

export async function createSession(data: {
  userId: string;
  username: string;
  email: string;
}) {
  // Generate a short session ID (16 characters)
  const sessionId = crypto.randomBytes(8).toString('hex');
  
  const sessionData = {
    id: sessionId,
    userId: data.userId,
    username: data.username,
    email: data.email,
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
  };

  // Store session in database
  const [result] = await pool.execute(
    'INSERT INTO sessions SET ?',
    [sessionData]
  );

  // Set secure cookie
  const cookie = await setSessionCookie(sessionId);
  
  return cookie;
}

async function setSessionCookie(sessionId: string) {
  const cookie = serialize('session', sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 24 * 60 * 60 // 24 hours
  });

  return cookie;
}