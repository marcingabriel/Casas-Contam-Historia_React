
"use client";

import { Carousel } from "flowbite-react";

export function Component() {
  return (
    <div className="h-48 sm:h-60 md:h-64 lg:h-72 xl:h-80 2xl:h-96">
      <Carousel>
        <img
          src="img/Banner-Galeria.jpg"
          alt="Slide 1"
          className="h-full w-full object-contain sm:object-cover"
        />
      </Carousel>
    </div>
  );
}


