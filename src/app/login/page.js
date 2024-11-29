
'use client';

import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() =>
          signIn('google', {
            callbackUrl: '/',
          })
        }
      >
        Sign in with Google
      </button>
    </div>
  );
}
