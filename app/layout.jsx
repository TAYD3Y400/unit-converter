import "@styles/globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "Unit Converter",
  description: "A simple unit converter",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/favicon.svg" sizes="any" />
      </head>
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
};

export default Layout;
