import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PrismicRichText } from "@prismicio/react";
import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";

import { createClient } from "prismicio";

import { BaseLayout } from "components";
import { AnimatePresence, motion } from "framer-motion";

export default function Home({ content }) {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCarouselIndex((prevIndex) =>
          prevIndex === content?.data?.carousel.length - 1 ? 0 : prevIndex + 1
        ),
      4000
    );

    return () => {
      resetTimeout();
    };
  }, [carouselIndex]);

  return (
    <main>
      <section className="min-h-screen">
        <AnimatePresence initial={false}>
          <motion.div
            key={carouselIndex}
            className="h-full w-screen bg-cover bg-no-repeat"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={content?.data?.carousel[carouselIndex].image.url}
              alt={content?.data?.carousel[carouselIndex].image.alt}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="p-8">
        <ScrollContainer className="overflow-y-scroll whitespace-nowrap py-12 space-x-12">
          {content?.data?.announcements?.map((announcement, index) => (
            <div
              key={index}
              className="w-2/5 inline-block whitespace-normal space-y-2 h-full align-top"
            >
              <p className="text-2xl">{announcement.title}</p>
              <p className="text-sm">{announcement.date}</p>
              <PrismicRichText field={announcement.text} />
              {announcement.image?.url && (
                <div className="grayscale pt-8 w-2/3 mx-auto">
                  <Image
                    src={announcement.image.url}
                    width={announcement.image.dimensions.width}
                    height={announcement.image.dimensions.height}
                    alt={announcement.image.alt}
                  />
                </div>
              )}
            </div>
          ))}
        </ScrollContainer>
      </section>
      <section className="p-8">
        <div className="lg:columns-2">
          {/* Reorder array for CSS Columns */}
          {content?.data?.featured_projects
            ?.filter((_, i) => i % 2 === 0)
            .concat(
              content?.data?.featured_projects?.filter((_, j) => j % 2 !== 0)
            )
            .map((featured, index) => {
              // Alternating pattern for aspect ratios
              const squareAspectRatio = index % 2 === 0;
              const coverImage = squareAspectRatio
                ? featured.project?.data?.cover?.square
                : featured.project?.data?.cover?.wide;
              return (
                <Link href={`/projects/${featured.project.uid}`} key={index}>
                  <a className="block break-inside-avoid p-4">
                    <figure
                      className={
                        squareAspectRatio ? "aspect-[6/5]" : "aspect[16/9]"
                      }
                    >
                      <Image
                        src={coverImage.url}
                        width={coverImage.dimensions?.width}
                        height={coverImage.dimensions?.height}
                        alt={coverImage.dimensions?.alt}
                      />
                    </figure>
                    <div className="py-4 space-y-2 lg:w-4/5 xl:w-2/3">
                      <p className="text-2xl">
                        {featured.project?.data?.title}
                      </p>
                      <PrismicRichText
                        field={featured.project?.data?.short_description}
                      />
                    </div>
                  </a>
                </Link>
              );
            })}
        </div>
      </section>
    </main>
  );
}

Home.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};

const homeGraphQuery = `{
  home {
    ...homeFields
    featured_projects {
      project {
        ...on project {
          ...projectFields
        }
      }
    }
  }
}`;

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const content = await client.getSingle("home", {
    graphQuery: homeGraphQuery,
  });
  return {
    props: { content },
  };
}
