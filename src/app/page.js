// The "use client" directive must be the first line
"use client";

// Import necessary components from Next.js and other libraries
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
    const [welcomeMessage, setWelcomeMessage] = useState('Welcome to LibraLink!');

    const updateMessage = () => {
        setWelcomeMessage('Thank you for visiting!');
    };

    return (
        <div className={styles.page}>
            <header className={styles.header}>
                <Image
                    src="/logo.svg" // Ensure you have this logo in your public directory
                    alt="LibraLink Logo"
                    width={150}
                    height={50}
                    priority
                />
                <nav>
                    <a href="#" className={styles.link}>Home</a>
                    <a href="#" className={styles.link}>About</a>
                    <a href="#" className={styles.link}>Contact</a>
                </nav>
            </header>
            <main className={styles.main}>
                <h1>{welcomeMessage}</h1>
                <button onClick={updateMessage} className={styles.button}>
                    Click me!
                </button>
                <ol>
                    <li>Edit <code>src/app/page.js</code> to modify this page.</li>
                    <li>Save and see your changes instantly.</li>
                </ol>
                <div className={styles.ctas}>
                    <a
                        className={styles.primary}
                        href="https://nextjs.org/docs"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn More
                    </a>
                </div>
            </main>
            <footer className={styles.footer}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/help.svg"
                        alt="Help icon"
                        width={16}
                        height={16}
                    />
                    Help
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/settings.svg"
                        alt="Settings icon"
                        width={16}
                        height={16}
                    />
                    Settings
                </a>
            </footer>
        </div>
    );
}
