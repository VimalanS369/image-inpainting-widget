// components/Footer.js
// A footer component with links and information about the application
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-gray-300 p-10">
      <aside>
        <p className="font-bold">
          Image Pipeline
          <br />
          Supporting and Empowering Model Creators
        </p>
      </aside>
      <nav>
        <div className="grid grid-flow-col gap-4">
          {/* Social media links */}
          <a href="https://twitter.com/imagepipeline" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775..." />
            </svg>
          </a>
          <a href="https://youtube.com/@imagepipeline" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0..." />
            </svg>
          </a>
          <a href="https://www.facebook.com/imagepipeline" target="_blank" rel="noopener noreferrer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4..." />
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;