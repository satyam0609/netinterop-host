import React from "react";
import { Button } from "../components/Button";
import TipsComponent from "@/components/TipsComponent";
import { NewsCardData1, NewsCardData2 } from "@/constant/data";
import NewsCard from "@/components/NewsCard";
import { FadeIn } from "@/components/animation/fade-in";

const NewsContent = () => {
  return (
    <section
      id="newsContent"
      className="max-w-7xl mx-auto mt-10 flex flex-wrap justify-between gap-5"
    >
      <div className="flex-1 w-[calc(66.%-1.25rem)] max-w-3xl">
        <FadeIn>
          <h3 className="text-primary font-semibold sm:text-4xl text-3xl leading-[160%] mb-5">
            267M Facebook Users Had Names, Phone Numbers Leaked On Dark Web
          </h3>
          <p className="sm:text-2xl text-xl text-tertiary leading-[180%]">
            Hundreds of millions of Facebook users' data has been found exposed
            on a database accessible on the dark web.
          </p>
          <p className="sm:text-2xl text-xl text-tertiary leading-[180%] my-5">
            Compartech and security researcher Bob Diachenko reported that a
            database containing 267 million Facebook user IDs, phone numbers,
            and names was left exposed on the dark web without password
            protection or any authentication.
          </p>
        </FadeIn>

        <div className="my-5">
          <div className="flex justify-between items-center">
            <FadeIn>
              <h3 className="text-primary font-semibold sm:text-4xl text-3xl leading-[160%]">
                Dark Web Discovery
              </h3>
            </FadeIn>
            <Button title="News" className="text-main bg-green rounded-md" />
          </div>
          <FadeIn>
            <p className="sm:text-2xl text-xl text-tertiary leading-[180%] my-2">
              In total,{" "}
              <span className="text-primary">267.140,436 records</span> were
              found exposed.
            </p>
          </FadeIn>
          <ul className="sm:text-2xl text-xl text-tertiary leading-[180%]">
            <li>
              {" "}
              <FadeIn>Facebook user Ids</FadeIn>
            </li>

            <li>
              <FadeIn>Phone Number</FadeIn>
            </li>
            <li>
              <FadeIn>Full Name</FadeIn>
            </li>
          </ul>
        </div>

        <FadeIn>
          <h3 className="text-primary font-semibold sm:text-4xl text-3xl leading-[160%] mb-5">
            Illegal Scraping Operation
          </h3>
          <div className="bg-[linear-gradient(360deg,#FFFFFF_0%,#CDE5D8_100%)] rounded-[10px] p-4">
            <p className="sm:text-2xl text-xl text-tertiary leading-[180%]">
              "Scaping is an Illegal scraping operation or Facebook API abuse by
              criminals in Vietnam."
            </p>
          </div>
          <p className="sm:text-2xl text-xl text-tertiary leading-[180%] my-5">
            Comparttech warned that "scraping" is a lechmrolatep widence:
            process in automated bota quirkly init through. wore irunners of web
            pages, rorgering from a database. They wten cannot tell the hdl
            hfference between a legttimat user a legitimate user and more
            thvrsets to Facebook users data.
          </p>
          <p className="sm:text-2xl text-xl text-tertiary leading-[180%]">
            While the information stalen was minimal, it could poentslally spam
            and phishing campaigns, such as compromised.
          </p>
        </FadeIn>

        <FadeIn className="my-5">
          <h3 className="text-primary font-semibold sm:text-4xl text-3xl leading-[160%] my-5">
            Facebook’s Investigation
          </h3>
          <p className="sm:text-2xl text-xl text-tertiary leading-[180%] ">
            While the information were taken, it may thelinpimite tracy plugie a
            xcale SMS spam and phishing campaigns, such as targeting trmats to
            Facebook agains data.
          </p>
        </FadeIn>

        <FadeIn>
          <h3 className="text-primary font-semibold sm:text-4xl text-3xl leading-[160%] my-5">
            Precautionary Measures
          </h3>
          <p className="sm:text-2xl text-xl text-tertiary leading-[180%]">
            The database nas since been taken offline. Users are advised to
            secure their accounts and change passwords if they were affected by
            this breach.
          </p>
        </FadeIn>
      </div>
      <div className="md:w-[calc(33.333%-1.25rem)] w-full">
        <FadeIn>
          {NewsCardData1.map((item) => (
            <div key={item.title}>
              <NewsCard
                title={item.title}
                lists={item.lists}
                className="rounded-t-2xl"
              />
            </div>
          ))}
          <TipsComponent className="rounded-b-2xl" />
        </FadeIn>

        <FadeIn className="my-10">
          {NewsCardData2.map((item) => (
            <div key={item.title}>
              <NewsCard
                title={item.title}
                subtitle={item.subtitle}
                lists={item.lists}
                className="rounded-2xl"
              />
            </div>
          ))}

          <TipsComponent className="rounded-2xl mt-10" />
        </FadeIn>
      </div>
    </section>
  );
};

export default NewsContent;
