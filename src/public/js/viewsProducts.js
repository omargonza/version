document.addEventListener('DOMContentLoaded', () => {
    const addTocartBtn = document.querySelectorAll('.addToCart-btn');
  /*
    addTocartBtn.forEach((button) => {
      button.addEventListener('click', async (evt) => {
        const productId = evt.target.dataset.productId;
        fetch(`api/carts/product/${productId}`, {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Producto agregado al carrito:', data);
          })
          
          .catch((err) => {
            console.error('Error adding product to cart:', err);
          });
      });
    });
  });*/
  addTocartBtn.forEach((button) => {
    button.addEventListener('click', async (evt) => {
      const productId = evt.target.dataset.productId;
      fetch(`api/carts/product/${productId}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('Producto agregado al carrito:', data);
          // Redireccionar a la vista de Handlebars después de agregar el producto al carrito
          window.location.href = "http://localhost:8085/productId";
        })
        .catch((err) => {
          console.error('Error adding product to cart:', err);
        });
    });
  });
});
  
  // Pagination config for UI
  const selectElement = document.getElementById('pageSelect');
  selectElement.value = currentPage;
  
  selectElement.addEventListener('change', () => {
    let selectedPage = selectElement.value;
    window.location.href = `http://localhost:8085/products?page=${selectedPage}`;
  });