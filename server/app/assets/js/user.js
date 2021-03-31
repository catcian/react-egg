'use strict';

// alert('user.js');
function login() {
  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'CatCian',
      pwd: 'admin',
    }),
  })
    .finally(() => {
      location.reload();
    });
}

function logout() {
  fetch('/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'CatCian',
      pwd: 'admin',
    }),
  })
    .finally(() => {
      location.reload();
    });
}
