import { getServerSession } from 'next-auth/next';

import Navbar from './navbar';

export default async function Nav() {
  const session = await getServerSession();
  
return <Navbar user={session?.user} />;
}
