const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Simulim edukativ: thjesht shfaq mesazh
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  message.textContent = `This is a phishing simulation. Do NOT use real credentials. Entered username: ${username}`;
  
  form.reset();
});
