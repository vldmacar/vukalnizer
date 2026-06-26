// Svi podaci o firmi na jednom mestu.
// Promeniš ovde -> menja se svuda na sajtu.

export const useShopInfo = () => {
  const info = {
    name: 'A.C.A No1',
    tagline: 'Gume, felne i balans — brzo, pošteno, kako treba.',
    rating: '4.2',
    reviewsCount: 215,
    reviewsUrl:
      'https://www.google.com/maps/search/?api=1&query=A.C.A+No1+Smederevski+put+3A+Beograd',

    // Kontakt
    phone: '065 221 4144',
    phoneRaw: '+381652214144', // za tel: i wa.me linkove (proveri da je tačan format!)
    address: 'Smederevski put 3A',
    city: 'Beograd',
    country: 'Srbija',

    // Radno vreme (zatvara u 16h po Google podacima)
    hours: [
      { day: 'Ponedeljak — Petak', time: '08:30 — 16:00' },
      { day: 'Subota', time: '08:30 — 14:00' },
      { day: 'Nedelja', time: 'Zatvoreno' },
    ],

    // Mapa
    mapEmbed:
      'https://www.google.com/maps?q=A.C.A+No1+Smederevski+put+3A+Beograd&output=embed',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=A.C.A+No1+Smederevski+put+3A+Beograd',

    // Društvene / eksterno
    googleProfile:
      'https://www.google.com/maps/search/?api=1&query=A.C.A+No1+Smederevski+put+3A+Beograd',
  }

  // WhatsApp link sa unapred popunjenom porukom
  const waLink = (msg = 'Zdravo, zanima me termin za gume.') =>
    `https://wa.me/${info.phoneRaw.replace('+', '')}?text=${encodeURIComponent(msg)}`

  const telLink = `tel:${info.phoneRaw}`

  return { ...info, waLink, telLink }
}
