import React from 'react';

export default function ProductCard({ producto }) {
  // determina si está agotado: soporta producto.agotado o producto.stock === 0
  const soldOut = producto?.agotado === true || (typeof producto?.stock === 'number' && producto.stock === 0);

  // Formatea precio para mostrar $209.990 CLP
  const precio = producto?.precio ?? 0;
  // Intl para miles con punto en notación CL: "209.990"
  const formattedNumber = new Intl.NumberFormat('es-CL', { maximumFractionDigits: 0 }).format(precio);
  const formatted = `$${formattedNumber} CLP`;

  // ruta de imagen (tu proyecto usa /img/...)
  const imgSrc = producto?.imagenUrl || '/img/placeholder.png';

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={imgSrc} alt={producto?.nombre || 'Producto'} />
        {soldOut && <div className="product-badge">Agotado</div>}
      </div>

      <div className="product-info">
        <h3 className="product-name">{producto?.nombre || 'Sin nombre'}</h3>
        <div className="product-price">{formatted}</div>
      </div>
    </div>
  );
}