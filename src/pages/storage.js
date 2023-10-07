import MainLayout from "@/components/Layout/MainLayout";
import ComponentGrid from "@/components/UI/ComponentGrid";
import React from "react";

const StoragePage = ({ pcData }) => {
  return (
    <div>
      <ComponentGrid pcData={pcData}></ComponentGrid>
    </div>
  );
};

export default StoragePage;

StoragePage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps() {
  const res = await fetch(
    "https://pc-builder-backend-main-eight.vercel.app//storage"
  );
  const pcData = await res.json();

  return {
    props: {
      pcData,
    },
  };
}
