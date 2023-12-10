import React, {useEffect, useState} from 'react'
import '../styles/section1.css'

function Section2() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
      const handleScroll = () => {
          if (window.pageYOffset > 0) {
              setIsScrolled(true);
          } else {
              setIsScrolled(false);
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
      <div
          className={`sec1 flex items-center justify-start px-20 transition ease-in-out duration-500 ${
              isScrolled ? 'bg-white  text-black' : 'bg-black text-white'
          }`}
      >
        <div>
        <h2 className="text-sm text-gray-500 mb-2">Full Stack Developer | AI Development</h2>
          <h1>
              Saif Metwally
              <span className="text-orange-500">.</span>
          </h1>
        </div>

      </div>
  )
}

export default Section2