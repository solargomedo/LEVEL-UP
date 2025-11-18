import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { productSections } from '../data/sections.js';

const API = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export default function CategoryPage() {
  const [searchParams] = useSearchParams();
  const rawParam = searchParams.get('categoria');
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // resolver candidatos simple: title o raw
  const resolveCandidates = (param) => {
    if (!param) return [];
    const list = [param];
    const sec = productSections.find(s => s.id === param);
    if (sec && sec.title) list.push(sec.title);
    const upper = param.toUpperCase();
    if (!list.includes(upper)) list.push(upper);
    return list;
  };

  useEffect(() => {
    if (!rawParam) return;
    (async () => {
      setLoading(true);
      setError(null);
      setProductos([]);
      try {
        const candidates = resolveCandidates(rawParam);
        let found = false;
        for (const c of candidates) {
          const url = `${API}/productos?categoria=${encodeURIComponent(c)}`;
          const res = await fetch(url);
          if (!res.ok) continue;
          const data = await res.json();
          const list = Array.isArray(data) ? data : data.content || [];
          if (list.length > 0) {
            setProductos(list);
            found = true;
            break;
          }
        }
        if (!found) {
          setProductos([]);
        }
      } catch (e) {
        setError('Error al cargar productos');
        setProductos([]);
      } finally {
        setLoading(false);
      }
    })();
  }, [rawParam]);

  return (
    <>
      <div className="container">
        <Header variant="public" />
        <main style={{ paddingBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
            <h2 className="ropa" style={{ margin: 0 }}>{rawParam ? `Productos: ${rawParam}` : 'Productos'}</h2>
            <Link to="/" style={{ color: '#fff', textDecoration: 'underline' }}>Volver</Link>
          </div>

          {loading && <p style={{ textAlign: 'center' }}>Cargando productos...</p>}
          {!loading && error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

          {!loading && !error && (
            <div className="category-grid">
              {productos.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#fff', gridColumn: '1/-1' }}>No hay productos para esta categoría.</p>
              ) : (
                productos.map(p => (
                  <div key={p.id}>
                    <ProductCard producto={p} />
                  </div>
                ))
              )}
            </div>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}