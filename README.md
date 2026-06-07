# Vulkanizer Boki — sajt

Sajt za **Vulkanizer Boki**, Kaluđerica. Napravljen u **Nuxt 3 + Vue 3**.
Dizajn: moto / nabuđen stil (tamna tema, narandžasto-crna).

---

## Šta sajt ima

- Hero sa ocenom (4.9★) i CTA dugmadima
- Sekcija usluga (gume, balans, felne, farbanje felni…)
- "Zašto Boki" sa prednostima
- Galerija (free Unsplash fotografije — auto/gume/radionica)
- **Lokacija** sa Google mapom, adresom i radnim vremenom
- **Zakaži termin** — forma koja otvara WhatsApp sa gotovom porukom
- **Agent / pomoćnik** sa predlozima pitanja (radi bez interneta/API-ja)
- **Mobilni donji bar**: Kontakt · Lokacija · Zakaži · Pitaj (vidi se na telefonu)

---

## Pokretanje u lokalu (VSCode)

Treba ti **Node.js 18+** (preporuka 20+).

```bash
# 1. instaliraj zavisnosti
npm install

# 2. pokreni dev server
npm run dev
```

Otvori `http://localhost:3000` u pregledaču.

> Prvi `npm install` traje malo duže jer skida Nuxt. Normalno.

---

## Gde menjam podatke (telefon, adresa, radno vreme)

**Sve je na jednom mestu:** `composables/useShopInfo.ts`

Tu menjaš:
- `phone` — prikazani broj
- `phoneRaw` — broj za pozive i WhatsApp (format `+381...`, **proveri da je tačan!**)
- `address`, `city`
- `hours` — radno vreme
- `mapEmbed` / `mapLink` — mapa

⚠️ **Bitno:** `phoneRaw` sam stavio kao `+381632906000` na osnovu broja `063 290600`.
Proveri da li je tačan broj cifara — ako WhatsApp ne radi, ispravi ga ovde.

---

## Fotografije

Trenutno se koriste **Unsplash** fotografije (besplatne) preko linkova u:
- `components/HeroSection.vue`
- `components/WhySection.vue`
- `components/GallerySection.vue`

Kad budeš imao **prave fotografije radionice**, ubaci ih u folder `public/`
(npr. `public/radionica-1.jpg`) i u komponentama zameni Unsplash link sa `/radionica-1.jpg`.

---

## Postavljanje na GitHub + Vercel

### GitHub
```bash
git init
git add .
git commit -m "Vulkanizer Boki - sajt"
git branch -M main
git remote add origin <URL-tvog-repo>
git push -u origin main
```

### Vercel
1. Idi na [vercel.com](https://vercel.com), uloguj se preko GitHub-a
2. **Add New → Project** → izaberi ovaj repo
3. Vercel automatski prepozna Nuxt — samo klikni **Deploy**
4. Gotovo, dobiješ link tipa `vulkanizer-boki.vercel.app`

Nije potrebno nikakvo dodatno podešavanje.

---

## Tri opcije dizajna

Ovo je **moto / nabuđena** verzija. Druge dve (profesionalna i moderna)
mogu se napraviti kao zasebne grane ili projekti — javi pa ih dodamo.
# vukalnizer-boki
