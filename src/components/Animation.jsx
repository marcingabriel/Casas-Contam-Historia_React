// src/hooks/useAnimateOnScroll.js
import { useEffect } from 'react';

const useAnimateOnScroll = () => {
  useEffect(() => {
    // Seleciona todos os elementos que deseja animar
    const elementsToAnimate = document.querySelectorAll('.animate');
    const elementsToAnimateLeft = document.querySelectorAll('.animate-left');
    const elementsToAnimateUp = document.querySelectorAll('.animate-up');

    const animateElements = (elements, animationClasses) => {
      elements.forEach(element => {
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add(...animationClasses);
              observer.unobserve(entry.target);
            }
          });
        });
        observer.observe(element);
      });
    };

    // Animação para elementos com a classe 'animate'
    animateElements(elementsToAnimate, [
      'opacity-100',
      'animate-fade-down',
      'animate-once',
      'animate-delay-400',
      'animate-ease-in'
    ]);

    // Animação para elementos com a classe 'animate-left'
    animateElements(elementsToAnimateLeft, [
      'opacity-100',
      'animate-fade-left',
      'animate-once',
      'animate-delay-200',
      'animate-ease-in'
    ]);

    // Animação para elementos com a classe 'animate-up'
    animateElements(elementsToAnimateUp, [
      'opacity-100',
      'animate-fade-up',
      'animate-once',
      'animate-delay-700',
      'animate-ease-in-out',
      'animate-alternate',
      'animate-fill-both'
    ]);
  }, []);
};

export default useAnimateOnScroll;
