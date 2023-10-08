import MainLayout from "@/components/Layout/MainLayout";
import Featured from "@/components/UI/Featured";
import FeaturedProduct from "@/components/UI/FeaturedProduct";
import Hero from "@/components/UI/Hero";

const allCategory = [
  {
    id: 1,
    image: "https://i.ibb.co/5MM8G7B/processor.jpg",
    category: "Processor",
    categoryName: "cpu",
  },
  {
    id: 2,
    image: "https://i.ibb.co/SyD9w4q/download.jpg",
    category: "Motherboard",
    categoryName: "motherboard",
  },
  {
    id: 3,
    image: "https://i.ibb.co/gRVK9XR/istockphoto-92434128-612x612.jpg",
    category: "RAM",
    categoryName: "ram",
  },
  {
    id: 4,
    image: "https://i.ibb.co/4pJ2cZt/7-ME636b-QNGEGGrg5q-Et-Wr-K.jpg",
    category: "Power Supply Unit",
    categoryName: "psu",
  },
  {
    id: 5,
    image: "https://i.ibb.co/jMY0yT5/3f783785c3a938be5b54aa46acfc307b.jpg",
    category: "Storage Device",
    categoryName: "storage",
  },
  {
    id: 6,
    image: "https://i.ibb.co/zsFrSCH/images.jpg",
    category: "Monitor",
    categoryName: "monitor",
  },
  {
    id: 7,
    image: "https://i.ibb.co/8m4CNjn/images-1.jpg",
    category: "Others",
    categoryName: "others",
  },
];

const HomePage = ({ pcData }) => {
  return (
    <div className="container mx-auto">
      <Hero />
      <h2 className="my-4 lg:mb-12 lg:text-5xl text-center">
        Featured Product
      </h2>
      <Featured pcData={pcData}></Featured>
      <h2 className="mb-4 mt-20 lg:mb-12 lg:text-5xl text-center">
        Featured Categories
      </h2>
      <FeaturedProduct allCategory={allCategory}></FeaturedProduct>
    </div>
  );
};

export default HomePage;

// set page layout
HomePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

// load data (SSG)
export async function getStaticProps() {
  const res = await fetch(
    "https://pc-builder-backend-main-eight.vercel.app/pc"
  );
  const pcData = await res.json();

  return {
    props: {
      pcData,
    },
  };
}
