// Svi podaci o firmi na jednom mestu.
// Promeniš ovde -> menja se svuda na sajtu.

export const useShopInfo = () => {
  const info = {
    name: 'Vesa Vulkanizer',
    tagline: 'Gume, felne i balans — brzo, pošteno, kako treba.',
    rating: '4.2',
    reviewsCount: 215,
    reviewsUrl:
      'https://www.google.com/maps/search/?api=1&query=Vesa+Vulkanizer+Kalu%C4%91erica',

    // Kontakt
    phone: '063 203397',
    phoneRaw: '+38163203397', // za tel: i wa.me linkove (proveri da je tačan format!)
    address: 'Živorada Jakovljevića 1',
    city: 'Kaluđerica',
    country: 'Srbija',

    // Radno vreme (zatvara u 16h po Google podacima)
    hours: [
      { day: 'Ponedeljak — Petak', time: '08:30 — 16:00' },
      { day: 'Subota', time: '08:30 — 14:00' },
      { day: 'Nedelja', time: 'Zatvoreno' },
    ],

    // Mapa
    mapEmbed:
      'https://www.google.com/maps?q=Vesa+Vulkanizer+%C5%BDivorada+Jakovljevi%C4%87a+1+Kalu%C4%91erica&output=embed',
    mapLink:
      'https://www.google.com/maps/search/?api=1&query=Vesa+Vulkanizer+%C5%BDivorada+Jakovljevi%C4%87a+1+Kalu%C4%91erica',

    // Društvene / eksterno
    googleProfile:
      'https://www.google.com/maps/search/?api=1&query=Vesa+Vulkanizer+Kalu%C4%91erica',
  }

  // WhatsApp link sa unapred popunjenom porukom
  const waLink = (msg = 'Zdravo, zanima me termin za gume.') =>
    `https://wa.me/${info.phoneRaw.replace('+', '')}?text=${encodeURIComponent(msg)}`

  const telLink = `tel:${info.phoneRaw}`

  return { ...info, waLink, telLink }
}
