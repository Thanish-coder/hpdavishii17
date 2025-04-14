
const startTime = new Date("2024-01-20T10:47:23");

function updateStopwatch() {
  const now = new Date();
  let diff = Math.floor((now - startTime) / 1000);

  const days = Math.floor(diff / (3600 * 24));
  diff %= 3600 * 24;
  const hours = Math.floor(diff / 3600);
  diff %= 3600;
  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;

  const stopwatch = document.getElementById("stopwatch");
  stopwatch.textContent =
    `${days}d ${String(hours).padStart(2, '0')}h : ` +
    `${String(minutes).padStart(2, '0')}m : ` +
    `${String(seconds).padStart(2, '0')}s`;
}

updateStopwatch();
setInterval(updateStopwatch, 1000);
