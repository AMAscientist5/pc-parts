import React from "react";
import { Button, Card } from "antd";
import Image from "next/image";
import Link from "next/link";

const Featured = ({ pcData }) => {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-center gap-8 my-8">
      {pcData.slice(0, 6).map((product, i) => (
        <Card
          className="w-full lg:w-[350px] shadow-2xl h-[540px]"
          key={i}
          cover={
            <Image
              className="w-full lg:w-[200px]"
              src={product.image}
              width={300}
              height={250}
              alt="pc-featured"
            ></Image>
          }
        >
          <div className="h-40">
            <p className="text-xl">{product?.name}</p>
            <p className="text-xl font-normal">
              Category:{" "}
              <span className="font-semibold">{product?.category}</span>
            </p>
            <p className="text-xl font-normal">
              Price: <span className="font-semibold">{product?.price}</span>
            </p>
            <p className="text-xl font-normal">
              Status: <span className="font-semibold">{product?.status}</span>
            </p>
            <p className="text-xl font-normal">
              Rating:{" "}
              <span className="font-semibold">{product?.average_rating}</span>
            </p>
          </div>
          <div className="flex flex-col items-center mt-2">
            <Button type="primary w-full mb-0  bg-gradient-to-r from-indigo-500 to-sky-500 shadow-md shadow-orange-300">
              Add builder
            </Button>
            {/* <Button className="border-0 w-full primary"> */}
            <Link className="w-full mt-2" href={`/product/${product?._id}`}>
              <Button type="primary w-full mb-0  bg-gradient-to-r from-indigo-500 to-sky-500 shadow-md shadow-orange-300">
                Detail
              </Button>
            </Link>
            {/* </Button> */}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default Featured;
