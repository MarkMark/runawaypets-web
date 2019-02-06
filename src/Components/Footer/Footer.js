import React from 'react';

export default function Footer () {
  return (
    <footer className="m-footer">
      <nav>
        <ul>
          <li>
            <a href="/test" title="test">Home</a>
          </li>
          <li>
            <a href="/test" title="test">Terms</a>
          </li>
          <li>
            <a href="/test" title="test">Privacy</a>
          </li>
        </ul>
        <p className="a-copy">© {new Date ().getFullYear ()} - Runaway pets</p>
      </nav>
    </footer>
  );
}
