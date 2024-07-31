import { useEffect, useState } from 'react';

function useSession(key: 'session' | string = 'session') {
  const [session, setSession] = useState<object | null>();
  useEffect(
    function () {
      if (typeof window !== 'undefined') {
        const sessionString = window.localStorage.getItem(key) as string;
        setSession(JSON.parse(sessionString));
      }
    },
    [key]
  );

  return session;
}

export default useSession;
