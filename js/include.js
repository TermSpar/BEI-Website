function includeHTML() {
  const includes = document.querySelectorAll('[data-include]');
  includes.forEach(el => {
    const file = el.getAttribute('data-include');
    fetch(file)
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
      })
      .then(data => {
        el.innerHTML = data;
      })
      .catch(err => console.error('Include error:', err));
  });
}

document.addEventListener('DOMContentLoaded', includeHTML);
