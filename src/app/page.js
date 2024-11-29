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
    "Regis College Library",
  ];

  const [selectedLibrary, setSelectedLibrary] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [attendees, setAttendees] = useState("");
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);

    // Hardcoded room data
    const hardcodedRooms = [
      {
        id: 1,
        library: "Robarts Library",
        roomNumber: "203",
        capacity: 6,
        openTime: "09:00",
        closeTime: "21:00",
      },
      {
        id: 2,
        library: "Gerstein Library",
        roomNumber: "105",
        capacity: 4,
        openTime: "10:00",
        closeTime: "20:00",
      },
      {
        id: 3,
        library: "E.J. Pratt Library",
        roomNumber: "302",
        capacity: 8,
        openTime: "08:00",
        closeTime: "22:00",
      },
    ];

    // Simulate a delay to mimic fetching data
    setTimeout(() => {
      setRooms(hardcodedRooms);
      setLoading(false);
    }, 500);
  };

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
          <Link href="/profile" className={styles.navLink}>
            Profile
          </Link>
        </nav>
      </header>
      <main className={styles.main}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Find Your Perfect Study Space</h1>
          <p className={styles.subtitle}>
            Book a study room in any UofT library quickly and easily.
          </p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>Search for a Room</h2>
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
        </div>

        {/* Room Results */}
        <div className={styles.results}>
          {loading ? (
            <p>Loading rooms...</p>
          ) : rooms.length > 0 ? (
            <ul className={styles.roomList}>
              {rooms.map((room) => (
                <li key={room.id} className={styles.roomItem}>
                  <strong>Library:</strong> {room.library} <br />
                  <strong>Room:</strong> {room.roomNumber} <br />
                  <strong>Capacity:</strong> {room.capacity} <br />
                  <strong>Available From:</strong> {room.openTime} - {room.closeTime}
                </li>
              ))}
            </ul>
          ) : (
            <p>No rooms available. Click "Search Available Rooms" to view rooms.</p>
          )}
        </div>
      </main>
      <footer className={styles.footer}>
        <p>Powered by <strong>LibraLink</strong> © 2024</p>
      </footer>
    </div>
  );
}
