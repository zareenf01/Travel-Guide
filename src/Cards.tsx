import { Link } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import data from "./data";

function Cards() {
  return (
    <div className="mt-20 overflow-x-scroll p-3">
      <h1 className="text-[#bd5757] text-4xl font-semibold px-10">
        Explore Places
      </h1>
      <Carousel>
        <CarouselContent className="px-20 mt-10 flex ">
          {data.map((card) => (
            <CarouselItem className=" md:basis-1/2 lg:basis-1/3 rounded-lg shadow-xl max-w-80 p-5 pl-4 mx-4 cursor-pointer">
              <Link to={`/details/${card.id}`}>
                <img
                  src={card.coverImg}
                  alt=""
                  className="h-52 hover:scale-110 duration-300"
                />

                <div className="mt-5">
                  <h1 className="text-base md:text-lg font-semibold">
                    {card.title}
                  </h1>
                  <div className="flex items-center justify-between">
                    <div className="">
                      <h2 className="text-[#b33e3e]   font-medium">
                        Duration • {card.duration}
                      </h2>
                    </div>
                    <span className="inline-flex items-center">
                      <img
                        src="images/star.png"
                        alt="star"
                        className="w-3 md:w-4 mx-1"
                      />
                      <h1 className="text-[#b33e3e] text-base md:text-lg">
                        {card.stats.rating} ({card.stats.reviewCount})
                      </h1>
                    </span>
                  </div>

                  <h1 className="font-bold mt-8 text-lg">
                    From ₹{card.price}{" "}
                    <span className="font-normal"> per person</span>
                  </h1>
                </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Cards;
