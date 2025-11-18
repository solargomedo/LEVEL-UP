import Header from './Header.jsx';
import CategorySelects from './CategorySelects.jsx';
import ProductSection from './ProductSection.jsx';
import Footer from './Footer.jsx';
import { productSections } from '../data/sections.js';
import ProductList from './ProductList.jsx';
import { useState } from 'react';

const Storefront = ({ headerVariant }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  
  const showVerMas = headerVariant === 'customer';

  return (
    <>
      <div className="container">
        <Header variant={headerVariant} />
        <main>
          <section>
            <CategorySelects onSelect={(cat) => setSelectedCategory(cat)} />
            
            <h2 style={{ color: '#fff', marginTop: 20 }}>{selectedCategory ? `Filtrando: ${selectedCategory}` : 'Productos'}</h2>
            <ProductList categoria={selectedCategory} />
            
            {productSections.map((section) => (
              <ProductSection key={section.id} section={section} showVerMas={showVerMas} />
            ))}
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Storefront;