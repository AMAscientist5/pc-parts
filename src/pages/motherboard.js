import MainLayout from '@/components/Layout/MainLayout';
import ComponentGrid from '@/components/UI/ComponentGrid';
import Featured from '@/components/UI/Featured';
import React from 'react';

const MotherBoardPage = ({pcData}) => {
  return (
    <div>
      <ComponentGrid pcData={pcData}></ComponentGrid>
    </div>
  );
};

export default MotherBoardPage;

MotherBoardPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};


export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/motherboard");
  const pcData = await res.json();

  return {
    props: {
      pcData,
    },
  };
}
