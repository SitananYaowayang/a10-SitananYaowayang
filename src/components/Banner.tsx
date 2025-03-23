'use client'
import styles from './banner.module.css';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
   
export default function Banner(){
    const covers = ['/img/cover.jpg','/img/cover2.jpg','/img/cover3.jpg','/img/cover4.jpg'] 
    const [index,setIndex] = useState(0)   
    const router = useRouter()
     const {data:session} = useSession()
    return(
        <div className={styles.banner} onClick={()=>{setIndex(index+1)}} >
            <Image src={covers[index%4]} 
                alt = 'cover'
                fill= { true }
                objectFit='cover'/>

                <div className={styles.bannerText}>
                    <h1 className="text-5xl font-bold font-serif drop-shadow-lg text-white">where every event finds its venue</h1>
                    <h3 className="text-2xl font-light font-poppins mt-2 text-white">Book the perfect space for your wedding, conference, or special event.</h3>
                </div>
                {
                    session? <div className='z-30 absolute top-5 Left-10 font-semibold text-white text-xl'>
                        Welcome {session.user?.name}</div> :null
                }
            <button className='bg-white text-cyan-600 border-cyan-600
            font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
            hover:bg-cyan-600 hover:text-white hover:border-transparent '
                onClick={(e)=>{e.stopPropagation();router.push('/venue')}}
            >
                Select Venue
            </button>
        </div>
    );
}