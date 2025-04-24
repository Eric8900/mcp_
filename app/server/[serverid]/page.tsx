// app/server/[serverid]/page.tsx
'use client';

import { NavbarMain } from '@/components/Navbar';
import Content from '@/components/ServerListing/Content';
import { useParams } from 'next/navigation';

const ServerPage = () => {
  const params = useParams();
  const serverid = params.serverid as string;

  return (
    <>
      <NavbarMain/>
      <Content serverid={serverid}/> 
    </>
  );
};

export default ServerPage;