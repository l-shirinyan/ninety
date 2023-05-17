import React, { useEffect, useRef } from "react";
import { useState } from "react";
const MainPage = () => {
  const text = ["hello", "hello1", "hello2"];
  const test = ["text1", "text2", "text3"];
  const [active, setActive] = useState(1);
  const observerRef = useRef(null);
  const handleObserver = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const index = parseInt(entry.target.dataset.index);
        setActive(index);
      }
    });
  };
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };
    observerRef.current = new IntersectionObserver(handleObserver, observerOptions);
    return () => {
      observerRef.current.disconnect();
    };
  }, []);
  useEffect(() => {
    const elements = document.querySelectorAll('.height');
    elements.forEach((element) => observerRef.current.observe(element));
    return () => {
      elements.forEach((element) => observerRef.current.unobserve(element));
    };
  }, [text]);
  return (
    <div>
      <div className="flex">
        {text.map((t, index) => (
          <div key={index} className="height" data-index={index}>
            {t}
          </div>
        ))}
      </div>
      <div>
        {test.map((t, index) => (
          <p key={index} className={`${active === index ? 'active' : ''}`}>
            {t}
          </p>
        ))}
      </div>
    </div>
  );
};
export default MainPage;