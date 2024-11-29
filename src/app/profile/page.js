"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./profile.module.css";

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const [userBookings, setUserBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (session?.user?.email) {
      // Simulate fetching bookings with fake data
      const fakeBookings = [
        {
          id: 1,
          library: "Robarts Library",
          room: "Room 203",
          attendees: 4,
          date: "2024-12-01",
          startTime: "10:00",
          endTime: "12:00",
        },
        {
          id: 2,
          library: "Gerstein Library",
          room: "Room 105",
          attendees: 2,
          date: "2024-12-03",
          startTime: "14:00",
          endTime: "16:00",
        },
        {
          id: 3,
          library: "E.J. Pratt Library",
          room: "Room 302",
          attendees: 6,
          date: "2024-12-05",
          startTime: "09:00",
          endTime: "11:00",
        },
      ];

      // Simulate delay to mimic real fetching
      setTimeout(() => {
        setUserBookings(fakeBookings);
        setLoading(false);
      }, 1000);
    }
  }, [session]);

  // Handle delete booking
  const handleDelete = (id) => {
    const updatedBookings = userBookings.filter((booking) => booking.id !== id);
    setUserBookings(updatedBookings);
  };

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
      ) : userBookings.length > 0 ? (
        <ul className={styles.bookingList}>
          {userBookings.map((booking) => (
            <li key={booking.id} className={styles.bookingItem}>
              <div>
                <strong>Library:</strong> {booking.library} <br />
                <strong>Room:</strong> {booking.room} <br />
                <strong>Date:</strong> {booking.date} <br />
                <strong>Time:</strong> {booking.startTime} - {booking.endTime} <br />
                <strong>Attendees:</strong> {booking.attendees}
              </div>
              {/* Delete Button */}
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(booking.id)}
              >
                ❌
              </button>
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
