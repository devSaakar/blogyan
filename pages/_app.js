import "../styles/globals.css";
import AuthProvider from "../src/components/common/Auth";
import Navbar from "../src/components/common/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="container mx-auto">
        <Navbar />
        <div className="comnponent__container mt-8">
          <Component {...pageProps} />
        </div>
      </div>
    </AuthProvider>
  );
}

export default MyApp;
