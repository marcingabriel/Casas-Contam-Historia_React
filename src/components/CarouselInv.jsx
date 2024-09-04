
"use client";

import { Carousel } from "flowbite-react";

export function Component() {
  return (
    <div className="h-60 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
      <img
          src="public/img/Banner-Galeria.jpg"
          alt="Slide 1"
          className="h-full w-full "
        />
       
      </Carousel>
    </div>
  );
}
