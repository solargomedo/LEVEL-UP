import Header from './Header.jsx';
import CategorySelects from './CategorySelects.jsx';
import ProductSection from './ProductSection.jsx';
import Footer from './Footer.jsx';
import { productSections } from '../data/sections.js';
import { useState } from 'react';

const Storefront = ({ headerVariant }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // mostrar "Ver más" sólo si headerVariant === 'customer' (post-registro)
  const showVerMas = headerVariant === 'customer';

  return (
    <>
      <div className="container">
        <Header variant={headerVariant} />
        <main>
          <section>
            <CategorySelects onSelect={(cat) => setSelectedCategory(cat)} />
            

            
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