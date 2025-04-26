// app/server/[serverid]/page.tsx
'use client';

import { NavbarMain } from '@/components/Navbar';
import Content from '@/components/ServerListing/Content';
import { useParams } from 'next/navigation';

const ServerPage = () => {
  const params = useParams();
  const searchid = params.serverid as string;

  return (
    <>
      <NavbarMain/>
      <Content serverid={searchid}/> 
    </>
  );
};

export default ServerPage;