import React, { useEffect, useState } from 'react';
import './CSSTransition.scss';

const CSSTransition = ({ type, show, duration = 800, children }) => {
  const [render, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    render && (
      <div
        style={{ animation: `${show ? `${type}In` : `${type}Out`} ${duration}ms` }}
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default CSSTransition;
