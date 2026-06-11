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
  title: 'Vesa Vulkanizer — Kaluđerica | Tires, Rims, Balancing',
  meta: [
    { name: 'description', content: 'Tire shop Vesa in Kaluđerica — mounting, dismounting and balancing, used and new tires, steel and alloy rims. Rating 4.2★.' },
    { property: 'og:title', content: 'Vesa Vulkanizer — Kaluđerica' },
    { property: 'og:description', content: 'Tires, rims, balancing. Fast, fair, professional. Rating 4.2★.' },
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
