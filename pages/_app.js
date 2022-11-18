import "../styles/globals.css";
import AuthProvider from "../src/components/common/Auth";
import Navbar from "../src/components/common/Navbar";
import Footer from "../src/components/common/Footer/index";
import Head from "next/head";
import { useRouter } from "next/router";
import { routesMapper } from "../config/routes";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{routesMapper[router.pathname]}</title>
        <meta
          name="description"
          content="Blogyan is an community to share your knowledge of Web Development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthProvider>
        <div className="mx-auto bg-gray-800 min-h-screen flex flex-col justify-between">
          <Navbar />
          <div className="comnponent__container">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </AuthProvider>
    </>
  );
}

export default MyApp;
