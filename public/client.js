async function checkHealth() {
  const out = document.getElementById('output');
  const status = document.getElementById('status');
  try {
    const res = await fetch('/health');
    const json = await res.json();
    status.textContent = 'OK';
    out.textContent = JSON.stringify(json, null, 2);
  } catch (err) {
    status.textContent = 'Error';
    out.textContent = err.toString();
  }
}

window.addEventListener('load', () => {
  document.getElementById('check').addEventListener('click', checkHealth);
  checkHealth();
});
