fetch('products.json')
  .then(response => response.json())
  .then(products => {
    const grid = document.getElementById('product-grid');
    products.forEach(p => {
      const div = document.createElement('div');
      div.className = 'product';
      div.innerHTML = `
        <img src="${p.image}" alt="${p.title}" style="max-width:100%;border-radius:8px;">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <a href="${p.link}" target="_blank">Shop Now</a>
      `;
      grid.appendChild(div);
    });
  });
