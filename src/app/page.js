"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  const libraries = [
    "Robarts Library",
    "Gerstein Library",
    "E.J. Pratt Library",
    "OISE Library",
  ];

  const [selectedLibrary, setSelectedLibrary] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleSearch = () => {
    const library = selectedLibrary || "all libraries";
    const date = selectedDate || "any date";
    const time = selectedTime || "any time";

    alert(
      `You are searching for empty rooms in ${library} on ${date} at ${time}.`
    );
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image
          src="/images/logo.svg"
          alt="LibraLink Logo"
          width={150}
          height={50}
          priority
        />
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>
            Home
          </a>
          <a href="#" className={styles.navLink}>
            About
          </a>
          <a href="#" className={styles.navLink}>
            Contact
          </a>
        </nav>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>Library Study Room Booking</h1>
        <div className={styles.bookingForm}>
          <div className={styles.formGroup}>
            <label>
              <strong>Select Library:</strong>
              <select
                value={selectedLibrary}
                onChange={(e) => setSelectedLibrary(e.target.value)}
                className={styles.input}
              >
                <option value="">-- All Libraries --</option>
                {libraries.map((library) => (
                  <option key={library} value={library}>
                    {library}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className={styles.formGroup}>
            <label>
              <strong>Select Date:</strong>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className={styles.input}
              />
            </label>
          </div>

          <div className={styles.formGroup}>
            <label>
              <strong>Select Time:</strong>
              <input
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                className={styles.input}
              />
            </label>
          </div>

          <button onClick={handleSearch} className={styles.button}>
            Search Available Rooms
          </button>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Powered by LibraLink © 2024</p>
      </footer>
    </div>
  );
}
