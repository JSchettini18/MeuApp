import { useEffect, useState } from 'react';

export function useCarros() {
  const [carros, setCarros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setCarros([
        {
          id: 1,
          nome: 'BMW 135I M SPORT',
          descricao: 'BMW M 135I 2.0 16V TURBO GASOLINA XDRIVE AUTOMÁTICO',
          preco: 259599,
          km: '20.769 km',
          imagem: 'https://images.classic.com/vehicles/1da6c4d0f44c6e76ca49bb84158b3dbcc02215b3.jpg',
        },
        {
          id: 2,
          nome: 'BMW M3 COMPETITION',
          descricao: '3.0 I6 TWINTURBO GASOLINA COMPETITION M STEPTRONIC',
          preco: 599999,
          km: '19.600 km',
          imagem: 'https://i0.statig.com.br/bancodeimagens/ba/14/d2/ba14d28j015jcee6codqxpvx6.jpg',
        },
        {
          id: 3,
          nome: 'PORSCHE 911.2 GT3',
          descricao: '4.0 24V H6 GASOLINA GT3 PDK',
          preco: 259599,
          km: '4.600 km',
          imagem: 'https://cimg0.ibsrv.net/ibimg/hgm/1920x1080-1/100/789/porsche-911-carrera_100789608.jpg',
        },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  return { carros, loading };
}
