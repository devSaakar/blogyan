import Head from "next/head";
import Image from "next/image";
import background from '../src/assets/LANDING_PAGE.png'
import Footer from "../src/components/common/Footer";
// import OnboardForm from "../src/components/OnboardForm";

export default function Home() {
  return (
    <div className="homepage__container">
      <Head>
        <title>Blogyan</title>
        <meta
          name="description"
          content="Blogyan is an community to share your knowledge of Web Development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main flex-col">
        {/* <h1 className="title text-center text-4xl font-semibold text-primary">
          Welcome to{" "}
          <a target="_blank" rel="noreferrer" href="https://semi-colon-404.netlify.app/">
            Semi Colon Blogyan!
          </a>
        </h1>
        <div className="onboard__form__container mt-8 mx-auto">
          <OnboardForm />
        </div> */}

      <Image
            className=""
            src={background}
            layout="responsive"
            objectFit="cover"
            alt="card.png"
          />
      <Footer />
      </main>
    </div>
  );
}
