<template>
  <div>
    <HeroSection />
    <ServicesSection />
    <WhySection />
    <GallerySection />
    <LocationSection />
    <BookingSection />
    <ChatAgent />
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: { lang: 'en' },
  title: 'A.C.A No1 — Belgrade | Tires, Rims, Balancing',
  meta: [
    { name: 'description', content: 'A.C.A No1 tire shop in Belgrade (Zvezdara) — mounting, dismounting and balancing, used and new tires, steel and alloy rims. Smederevski put 3A, Belgrade.' },
    { property: 'og:title', content: 'A.C.A No1 — Belgrade' },
    { property: 'og:description', content: 'Tires, rims, balancing. Fast, fair, professional.' },
  ],
})

onMounted(() => {
  const els = document.querySelectorAll('.reveal')
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )
  els.forEach((el) => io.observe(el))
})
</script>
