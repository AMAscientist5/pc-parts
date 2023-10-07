import MainLayout from "@/components/Layout/MainLayout";
import { removeFromBuilder } from "@/redux/features/builder/builderSlice";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const PcBuilderPage = ({ pcBuilder }) => {
  const { products } = useSelector((state) => state.pc);

  const [isArraySame, setIsArraySame] = useState(false);

  const selectedCategories = [];
  const pcBuilderCategories = [];

  useEffect(() => {
    products.forEach((element) => {
      selectedCategories.push(element.category);
    });
    pcBuilder?.forEach((element) => {
      pcBuilderCategories.push(element.category);
    });

    const compareArrays = (arr1, arr2) => {
      if (arr1.length !== arr2.length) {
        return false;
      }
      const sortedArr1 = arr1.slice().sort();
      const sortedArr2 = arr2.slice().sort();
      // Compare each element of the arrays
      for (let i = 0; i < arr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) {
          return false;
        }
      }

      return true;
    };

    if (compareArrays(selectedCategories, pcBuilderCategories)) {
      setIsArraySame(true);
    }
  }, [pcBuilder, pcBuilderCategories, products, selectedCategories]);

  const handlePcBuild = () => {
    if (isArraySame) {
      toast.success("Your build has been built successfully");
    }
  };

  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-4xl my-8 text-center mb-10">PC Builder</h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 place-content-center justify-items-center">
        {pcBuilder.map((item, i) => (
          <div
            key={i}
            className="bg-gray-50 rounded-xl mx-8 border w-11/12 lg:w-9/12 m-5"
          >
            <div className=" flex justify-between  items-center p-4">
              <Image
                src={item.image}
                width={110}
                height={110}
                alt={item.category}
              ></Image>
              <p className="text-2xl font-bold mb-4">{item.category}</p>
              <Button
                className="bg-gradient-to-r from-indigo-500 to-sky-500"
                type="primary"
              >
                {/* <Link href={`/${item.category.toLowerCase()}`}> Choose</Link> */}
                <Link
                  href={`/${
                    item.category.includes("/")
                      ? item.category.split("/")[0].trim().toLowerCase()
                      : item.category.split(" ")[0].trim().toLowerCase()
                  }`}
                >
                  Select
                </Link>
              </Button>
            </div>
            {products.map((product) => (
              <>
                {product.category === item.category && (
                  <div className=" flex items-center justify-between mx-3 mb-3">
                    <div className="flex gap-4">
                      <Image
                        src={product.image}
                        height={60}
                        width={80}
                        alt="image"
                      ></Image>
                      <div className="flex items-center">
                        <div>
                          <p className="font-bold">{product.productName}</p>
                          {/* <p>${product.price}</p> */}
                        </div>
                      </div>
                    </div>
                    <Button
                      flat
                      color="error"
                      auto
                      onClick={() => dispatch(removeFromBuilder(product))}
                    >
                      Remove
                    </Button>
                  </div>
                )}
              </>
            ))}
          </div>
        ))}
      </div>

      <div className="mb-4">
        <button
          className={
            isArraySame
              ? "text-center flex justify-center items-center mx-auto bg-green-400 px-4 py-2 rounded-lg"
              : " text-center flex justify-center items-center mx-auto bg-gray-300 px-4 py-2 cursor-not-allowed rounded-lg"
          }
          onClick={handlePcBuild}
        >
          Confirm
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export const getStaticProps = async () => {
  const res = await fetch(
    "https://pc-builder-backend-main-eight.vercel.app//builder-data"
  );
  const data = await res.json();
  return {
    props: {
      pcBuilder: data,
    },
    revalidate: 10,
  };
};
