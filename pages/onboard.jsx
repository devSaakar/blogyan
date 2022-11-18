import React from "react";
import OnboardForm from "../src/components/OnboardForm";

const onboard = () => {
  return (
    <div>
      <h1 className="title text-center text-4xl font-semibold text-primary">
        Welcome to{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://semi-colon-404.netlify.app/"
        >
          Bro Code!
        </a>
      </h1>
      <div className="onboard__form__container mt-8 mx-auto">
        <OnboardForm />
      </div>
    </div>
  );
};

export default onboard;
