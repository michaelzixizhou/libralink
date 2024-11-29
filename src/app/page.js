"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  const libraries = [
    "Robarts Library",
    "Gerstein Library",
    "E.J. Pratt Library",
    "OISE Library",
    "Architecture, Landscape, and Design (Eberhard Zeidler Library)",
    "Dentistry Library (Harry R. Abbott)",
    "Engineering & Computer Science Library",
    "Law Library (Bora Laskin)",
    "Music Library",
    "Regis College Library"
  ];

  const [selectedLibrary, setSelectedLibrary] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [attendees, setAttendees] = useState("");

  const handleSearch = () => {
    const library = selectedLibrary || "all libraries";
    const date = selectedDate || "any date";
    const start = startTime || "any start time";
    const end = endTime || "any end time";
    const attendeesCount = attendees || "any number of attendees";

    alert(
      `You are searching for empty rooms in ${library} on ${date} between ${start} and ${end} for ${attendeesCount}.`
    );
  };
    // Placeholder for future database integration
    // console.log({
    //     library: selectedLibrary || "all",
    //     date: selectedDate || "any",
    //     startTime: startTime || "any",
    //     endTime: endTime || "any",
    //     attendees: attendees || "any",
    //   });
    // };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Image
          src="/images/logo.png"
          alt="LibraLink Logo"
          width={150}
          height={140}
          priority
        />
        <nav className={styles.nav}>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
          <a href="#" className={styles.navLink}>
            Contact
          </a>
          <Link href="/profile" className={styles.profileLink}>
            Profile
          </Link>
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
              <strong>Select Start Time:</strong>
              <input
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className={styles.input}
              />
            </label>
          </div>

          <div className={styles.formGroup}>
            <label>
              <strong>Select End Time:</strong>
              <input
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className={styles.input}
              />
            </label>
          </div>

          <div className={styles.formGroup}>
            <label>
              <strong>Number of Attendees:</strong>
              <input
                type="number"
                min="1"
                value={attendees}
                onChange={(e) => setAttendees(e.target.value)}
                placeholder="Enter number of attendees"
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
