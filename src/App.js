import { Link } from 'components/Router';
import React from 'react';
import { Switch } from 'react-router';
import { Root } from 'react-static';
import './app.css';
import RouteTransitions from './components/RouteTransitions';

function App() {
  return (
    <Root>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/dynamic">Dynamic</Link>
      </nav>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Switch>
            <RouteTransitions />
          </Switch>
        </React.Suspense>
      </div>
    </Root>
  );
}

export default App;
