"use client";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from "@mui/material";
import { Dayjs } from "dayjs";

interface DateReserveProps {
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
}

export default function DateReserve({ value, onChange }: DateReserveProps) {
  return (
    <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-row justify-center">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker 
          value={value} 
          onChange={onChange} 
    
        />
      </LocalizationProvider>
    </div>
  );
}
