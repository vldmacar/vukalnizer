<template>
  <footer class="ftr">
    <div class="container">
      <div class="ftr-top">
        <div class="ftr-brand">
          <div class="logo">
            <svg viewBox="0 0 40 40" width="30" height="30" aria-hidden="true">
              <circle cx="20" cy="20" r="18" fill="none" stroke="var(--orange)" stroke-width="3" />
              <circle cx="20" cy="20" r="7" fill="none" stroke="var(--orange)" stroke-width="3" />
            </svg>
            <div>
              <strong>ACA No1</strong>
              <small>VULKANIZER</small>
            </div>
          </div>
          <p>{{ t.footer.shopTagline }}</p>
          <div class="ftr-rate">
            <span class="stars">★★★★★</span>
            <span>{{ shop.rating }} · {{ shop.reviewsCount }} {{ t.footer.reviewsLabel }}</span>
          </div>
        </div>

        <div class="ftr-col">
          <h4>{{ t.footer.servicesTitle }}</h4>
          <a v-for="s in t.footer.services" :key="s" href="#usluge">{{ s }}</a>
        </div>

        <div class="ftr-col">
          <h4>{{ t.footer.linksTitle }}</h4>
          <a href="#galerija">{{ t.footer.links[0] }}</a>
          <a href="#lokacija">{{ t.footer.links[1] }}</a>
          <a href="#termin">{{ t.footer.links[2] }}</a>
          <a :href="shop.mapLink" target="_blank" rel="noopener">{{ t.footer.links[3] }}</a>
        </div>

        <div class="ftr-col">
          <h4>{{ t.footer.contactTitle }}</h4>
          <a :href="shop.telLink" class="ftr-strong">{{ shop.phone }}</a>
          <span>{{ shop.address }}</span>
          <span>{{ shop.city }}, {{ shop.country }}</span>
          <a :href="shop.waLink()" target="_blank" rel="noopener" class="ftr-wa">WhatsApp →</a>
        </div>
      </div>

      <div class="ftr-bottom">
        <span>© {{ year }} {{ shop.name }}. {{ t.footer.rights }}</span>
        <span class="ftr-made">{{ t.footer.tagline }} — {{ shop.city }}</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const shop = useShopInfo()
const t = useT()
const year = new Date().getFullYear()
</script>

<style scoped>
.ftr {
  background: var(--bg-2);
  border-top: 1px solid var(--line);
  padding: 64px 0 30px;
}
.ftr-top {
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
  gap: 40px;
  padding-bottom: 44px;
  border-bottom: 1px solid var(--line-soft);
}
.logo {
  display: flex;
  align-items: center;
  gap: 11px;
  margin-bottom: 16px;
}
.logo strong {
  font-family: var(--font-display);
  font-size: 1.25rem;
  display: block;
  line-height: 1;
}
.logo small {
  font-family: var(--font-cond);
  font-weight: 600;
  letter-spacing: 0.26em;
  font-size: 0.6rem;
  color: var(--orange);
}
.ftr-brand p {
  color: var(--text-2);
  font-size: 0.98rem;
  max-width: 300px;
  margin-bottom: 16px;
}
.ftr-rate {
  display: flex;
  align-items: center;
  gap: 9px;
  font-family: var(--font-cond);
  font-size: 0.9rem;
  color: var(--text-2);
}
.stars {
  color: var(--amber);
  letter-spacing: 1px;
}

.ftr-col h4 {
  font-family: var(--font-cond);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 0.85rem;
  color: var(--text);
  margin-bottom: 16px;
}
.ftr-col a,
.ftr-col span {
  display: block;
  color: var(--text-3);
  font-size: 0.96rem;
  margin-bottom: 10px;
  transition: color 0.2s ease;
}
.ftr-col a:hover {
  color: var(--orange);
}
.ftr-strong {
  font-family: var(--font-display);
  font-size: 1.2rem;
  color: var(--text) !important;
}
.ftr-wa {
  color: #25d366 !important;
  font-weight: 600;
  font-family: var(--font-cond);
}

.ftr-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
  color: var(--text-3);
  font-size: 0.85rem;
  font-family: var(--font-cond);
  letter-spacing: 0.03em;
}

@media (max-width: 860px) {
  .ftr-top {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
}
@media (max-width: 520px) {
  .ftr-top {
    grid-template-columns: 1fr;
  }
  .ftr-bottom {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
}
</style>
