import Navigation from "./Components/Navigation/Navigation";

export const metadata = {
  title: "Work-Hours-Tracker",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
