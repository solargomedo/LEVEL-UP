import Header from './Header.jsx';
import CategorySelects from './CategorySelects.jsx';
import ProductSection from './ProductSection.jsx';
import Footer from './Footer.jsx';
import { productSections } from '../data/sections.js';

const Storefront = ({ headerVariant }) => (
  <>
    <div className="container">
      <Header variant={headerVariant} />
      <main>
        <section>
          <CategorySelects />
          {productSections.map((section) => (
            <ProductSection key={section.id} section={section} />
          ))}
        </section>
      </main>
    </div>
    <Footer />
  </>
);

export default Storefront;
