import React from 'react';
import Header from '../../../components/header';

export interface PageProps {
  params: { id: string[] };
}

// export function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }, { id: '3' }];
// }

const Page = ({ params }: PageProps) => {
  return (
    <>
      <Header>Company ({String(params.id)})</Header>
    </>
  );
};

export default Page;
