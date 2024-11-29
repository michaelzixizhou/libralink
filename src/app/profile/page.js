"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import styles from "./profile.module.css";
import Link from "next/link";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const [userBookings, setUserBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (session?.user?.email) {
      const fetchBookings = async () => {
        try {
          setLoading(true);
          setError(null);
  
          const bookings = await fetchUserBookings(session.user.email); // Pass user email as userID
          setUserBookings(bookings);
        } catch (err) {
          console.error("Error fetching bookings:", err.message);
          setError("Failed to load bookings. Please try again later.");
        } finally {
          setLoading(false);
        }
      };

      fetchBookings();
    }
  }, [session]);

  if (status === "loading") {
    return <p>Loading session...</p>;
  }

  if (!session) {
    return <p>You are not logged in. Please log in to view your profile.</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Profile</h1>
      <h2 className={styles.subtitle}>Welcome, {session.user.name || "User"}!</h2>
      <p className={styles.paragraph}>Email: {session.user.email}</p>

      <h3 className={styles.subtitle}>Your Bookings</h3>
      {loading ? (
        <p>Loading bookings...</p>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : userBookings.length > 0 ? (
        <ul className={styles.bookingList}>
          {userBookings.map((booking) => (
            <li key={booking.id} className={styles.bookingItem}>
              <div>
                <strong>Library:</strong> {booking.library} <br />
                <strong>Date:</strong> {booking.date} <br />
                <strong>Time:</strong> {booking.startTime} - {booking.endTime}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.paragraph}>You have no bookings at the moment.</p>
      )}

      <Link href="/" className={styles.backButton}>
        Back to Home
      </Link>
    </div>
  );
}
