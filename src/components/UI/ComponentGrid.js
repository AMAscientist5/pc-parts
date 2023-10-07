import { addToBuild } from "@/redux/features/builder/builderSlice";
import { Button, Card } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const ComponentGrid = ({ pcData }) => {
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-3 grid-cols-1 items-center justify-center  my-8 lg:gap-0 gap-4">
        {pcData.map((product, i) => (
          <Card
            className="w-full lg:w-[300px] shadow-2xl p-2"
            key={i}
            style={{ width: 400 }}
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
            <div>
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
            {/* <div className="flex flex-col items-center mt-2">
              <Link href="/build-pc">
                <Button
                  onClick={() => dispatch(addToBuild(product))}
                  type="primary w-full  bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-md shadow-orange-300"
                >
                  Add to builder
                </Button>
              </Link>
              <Link href={`/product/${product?._id}`}>
                <Button type="primary mt-2 shadow-lg shadow-orange-300  bg-gradient-to-r from-violet-500 to-fuchsia-500">
                  View Details
                </Button>
              </Link>
            </div> */}
            <div className="flex flex-col items-center mt-2">
              {/* <Button type="primary w-full mb-0  bg-gradient-to-r from-indigo-500 to-sky-500 shadow-md shadow-orange-300">
                Add builder
              </Button> */}
              <Button className="border-0 w-full primary">
                <Link href={`/build-pc`}>
                  <Button
                    onClick={() => dispatch(addToBuild(product))}
                    type="primary w-full mb-0  bg-gradient-to-r from-indigo-500 to-sky-500 shadow-md shadow-orange-300"
                  >
                    Build
                  </Button>
                </Link>
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
    </div>
  );
};

export default ComponentGrid;
