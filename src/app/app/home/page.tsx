'use client';
import React, { useEffect } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

export default function Home() {
  useEffect(() => {
    async function getProfile() {
      const data = await axios.get(
        'http://localhost:8085/api/v1/users/profile'
      );
      console.log(data);
    }

    getProfile();
  }, []);

  return <div>Home</div>;
}
