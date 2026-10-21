import { Geist, Geist_Mono, Noto_Sans_Bengali, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import HeaderPage from "./components/header";
import NavCategory from "./components/navCategory";
import Marquee from "./components/marquee";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const notoSerifBengali = Noto_Serif_Bengali({
  
  subsets: ["latin",'bengali'],
});

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["latin",'bengali'],
})


export const metadata = {
  title: "Bazar Dor",
  description: "Developed by hasibsiam119",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${notoSansBengali.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <HeaderPage></HeaderPage>
        <NavCategory></NavCategory>
        <Marquee></Marquee>
        
        
        {children}
          <ToastContainer />
        </body>
    </html>
  );
}
