import { useMemo } from 'react';

function Usememo({ numero }) {
  const resultado = useMemo(() => {
    console.log('Calculando...');
    let total = 0;
    for (let i = 0; i < 1e6; i++) total += i;
    return numero * total;
  }, [numero]);

  return <p>Resultado: {resultado}</p>;
}
export default Usememo;