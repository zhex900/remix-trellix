import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Trellix, a Remix Demo" }];
};

function getRandomAstronautImages() {
  const randomImages = [
    "/images/astronaut-riding-rocket.png",
    "/images/astronaut-working-laptop.png",
    "/images/astronaut-holding-rocket.png",
    "/images/astronaut-operating-laptop-with-robot.png",
  ];
  return randomImages[Math.floor(Math.random() * randomImages.length)];
}

export default function Index() {
  //Hero image is the first photo people see in a web page.
  const heroImage = getRandomAstronautImages();
  return (
    <div className="flex flex-col items-center bg-slate-900">
      <img
        src={heroImage}
        width="402"
        height="149"
        alt={heroImage.replace("/images/", "").replace(".png", "")}
      />
      <div className="space-y-4 max-w-md text-lg text-slate-300 text-justify">
        <p>This is a demo app to teach basic web development.</p>
        <p>
          It's a recreation of the popular drag and drop interface in{" "}
          <a href="https://trello.com" className="underline">
            Trello
          </a>{" "}
          and other similar apps.
        </p>
        <p>If you want to play around, click sign up!</p>
      </div>
      <div className="flex w-full justify-evenly max-w-md mt-8 rounded-3xl p-10 bg-slate-700">
        <Link
          to="/signup"
          className="text-xl font-medium text-brand-aqua underline"
        >
          Sign up
        </Link>

        <Link
          to="/login"
          className="text-xl font-medium text-brand-aqua underline"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
