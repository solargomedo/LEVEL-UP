import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import { productSections } from '../data/sections.js';

const API = import.meta.env.VITE_API_URL || 'http://localhost:8081';

export default function CategoryPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const rawParam = searchParams.get('categoria');

  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  
  const resolveCandidates = (param) => {
    if (!param) return [];
    const list = [param];

    const sec = productSections.find(s => s.id === param);
    if (sec && sec.title && !list.includes(sec.title)) list.push(sec.title);

    const upper = param.toUpperCase();
    if (!list.includes(upper)) list.push(upper);

    const lower = param.toLowerCase();
    if (!list.includes(lower)) list.push(lower);

    return list;
  };

  useEffect(() => {
    if (!rawParam) {
      setProductos([]);
      return;
    }

    (async () => {
      setLoading(true);
      setError(null);
      setProductos([]);

      try {
        const candidates = resolveCandidates(rawParam);
        let found = false;
        let lastError = null;

        for (const c of candidates) {
          const url = `${API}/productos?categoria=${encodeURIComponent(c)}`;
          try {
            const res = await fetch(url);
            if (!res.ok) {
              const text = await res.text().catch(() => '');
              lastError = `Error ${res.status}: ${text || res.statusText}`;
              continue;
            }
            const data = await res.json();
            const list = Array.isArray(data) ? data : data.content || data.data || [];
            if (Array.isArray(list) && list.length > 0) {
              setProductos(list);
              found = true;
              lastError = null;
              break;
            }
          } catch (fetchErr) {
            lastError = fetchErr.message || 'Network error';
            continue;
          }
        }

        if (!found) {
          if (lastError) setError(lastError);
          else setError(null); 
          setProductos([]);
        }
      } catch (e) {
        console.error(e);
        setError('Error al cargar productos');
        setProductos([]);
      } finally {
        setLoading(false);
      }
    })();
    
  }, [rawParam]);

  const categoriaLabel = (() => {
    if (!rawParam) return 'Productos';
    const sec = productSections.find(s => s.id === rawParam);
    return sec?.title || rawParam;
  })();

  const handleVolver = () => {
    
    navigate('/post-registro');
  };

  return (
    <>
      <div className="container">
        
        <Header variant="customer" />

        <main style={{ paddingBottom: 40 }}>
          <div className="section-header" style={{ marginTop: 20 }}>
            <h2 className="page-title" style={{ margin: 0 }}>
              {rawParam ? `Productos: ${categoriaLabel}` : 'Productos'}
            </h2>

            
            <button
              onClick={handleVolver}
              className="btn-volver"
              aria-label="Volver a página post-registro"
            >
              Volver
            </button>
          </div>

          {loading && <p style={{ textAlign: 'center' }}>Cargando productos...</p>}
          {!loading && error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

          {!loading && !error && (
            <>
              {productos.length === 0 ? (
                <p style={{ textAlign: 'center', color: '#fff', gridColumn: '1/-1' }}>
                  No hay productos para esta categoría.
                </p>
              ) : (
                <div className="category-grid" style={{ marginTop: 12 }}>
                  {productos.map((p) => (
                    <div key={p.id ?? `${p.nombre}-${Math.random()}`}>
                      <ProductCard producto={p} />
                    </div>
                  ))}
                </div>
              )}
            </>
          )}
        </main>
      </div>
      <Footer />
    </>
  );
}