"use client";

import { FaCaretUp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener
    const handleScroll = () => {
      // Check the scroll position, for example, scroll down 300 pixels to show the button
      const scrollPosition = window.scrollY;
      const shouldShowButton = scrollPosition > 300;

      // Update the state to show/hide the button
      setIsVisible(shouldShowButton);
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  return (
    <button
      className={`fixed bottom-[10%] right-4 w-14 h-14 rounded-full bg-cyan/60 text-white text-3xl flex items-center justify-center lg:hidden ${
        isVisible ? "visible" : "invisible"
      }`}
      onClick={scrollToTop}
    >
      <FaCaretUp />
    </button>
  );
}
