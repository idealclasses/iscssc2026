(function protectPage() {
  const session = localStorage.getItem('studentHubSession');
  const isNestedPage = window.location.pathname.includes('/subjects/') || window.location.pathname.includes('/farewell/');
  const loginPath = isNestedPage ? '../login.html' : 'login.html';
  if (!session) window.location.replace(loginPath);

  document.addEventListener('DOMContentLoaded', () => {
    const authNavLink = document.getElementById('authNavLink');
    if (!authNavLink) return;
    authNavLink.textContent = session ? 'Profile' : 'Sign in';
    authNavLink.href = session ? 'profile.html' : 'login.html';
  });
})();
