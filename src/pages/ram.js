import MainLayout from "@/components/Layout/MainLayout";
import ComponentGrid from "@/components/UI/ComponentGrid";
import React from "react";

const RamPage = ({ pcData }) => {
  return (
    <div>
      <ComponentGrid pcData={pcData}></ComponentGrid>
    </div>
  );
};

export default RamPage;

RamPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps() {
  const res = await fetch(
    "https://pc-builder-backend-main-eight.vercel.app/ram"
  );
  const pcData = await res.json();

  return {
    props: {
      pcData,
    },
  };
}
