import styles from './topmenu.module.css'
import Image from 'next/image'
import TopMenuItem from './TopMenuItem';
import { Link } from '@mui/material';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
export default async function TopMenu (){
    const session = await getServerSession(authOptions)
    return (
        <div className={styles.menucontainer}>
            <Image src = {'/img/logo.png'} className={styles.logoimg}
                alt = 'logo' width={0} height={0} sizes='100vh'
            />
            <TopMenuItem title='Booking' pageRef='/booking'/>
            
            <div className="flex items-center absolute left-0 h-full px-2
              text-cyan-600 text-sm">
            {
              session? <Link href="/api/auth/signout"> 
                <div >Sign-Out 0f {session.user?.name}</div>
              </Link>
              :<Link href="/api/auth/signin"><div >Sign-In</div></Link>
            }
            <TopMenuItem title='My Booking' pageRef='/mybooking'/>
                
            </div>
            
        </div>
    );
}