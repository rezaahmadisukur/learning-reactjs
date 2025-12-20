import Footer from "./Footer";
import Header from "./Header";

function LayoutApp({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Header />
        <div className="w-full max-w-full">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default LayoutApp;
