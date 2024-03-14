import { useLayoutEffect, useState } from 'react';

const queryString = '(max-width: 900px)';

export function useIsMobile(){
  const [mobile, setMobile] = useState(window.matchMedia(queryString).matches);
  useLayoutEffect(() => {
    const query = window.matchMedia(queryString);
    const listener = ({ matches }) => setMobile(matches);

    const register = () => query.addEventListener('change', listener);
    const unregister = () => query.removeEventListener('change', listener);

    register();
    setMobile(query.matches);
    return unregister;
  }, []);
  return mobile;
}
