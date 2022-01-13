import React from 'react';

const Link = ({className, href, children}) => {
  const onClick = (event) => {
    // in the event of cmd+click, it should do the normal thing instead of the following lines
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', href); // rewriting URL

    // communicate that URL has just changed
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
      <a onClick={onClick} className={className} href={href}>
        {children}
      </a>
  );
};

export default Link;
