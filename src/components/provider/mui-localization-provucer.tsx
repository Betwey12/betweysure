"use client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

interface MyMuiLocalizationProviderProps {
  children: React.ReactNode;
}

export default function MyMuiLocalizationProvider({
  children,
}: MyMuiLocalizationProviderProps) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {children}
    </LocalizationProvider>
  );
}
