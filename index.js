// ── Epoch time display ──
// Updates every 1000ms as required by spec
const epochEl = document.getElementById('epochTime');

function updateTime() {
  const now = Date.now();
  epochEl.textContent = now + ' ms';
  epochEl.setAttribute('datetime', new Date(now).toISOString());
}

updateTime();
setInterval(updateTime, 1000);
