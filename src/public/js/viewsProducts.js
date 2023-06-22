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
  });*/


  // Función para agregar un producto al carrito sin recargar la página
async function addToCart(productId) {
    try {
      const response = await fetch(`api/carts/product/${productId}`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Producto agregado al carrito:', data);
        // Actualizar la vista del carrito si es necesario
      } else {
        console.error('Error al agregar producto al carrito:', response.status);
      }
    } catch (error) {
      console.error('Error al agregar producto al carrito:', error);
    }
  }
  
  // Obtener todos los botones "Agregar al carrito"
  const addToCartBtns = document.querySelectorAll('.addToCart-btn');
  
  // Agregar un evento de clic a cada botón
  addToCartBtns.forEach((button) => {
    button.addEventListener('click', (evt) => {
      const productId = evt.target.dataset.productId;
      addToCart(productId);
    });
  });
  
  // Función para cambiar de página sin recargar la página
  function changePage(pageNumber) {
    const url = `http://localhost:8085/products?page=${pageNumber}`;
  
    // Realizar una solicitud AJAX para obtener los datos de la página seleccionada
    fetch(url)
      .then(response => response.json())
      .then(data => {
        // Actualizar la vista con los nuevos datos
        updateView(data);
        history.pushState({ page: pageNumber }, '', url); // Actualizar la URL en la barra de direcciones sin recargar la página
      })
      .catch(error => {
        console.error('Error al cargar los datos de la página:', error);
      });
  }
  
  // Obtener el menú desplegable de selección de página
  const selectElement = document.getElementById('pageSelect');
  selectElement.value = currentPage;
  
  // Agregar un evento de cambio al menú desplegable
  selectElement.addEventListener('change', () => {
    let selectedPage = selectElement.value;
    changePage(selectedPage);
  });
  // Función para actualizar la vista con los nuevos datos recibidos
function updateView(data) {
    // Compilar el template de Handlebars
    const templateSource = document.getElementById('product-template').innerHTML;
    const template = Handlebars.compile(templateSource);
  
    // Renderizar los datos en el template
    const renderedHTML = template(data);
  
    // Actualizar la vista con el HTML renderizado
    const productList = document.querySelector('.productListUpdated');
    productList.innerHTML = renderedHTML;
  }
  
  
});