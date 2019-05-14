import React, { useContext } from 'react';
import { Route, __RouterContext } from 'react-router';
import { animated, useTransition } from 'react-spring';
import { Routes } from 'react-static';

function RouteTransitions() {
  const { location } = useContext(__RouterContext);

  const fade = {
    from: {
      opacity: 0,
      position: 'absolute'
    },
    enter: {
      opacity: 1,
      position: 'relative'
    },
    update: {
      opacity: 1
    },
    leave: {
      position: 'absolute',
      height: '100vh',
      width: '100vw',
      overflowY: 'visible',
      opacity: 0
    }
  };

  const transitions = useTransition(
    location,
    location => location.pathname,
    fade
  );

  return (
    <Route
      render={() => (
        <>
          {transitions.map(({ item, props, key }) => {
            return (
              <animated.div key={key} style={props}>
                <Routes routePath={item.pathname} />
              </animated.div>
            );
          })}
        </>
      )}
    />
  );
}

export default RouteTransitions;
