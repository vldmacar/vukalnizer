<template>
  <div>
    <button class="agent-fab" :class="{ hidden: open }" @click="toggle" aria-label="Pitaj Vesu">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
      <span class="fab-ping"></span>
    </button>

    <transition name="agent">
      <div v-if="open" class="agent-panel">
        <div class="agent-head">
          <div class="agent-id">
            <span class="agent-dot"></span>
            <div>
              <strong>{{ t.chat.agentName }}</strong>
              <small>{{ t.chat.agentStatus }}</small>
            </div>
          </div>
          <button class="agent-close" @click="toggle" aria-label="Zatvori">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div ref="scrollArea" class="agent-body">
          <div
            v-for="(m, i) in messages"
            :key="i"
            :class="['msg', m.from === 'user' ? 'msg-user' : 'msg-bot']"
          >
            <div class="bubble" v-html="m.text"></div>
          </div>

          <div v-if="typing" class="msg msg-bot">
            <div class="bubble typing">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>

        <div class="agent-suggestions">
          <button v-for="q in currentSuggestions" :key="q.q" class="chip" @click="ask(q)">
            {{ q.q }}
          </button>
        </div>

        <div class="agent-foot">
          <a :href="shop.waLink(t.chat.waDefault)" target="_blank" rel="noopener" class="foot-wa">
            <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.5.1-.2.2-.6.8-.7.9-.1.2-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2.1-.1 0-.3 0-.4l-.7-1.7c-.2-.5-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2c0 1.3 1 2.6 1.1 2.7.1.2 1.9 2.9 4.6 4 1.7.7 2.4.8 3.2.7.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1l-.4-.2z"/>
            </svg>
            {{ t.chat.waBtn }}
          </a>
          <a :href="shop.telLink" class="foot-call">{{ t.chat.callBtn }}</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const shop = useShopInfo()
const t = useT()
const open = ref(false)
const typing = ref(false)
const scrollArea = ref(null)

const messages = ref([])

const resolvedKnowledge = computed(() =>
  t.value.chat.knowledge.map((item) => ({
    ...item,
    a: item.a.replace('{{addr}}', shop.address).replace('{{city}}', shop.city),
  }))
)

onMounted(() => {
  messages.value = [{ from: 'bot', text: t.value.chat.greeting }]
})

const currentSuggestions = ref([])

function pickSuggestions() {
  const asked = messages.value.filter((m) => m.from === 'user').map((m) => m.text)
  const pool = resolvedKnowledge.value.filter((k) => !asked.includes(k.q))
  return (pool.length ? pool : resolvedKnowledge.value).slice(0, 4)
}

watch(resolvedKnowledge, () => {
  currentSuggestions.value = pickSuggestions()
}, { immediate: true })

function scrollDown() {
  nextTick(() => {
    if (scrollArea.value) scrollArea.value.scrollTop = scrollArea.value.scrollHeight
  })
}

function ask(item) {
  messages.value.push({ from: 'user', text: item.q })
  currentSuggestions.value = []
  scrollDown()

  typing.value = true
  setTimeout(() => {
    typing.value = false
    messages.value.push({ from: 'bot', text: item.a })
    currentSuggestions.value = pickSuggestions()
    scrollDown()
  }, 650)
}

function toggle() {
  open.value = !open.value
  if (open.value) scrollDown()
}

const handleOpen = () => {
  open.value = true
  scrollDown()
}
onMounted(() => window.addEventListener('open-agent', handleOpen))
onUnmounted(() => window.removeEventListener('open-agent', handleOpen))
</script>

<style scoped>
/* FAB */
.agent-fab {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 96;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background: var(--orange);
  color: var(--black);
  cursor: pointer;
  display: grid;
  place-items: center;
  box-shadow: var(--shadow-orange);
  transition: transform 0.25s ease, opacity 0.2s ease;
}
.agent-fab svg {
  width: 26px;
  height: 26px;
}
.agent-fab:hover {
  transform: scale(1.08) rotate(-4deg);
}
.agent-fab.hidden {
  opacity: 0;
  pointer-events: none;
  transform: scale(0.6);
}
.fab-ping {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid var(--orange);
  animation: ping 2s ease-out infinite;
}
@keyframes ping {
  0% { transform: scale(1); opacity: 0.7; }
  100% { transform: scale(1.6); opacity: 0; }
}

/* Panel */
.agent-panel {
  position: fixed;
  right: 24px;
  bottom: 24px;
  z-index: 97;
  width: min(380px, calc(100vw - 32px));
  height: min(560px, calc(100vh - 100px));
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.agent-head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: var(--bg-2);
  border-bottom: 1px solid var(--line);
}
.agent-id {
  display: flex;
  align-items: center;
  gap: 11px;
}
.agent-id strong {
  font-family: var(--font-cond);
  font-weight: 700;
  font-size: 1.05rem;
  display: block;
}
.agent-id small {
  color: var(--text-3);
  font-size: 0.78rem;
}
.agent-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #34d058;
  box-shadow: 0 0 0 3px rgba(52, 208, 88, 0.2);
}
.agent-close {
  background: transparent;
  border: none;
  color: var(--text-2);
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  border-radius: var(--radius);
  transition: background 0.2s, color 0.2s;
}
.agent-close:hover {
  background: var(--bg-3);
  color: var(--text);
}
.agent-close svg {
  width: 18px;
  height: 18px;
}

.agent-body {
  flex: 1;
  overflow-y: auto;
  padding: 18px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.msg {
  display: flex;
}
.msg-bot {
  justify-content: flex-start;
}
.msg-user {
  justify-content: flex-end;
}
.bubble {
  max-width: 84%;
  padding: 11px 14px;
  border-radius: 14px;
  font-size: 0.94rem;
  line-height: 1.5;
}
.msg-bot .bubble {
  background: var(--bg-3);
  border: 1px solid var(--line-soft);
  border-bottom-left-radius: 4px;
}
.msg-user .bubble {
  background: var(--orange);
  color: var(--black);
  font-weight: 500;
  border-bottom-right-radius: 4px;
}
.bubble :deep(b) {
  color: var(--orange-bright);
}
.msg-user .bubble :deep(b) {
  color: var(--black);
}

.typing {
  display: flex;
  gap: 4px;
  align-items: center;
}
.typing span {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--text-3);
  animation: bounce 1.2s infinite;
}
.typing span:nth-child(2) { animation-delay: 0.15s; }
.typing span:nth-child(3) { animation-delay: 0.3s; }
@keyframes bounce {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.5; }
  30% { transform: translateY(-5px); opacity: 1; }
}

.agent-suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 0 16px 12px;
}
.chip {
  background: transparent;
  border: 1.5px solid var(--line);
  color: var(--text-2);
  font-family: var(--font-cond);
  font-weight: 600;
  font-size: 0.82rem;
  padding: 7px 12px;
  border-radius: 100px;
  cursor: pointer;
  transition: all 0.18s ease;
  width: auto;
}
.chip:hover {
  border-color: var(--orange);
  color: var(--orange);
  transform: translateY(-1px);
}

.agent-foot {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 8px;
  padding: 12px 16px;
  border-top: 1px solid var(--line);
  background: var(--bg-2);
}
.foot-wa, .foot-call {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  font-family: var(--font-cond);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.88rem;
  padding: 11px;
  border-radius: var(--radius);
  transition: all 0.2s ease;
}
.foot-wa {
  background: #25d366;
  color: #042a13;
}
.foot-wa:hover {
  filter: brightness(1.08);
}
.foot-call {
  border: 1.5px solid var(--line);
  color: var(--text);
}
.foot-call:hover {
  border-color: var(--orange);
  color: var(--orange);
}

.agent-enter-active, .agent-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.agent-enter-from, .agent-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.96);
}

@media (max-width: 760px) {
  .agent-fab {
    bottom: 88px;
    right: 16px;
    width: 54px;
    height: 54px;
  }
  .agent-panel {
    right: 8px;
    left: 8px;
    bottom: 8px;
    width: auto;
    height: min(75vh, 540px);
  }
}
</style>
