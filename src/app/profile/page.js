"use client";

import { useSession } from "next-auth/react";
import styles from "./profile.module.css";
import Link from "next/link"; 

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (!session) {
    return <p>You are not logged in. Please log in to view your profile.</p>;
  }

  // Example bookings data linked to the user's Google email
  const userBookings = [
    {
      library: "Robarts Library",
      date: "2024-12-01",
      startTime: "10:00",
      endTime: "12:00",
    },
    {
      library: "Gerstein Library",
      date: "2024-12-03",
      startTime: "14:00",
      endTime: "16:00",
    },
  ]; // Replace this with actual data from your database

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Profile</h1>
      <h2 className={styles.subtitle}>
        Welcome, {session.user.name || "User"}!
      </h2>
      <p className={styles.paragraph}>
        Email: {session.user.email}
      </p>

      <h3 className={styles.subtitle}>Your Bookings</h3>
      {userBookings.length > 0 ? (
        <ul className={styles.bookingList}>
          {userBookings.map((booking, index) => (
            <li key={index} className={styles.bookingItem}>
              <strong>Library:</strong> {booking.library} <br />
              <strong>Date:</strong> {booking.date} <br />
              <strong>Time:</strong> {booking.startTime} - {booking.endTime}
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.paragraph}>
          You have no bookings at the moment.
        </p>
      )}
      {/* Back to Home Button */}
      <Link href="/" className={styles.backButton}>
        Back to Home
      </Link>

    </div>
  );
}
