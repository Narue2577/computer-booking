// Example of a Next.js API route (pages/api/reservations/[id].js)
import { deleteReservation } from '../../lib/db'; // Assume this is your database function

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'DELETE') {
    try {
      await deleteReservation(id); // Delete the reservation from the database
      res.status(200).json({ message: 'Reservation deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete reservation' });
    }
  } else {
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}