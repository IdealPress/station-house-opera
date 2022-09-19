import { PrismicRichText } from "@prismicio/react";
import Image from "next/image";

import { createClient } from "prismicio";

import { BaseLayout } from "components";

export default function Home({ content }) {
  return (
    <main>
      <section>
        <figure
          style={{ backgroundImage: "url(/test-image-1.png)" }}
          className="h-screen w-screen bg-cover bg-no-repeat"
        ></figure>
      </section>

      <section className="p-8">
        <div className="overflow-y-scroll whitespace-nowrap py-12 space-x-12">
          {content?.data?.announcements?.map((announcement, index) => (
            <div
              key={index}
              className="w-2/5 inline-block whitespace-normal space-y-2"
            >
              <p className="text-2xl">{announcement.title}</p>
              <p className="text-sm">{announcement.date}</p>
              <PrismicRichText field={announcement.text} />
            </div>
          ))}
        </div>
      </section>
      <section className="p-8">
        <div className="lg:columns-2">
          <div className="break-inside-avoid p-4">
            <figure className="aspect-[6/5]">
              <Image
                src="/test-image-6-5.png"
                width="1800"
                height="1500"
                alt=""
              />
            </figure>
            <div className="py-4 space-y-2 lg:w-4/5 xl:w-2/3">
              <p className="text-2xl">1. Happy Days</p>
              <p>
                Dominoes takes as its starting point the simplest of ideas… a
                line of dominoes. Thousands of breezeblocks are used to create a
                moving sculpture which runs across the city, unfolding over the
                course of the day.
              </p>
            </div>
          </div>
          <div className="break-inside-avoid p-4">
            <figure className="aspect-[13/7]">
              <Image
                src="/test-image-13-7.png"
                width="1800"
                height="969"
                alt=""
              />
            </figure>
            <div className="py-4 space-y-2 lg:w-4/5 xl:w-2/3">
              <p className="text-2xl">2. Happy Days</p>
              <p>
                Dominoes takes as its starting point the simplest of ideas… a
                line of dominoes. Thousands of breezeblocks are used to create a
                moving sculpture which runs across the city, unfolding over the
                course of the day.
              </p>
            </div>
          </div>
          <div className="break-inside-avoid p-4">
            <figure className="aspect-[13/7]">
              <Image
                src="/test-image-13-7.png"
                width="1800"
                height="969"
                alt=""
              />
            </figure>
            <div className="py-4 space-y-2 lg:w-4/5 xl:w-2/3">
              <p className="text-2xl">3. Happy Days</p>
              <p>
                Dominoes takes as its starting point the simplest of ideas… a
                line of dominoes. Thousands of breezeblocks are used to create a
                moving sculpture which runs across the city, unfolding over the
                course of the day.
              </p>
            </div>
          </div>
          <div className="break-inside-avoid p-4">
            <figure className="aspect-[6/5]">
              <Image
                src="/test-image-6-5.png"
                width="1800"
                height="1500"
                alt=""
              />
            </figure>
            <div className="py-4 space-y-2 lg:w-4/5 xl:w-2/3">
              <p className="text-2xl">4. Happy Days</p>
              <p>
                Dominoes takes as its starting point the simplest of ideas… a
                line of dominoes. Thousands of breezeblocks are used to create a
                moving sculpture which runs across the city, unfolding over the
                course of the day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });

  const content = await client.getSingle("home");

  return {
    props: { content },
  };
}
