console.log("navbar loaded");

fetch('/assets/components/navbar.html')
  .then(r => {
    if (!r.ok) throw new Error("Navbar not found");
    return r.text();
  })
  .then(html => {
    const el = document.getElementById('navbar');
    if (!el) throw new Error("No #navbar div found on page");
    el.innerHTML = html;
  })
