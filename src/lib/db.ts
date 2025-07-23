// lib/db.ts - Database connection

import mysql from 'mysql2/promise';

// XAMPP configuration using environment variables
const dbConfig = {
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',  // Empty for XAMPP default
  database: process.env.DB_NAME || 'swu_registration'
};

export async function getConnection() {
  return await mysql.createConnection(dbConfig);
}

// Alternative: If you need to handle connection errors
export async function getConnectionSafe() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    console.log('Database connected successfully');
    return connection;
  } catch (error) {
    console.error('Database connection failed:', error);
    throw error;
  }
}
