import React from "react";

function Hero(props) {
  return (
    <section id={"hero"}>
      <div
        className={
          "container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0"
        }
      >
        {/*First Item*/}
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
          <h1
            className={
              "max-wd-md text-4xl font-bold text-center md:text-5xl md:text-left"
            }
          >
            Bring everyone together to build better products.
          </h1>
          <p className={"max-w-sm text-darkGrayishBlue md:text-left"}>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <a
            href={"#"}
            className={
              " p-2 px-6 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight w-32"
            }
          >
            Get Started
          </a>
        </div>
        {/*Second Item*/}
        <div className={"md:w-1/2"}>
          <img src={"../img/illustration-intro.svg"} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
