<template>
  <header :class="['hdr', { scrolled }]">
    <div class="container hdr-inner">
      <a href="#top" class="logo" @click="closeMenu">
        <span class="logo-mark">
          <svg viewBox="0 0 40 40" width="34" height="34" aria-hidden="true">
            <circle cx="20" cy="20" r="18" fill="none" stroke="var(--orange)" stroke-width="3" />
            <circle cx="20" cy="20" r="7" fill="none" stroke="var(--orange)" stroke-width="3" />
            <g stroke="var(--orange)" stroke-width="2.4">
              <line x1="20" y1="2" x2="20" y2="13" />
              <line x1="20" y1="27" x2="20" y2="38" />
              <line x1="2" y1="20" x2="13" y2="20" />
              <line x1="27" y1="20" x2="38" y2="20" />
            </g>
          </svg>
        </span>
        <span class="logo-text">
          <strong>ACA No1</strong>
          <small>VULKANIZER</small>
        </span>
      </a>

      <nav :class="['nav', { open: menuOpen }]">
        <a href="#usluge" @click="closeMenu">{{ t.nav.services }}</a>
        <a href="#zasto" @click="closeMenu">{{ t.nav.why }}</a>
        <a href="#galerija" @click="closeMenu">{{ t.nav.gallery }}</a>
        <a href="#lokacija" @click="closeMenu">{{ t.nav.location }}</a>
        <a href="#termin" class="nav-cta" @click="closeMenu">{{ t.nav.book }}</a>
      </nav>

      <div class="hdr-right">
        <div class="lang-toggle">
          <NuxtLink to="/" :class="{ active: locale === 'sr' }">SR</NuxtLink>
          <span>/</span>
          <NuxtLink to="/en" :class="{ active: locale === 'en' }">EN</NuxtLink>
        </div>

        <a :href="shop.telLink" class="hdr-phone">
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>{{ shop.phone }}</span>
        </a>

        <button class="burger" :class="{ open: menuOpen }" @click="menuOpen = !menuOpen" aria-label="Meni">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
const shop = useShopInfo()
const t = useT()
const locale = useLocale()
const scrolled = ref(false)
const menuOpen = ref(false)

const closeMenu = () => (menuOpen.value = false)
const onScroll = () => (scrolled.value = window.scrollY > 30)

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.hdr {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: background 0.3s ease, border-color 0.3s ease, backdrop-filter 0.3s ease;
  background: transparent;
  border-bottom: 1px solid transparent;
}
.hdr.scrolled {
  background: rgba(12, 12, 13, 0.85);
  backdrop-filter: blur(14px);
  border-bottom-color: var(--line-soft);
}
.hdr-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}
.logo-mark {
  display: grid;
  place-items: center;
}
.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1;
}
.logo-text strong {
  font-family: var(--font-display);
  font-size: 1.35rem;
  letter-spacing: 0.02em;
}
.logo-text small {
  font-family: var(--font-cond);
  font-weight: 600;
  letter-spacing: 0.28em;
  font-size: 0.62rem;
  color: var(--orange);
  margin-top: 2px;
}

.nav {
  display: flex;
  align-items: center;
  gap: 30px;
}
.nav a {
  font-family: var(--font-cond);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-size: 0.98rem;
  color: var(--text-2);
  transition: color 0.2s ease;
}
.nav a:hover {
  color: var(--text);
}
.nav-cta {
  color: var(--orange) !important;
  border: 1.5px solid var(--orange);
  padding: 8px 16px;
  border-radius: var(--radius);
  transition: all 0.2s ease;
}
.nav-cta:hover {
  background: var(--orange);
  color: var(--black) !important;
}

.hdr-right {
  display: flex;
  align-items: center;
  gap: 18px;
}

.lang-toggle {
  display: flex;
  align-items: center;
  gap: 5px;
  font-family: var(--font-cond);
  font-weight: 700;
  font-size: 0.82rem;
  letter-spacing: 0.08em;
}
.lang-toggle a {
  color: var(--text-3);
  transition: color 0.2s ease;
}
.lang-toggle a:hover,
.lang-toggle a.active {
  color: var(--orange);
}
.lang-toggle span {
  color: var(--line);
}

.hdr-phone {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-cond);
  font-weight: 700;
  letter-spacing: 0.04em;
  color: var(--text);
  transition: color 0.2s ease;
}
.hdr-phone:hover {
  color: var(--orange);
}

.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 6px;
  width: auto;
}
.burger span {
  width: 26px;
  height: 2.5px;
  background: var(--text);
  border-radius: 2px;
  transition: transform 0.25s ease, opacity 0.2s ease;
}
.burger.open span:nth-child(1) {
  transform: translateY(7.5px) rotate(45deg);
}
.burger.open span:nth-child(2) {
  opacity: 0;
}
.burger.open span:nth-child(3) {
  transform: translateY(-7.5px) rotate(-45deg);
}

@media (max-width: 940px) {
  .hdr-phone span {
    display: none;
  }
}

@media (max-width: 860px) {
  .burger {
    display: flex;
  }
  .nav {
    position: fixed;
    top: 76px;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    background: var(--bg-2);
    border-bottom: 1px solid var(--line);
    padding: 8px 24px 20px;
    transform: translateY(-120%);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }
  .nav.open {
    transform: none;
    opacity: 1;
    pointer-events: auto;
  }
  .nav a {
    padding: 15px 0;
    border-bottom: 1px solid var(--line-soft);
    font-size: 1.1rem;
  }
  .nav-cta {
    margin-top: 12px;
    text-align: center;
    border-width: 1.5px;
  }
}
</style>
