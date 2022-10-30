import Head from "next/head";
import Image from "next/image";
import background from '../src/assets/LANDING_PAGE.png'
import OnboardForm from "../src/components/OnboardForm/index"
// import OnboardForm from "../src/components/OnboardForm";

export default function Home() {
  return (
    <div className="homepage__container">
      <Head>
        <title>Bro Code</title>
        <meta
          name="description"
          content="Blogyan is an community to share your knowledge of Web Development"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main flex-col mt-6">
        <h1 className="title text-center text-4xl font-semibold text-primary">
          Welcome to{" "}
          <a target="_blank" rel="noreferrer" href="https://semi-colon-404.netlify.app/">
            Bro Code!
          </a>
        </h1>
        <div className="onboard__form__container mt-8 mx-auto">
          <OnboardForm />
        </div>
      </main>
    </div>
  );
}
