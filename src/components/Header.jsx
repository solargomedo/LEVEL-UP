import { Link } from 'react-router-dom';

const Header = ({ variant = 'public' }) => {
  const isStorefront = variant === 'public' || variant === 'customer';

  return (
    <header className="header">
      <div className="header-left">
        <img src="/img/unnamed.png" className="img-logo" alt="Logo LEVEL-UP" />
        {variant !== 'register' && <h1 className="titulo">LEVEL-UP</h1>}
      </div>
      <div className="header-center">
        {isStorefront ? (
          <form onSubmit={(event) => event.preventDefault()}>
            <input
              type="text"
              name="search"
              autoComplete="off"
              placeholder="Busca tu favorito"
              className="search"
            />
          </form>
        ) : (
          <h1 className="titulo2">LEVEL-UP</h1>
        )}
      </div>
      <div className="header-right">
        {variant === 'public' && (
          <Link className="registrate" to="/registrate">
            REGÍSTRATE
          </Link>
        )}
        {variant === 'customer' && (
          <span role="img" aria-label="Carrito" aria-live="polite">
            🛒
          </span>
        )}
      </div>
    </header>
  );
};

export default Header;
