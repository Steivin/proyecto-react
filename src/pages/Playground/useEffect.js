import { useState, useEffect } from 'react';

function Useffect() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(timer); // Cleanup
  }, []);

  return <p>Hora actual: {hora.toLocaleTimeString()}</p>;
}

export default Useffect;
