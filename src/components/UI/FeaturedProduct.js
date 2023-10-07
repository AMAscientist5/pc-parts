import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeaturedProduct = ({ allCategory }) => {
  return (
    <div className="lg:flex lg:flex-wrap items-center justify-center gap-4 mb-20">
      {allCategory?.map((category) => (
        <Link key={category.id} href={`/${category?.categoryName}`}>
          <div className="relative">
            <Image
              className="w-full"
              src={category.image}
              width={105}
              height={150}
              alt={`${category.category}-image`}
            ></Image>
            <div className="absolute top-0 left-0 w-full h-full flex items-center">
              <p className="text-xl font-bold w-full text-center text-white">
                {category?.category}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedProduct;
