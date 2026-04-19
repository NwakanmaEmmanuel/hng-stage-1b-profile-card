// ── Epoch time display ──
const epochEl = document.getElementById('epochTime');

function updateTime() {
  const now = Date.now();
  epochEl.textContent = now + ' ms';
  epochEl.setAttribute('datetime', new Date(now).toISOString());
}

updateTime();
setInterval(updateTime, 1000);
