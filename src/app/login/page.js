"use client";

import { signIn } from "next-auth/react";
import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to LibraLink</h1>
      <p className={styles.paragraph}>
        Please log in with your Google account to access the library booking system.
      </p>
      <button
        onClick={() => signIn("google")}
        className={styles.button}
      >
        Sign in with Google
      </button>
    </div>
  );
}
