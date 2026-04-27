import React from "react";
import { Button } from "../Button";
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
      <div className="flex-1 ">
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
              <span className="text-primary">267,140,436 records</span> were
              found exposed.
            </p>
          </FadeIn>

          <ul className="sm:text-2xl text-xl text-tertiary leading-[180%] list-disc pl-6">
            <li>
              <FadeIn>Facebook User IDs</FadeIn>
            </li>
            <li>
              <FadeIn>Phone Numbers</FadeIn>
            </li>
            <li>
              <FadeIn>Full Names</FadeIn>
            </li>
          </ul>

          <FadeIn>
            <p className="sm:text-2xl text-xl text-tertiary leading-[180%] my-2">
              According to Diachenko, who examined the evidence, the data likely
              came from “an illegal scraping operation or Facebook API abuse by
              criminals in Vietnam.” Most of the stolen data belonged to users
              in the United States.
            </p>
          </FadeIn>
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
            Comparitech said that “‘scraping’ is a term used to describe a
            process in which automated bots quickly sift through large numbers
            of web pages, copying data from each one into a database. It’s
            difficult for Facebook and other social media sites to prevent
            scraping because they often cannot tell the difference between a
            legitimate user and a bot. Scraping is against Facebook’s–and most
            other social networks’–terms of service.”
          </p>
          <p className="sm:text-2xl text-xl text-tertiary leading-[180%]">
            While the information stolen was minimal, it could still potentially
            lead to large-scale SMS spam and phishing campaigns, among other
            threats to Facebook users whose data was compromised.
          </p>
        </FadeIn>

        <FadeIn className="my-5">
          <h3 className="text-primary font-semibold sm:text-4xl text-3xl leading-[160%] my-5">
            Facebook’s Investigation
          </h3>
          <p className="sm:text-2xl text-xl text-tertiary leading-[180%] ">
            While the information was taken, it may help to limit tracking, plug
            gaps, and scale SMS spam and phishing campaigns, such as targeting
            threats to Facebook against data.
          </p>
        </FadeIn>

        <FadeIn>
          <h3 className="text-primary font-semibold sm:text-4xl text-3xl leading-[160%] my-5">
            Precautionary Measures
          </h3>
          <p className="sm:text-2xl text-xl text-tertiary leading-[180%]">
            The database has since been taken offline. Users are advised to
            secure their accounts and change passwords if they were affected by
            this breach.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default NewsContent;
