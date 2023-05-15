// Datos del menú
const menuItemsData = [
    { text: 'Inicio', link: '' },
    { text: 'Nosotros', link: '#final' },
    { text: 'Carta', link: '#menu-restaurante' },
    { text: 'Blog', link: '' },
    { text: 'Contacto', link: '' }
  ];
  
  // Obtener el elemento del DOM donde se mostrará el menú
  const menuList = document.getElementById('menu-list');
  
  // Generar los elementos de lista dinámicamente
  menuItemsData.forEach(item => {
    
    const listItem = document.createElement('li');
    listItem.classList.add('menu-item');
  
    const link = document.createElement('a');
    link.href = item.link;
    link.textContent = item.text;
  
    listItem.appendChild(link);
    menuList.appendChild(listItem);
  });


