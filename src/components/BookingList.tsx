'use client'
import { AppDispatch, useAppSelector } from "@/redux/store"
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";

export default function ReservationCart(){
    const bookItems = useAppSelector((state)=>state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    return(
        <>
        {bookItems.length === 0 ? (
            <p className="text-center text-gray-500">No Venue Booking</p> // ถ้าไม่มีข้อมูล
        ) : (
            bookItems.map((BookingItem) => (
                <div 
                   
                    className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                >
                    <div className="text-xl">ชื่อ-นามสกุล: {BookingItem.nameLastname}</div>
                    <div className="text-sm">หมายเลขติดต่อ: {BookingItem.tel}</div>
                    <div className="text-sm">สถานที่จัดเลี้ยง: {BookingItem.venue}</div>
                    <div className="text-sm">วันที่ต้องการจอง: {BookingItem.bookDate}</div>

                    <button
                        className="block rounded-md bg-red-600 hover:bg-red-700 px-3 py-2 shadow-sm text-white mt-2"
                        onClick={() => dispatch(removeBooking(BookingItem))}  
                    >
                       ยกเลิกการจอง
                    </button>
                </div>
            ))
        )}
        </>
    )
}
