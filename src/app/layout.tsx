import Navigation from "./Components/Navigation/Navigation";
import "../app/global.css";

export const metadata = {
  title: "Work-Hours-Tracker",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className="p-3 flex flex-col gap-5">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
