import { useNavigate } from 'react-router-dom';

const ProductSection = ({ section, showVerMas = false }) => {
  const navigate = useNavigate();

  const handleVerMas = () => {
    // navegar a la página de categoría usando el title (coincide con BD)
    navigate(`/categoria?categoria=${encodeURIComponent(section.title)}`);
  };

  return (
    <section id={section.id}>
      <div className="section-header">
        <h2 className="ropa" style={{ margin: 0 }}>{section.title}</h2>
        {/* Mostrar botón sólo si showVerMas === true */}
        {showVerMas && (
          <button
            onClick={handleVerMas}
            style={{
              background: '#15ff00',
              color: '#000',
              border: 'none',
              padding: '8px 12px',
              borderRadius: 8,
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            Ver más
          </button>
        )}
      </div>

      <div className="board">
        {section.items.map((item, index) => (
          <article className="card-compra" key={`${section.id}-${index}`}>
            <div className="card-body">
              <img src={`/img/${item}`} alt={section.title} loading="lazy" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;