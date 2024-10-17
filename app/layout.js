import localFont from "next/font/local";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import "aos/dist/aos.css";


// const Montserrat_Thin = localFont({
//   src: "./fonts/Montserrat-Thin.ttf",
//   variable: "--Montserrat_Thin",
// });
// const Montserrat_Montserrat_Bold = localFont({
//   src: "./fonts/Montserrat-Bold.ttf",
//   variable: "--Montserrat_Montserrat_Bold",
// });
// const Montserrat_Medium = localFont({
//   src: "./fonts/Montserrat-Medium.ttf",
//   variable: "--Montserrat_Medium",
// });

export const metadata = {
  title: "Fintechify",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* className={`${Montserrat_Thin.variable} ${Montserrat_Montserrat_Bold.variable} ${Montserrat_Medium.variable}`} */}
      <body>
        {children}
      </body>
    </html>
  );
}
