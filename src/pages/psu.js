import MainLayout from '@/components/Layout/MainLayout';
import ComponentGrid from '@/components/UI/ComponentGrid';
import React from 'react';

const PowerSupply = ({pcData}) => {
  return (
    <div>
       <ComponentGrid pcData={pcData}></ComponentGrid>
    </div>
  );
};

export default PowerSupply;

PowerSupply.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/psu");
  const pcData = await res.json();

  return {
    props: {
      pcData,
    },
  };
}
