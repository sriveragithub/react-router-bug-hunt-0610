import React from 'react';

import { Link } from 'react-router-dom';

export default props => (
  <>
    <h1 className="error">404</h1>
    <p>Oops! Something is wrong.</p>
    <Link to="/" className="button">
      Go Home
    </Link>
  </>
);
