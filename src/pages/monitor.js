import MainLayout from '@/components/Layout/MainLayout';
import ComponentGrid from '@/components/UI/ComponentGrid';
import React from 'react';

const MonitorPage = ({pcData}) => {
  return (
    <div>
         <ComponentGrid pcData={pcData}></ComponentGrid>
    </div>
  );
};

export default MonitorPage;

MonitorPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getStaticProps() {
  const res = await fetch("http://localhost:5000/monitor");
  const pcData = await res.json();

  return {
    props: {
      pcData,
    },
  };
}
