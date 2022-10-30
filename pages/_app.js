import "../styles/globals.css";
import AuthProvider from "../src/components/common/Auth";
import Navbar from "../src/components/common/Navbar";
import Footer from '../src/components/common/Footer/index'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="mx-auto bg-gray-800 min-h-screen flex flex-col justify-between">
        <Navbar />
        <div className="comnponent__container">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default MyApp;
