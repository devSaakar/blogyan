import "../styles/globals.css";
import AuthProvider from "../src/components/common/Auth";
import Navbar from "../src/components/common/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <div className="mx-auto bg-gray-800 min-h-screen">
        {/* <Navbar /> */}
        <div className="comnponent__container">
          <Component {...pageProps} />
        </div>
      </div>
    </AuthProvider>
  );
}

export default MyApp;
