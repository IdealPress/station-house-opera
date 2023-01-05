import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PrismicLink, PrismicRichText } from "@prismicio/react";
import { ScrollContainer } from "react-indiana-drag-scroll";
import "react-indiana-drag-scroll/dist/style.css";
import { AnimatePresence, motion } from "framer-motion";

import { createClient } from "prismicio";

import { useWindowSize } from "lib/hooks";
import { Announcement, BaseLayout } from "components";

export default function Home({ content }) {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const size = useWindowSize();

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
      <section className="sm:min-h-screen relative">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={carouselIndex}
            className="h-full w-screen bg-cover bg-no-repeat"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={content?.data?.carousel[carouselIndex].image.url}
              alt={content?.data?.carousel[carouselIndex].image.alt}
              width={content?.data?.carousel[carouselIndex].image.dimensions.width}
              height={content?.data?.carousel[carouselIndex].image.dimensions.height}
              layout={size.width < 640 ? "" : "fill"}
              objectFit={size.width < 640 ? "fill" : "cover"}
              objectPosition="center"
            />
          </motion.div>
        </AnimatePresence>
      </section>

      <section className="py-8 sm:p-8">
        <ScrollContainer className="overflow-y-scroll whitespace-nowrap py-12 space-x-12">
          {content?.data?.announcements?.map((announcement, index) => (
            <> 
              {announcement.link.url ? (
                <PrismicLink field={announcement.link} key={index}>
                  <Announcement announcement={announcement} />
                </PrismicLink> 
              ) : (
                <Announcement announcement={announcement} key={index} />
              )}
            </>
          ))}
        </ScrollContainer>
      </section>
      <section className="px-4 py-8 lg:p-8">
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
                  <a className="block break-inside-avoid p-4 group">
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
                      <p className="text-2xl transition-colors group-hover:text-gray-sho">
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
