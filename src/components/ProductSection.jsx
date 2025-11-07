const ProductSection = ({ section }) => (
  <section id={section.id}>
    <h2 className="ropa">{section.title}</h2>
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

export default ProductSection;
