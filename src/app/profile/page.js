"use client";

import { useState } from "react";
import styles from "./profile.module.css";

export default function Profile() {
  // Example data for the user and their bookings
  const userName = "John Doe"; // Replace with actual user data when integrated
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
  ];

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Profile</h1>
      <div className={styles.profileSection}>
        <h2 className={styles.subtitle}>Welcome, {userName}!</h2>
        <p className={styles.paragraph}>Here are your current and upcoming bookings:</p>

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
          <p className={styles.paragraph}>You have no bookings at the moment.</p>
        )}
      </div>
    </div>
  );
}
