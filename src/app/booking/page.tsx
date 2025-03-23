"use client";

import { useState } from "react";
import { TextField, MenuItem, Select, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import dayjs, { Dayjs } from "dayjs";
import DateReserve from "@/components/DateReserve";

export default function BookingPage() {
    const dispatch = useDispatch<AppDispatch>();

    
    const [nameLastname, setNameLastname] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [venue, setVenue] = useState("");
    const [bookDate, setBookDate] = useState<Dayjs | null>(null);

    const handleBooking = () => {
        if (nameLastname && contactNumber && venue && bookDate) {
            const newBooking = {
                nameLastname,
                tel: contactNumber,
                venue,
                bookDate: dayjs(bookDate).format("YYYY/MM/DD"),
            };
            dispatch(addBooking(newBooking));
            
        } 
    };

    return (
        <main className="w-full flex flex-col items-center space-y-4 p-5">
            <div className="w-[60%] bg-white shadow-lg rounded-2xl p-6 border border-gray-200 flex flex-col space-y-4">
                <h2 className="text-xl font-medium text-center">New Booking</h2>

                <TextField
                    label="Name-Lastname"
                    variant="standard"
                    fullWidth
                    value={nameLastname}
                    onChange={(e) => setNameLastname(e.target.value)}
                />

                <TextField
                    label="Contact-Number"
                    variant="standard"
                    fullWidth
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                />

                <Select
                    id="venue"
                    variant="standard"
                    fullWidth
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    displayEmpty
                >
                    <MenuItem value="" disabled>Select a venue</MenuItem>
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
                </Select>

                <div>
                    <p className="text-md text-gray-600">Select Booking Date</p>
                    <DateReserve value={bookDate} onChange={setBookDate} />
                </div>

                <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleBooking}
                >
                    Book Venue
                </Button>
            </div>
        </main>
    );
}
