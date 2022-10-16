import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import * as prismicH from "@prismicio/helpers";
import { SliceZone } from "@prismicio/react";

import { createClient, linkResolver } from "prismicio";
import { components } from "slices";

import { BaseLayout, Lightbox, SubNavigation } from "components";
import { LightboxContext } from "lib/LightboxContext";

export default function Project({ content }) {
  const { showLightbox, setLightboxItems } = useContext(LightboxContext);

  useEffect(() => {
    setLightboxItems(
      content?.data?.slices
        ?.map((slice) => {
          if (slice.slice_type === "gallery")
            return slice.items.map((item) =>
              item.image.url
                ? {
                    $type: "image",
                    $description: item.description,
                    ...item.image,
                  }
                : {
                    $type: "embed",
                    $description: item.description,
                    ...item.embed,
                  }
            );
        })
        .filter((item) => item)
        .flat()
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content?.data?.slices]);

  return (
    <>
      {showLightbox && <Lightbox />}
      <SubNavigation
        left={<p>{content?.data?.title}</p>}
        right={
          <Link href={`/projects/${content?.uid}/project`}>
            <a>Information</a>
          </Link>
        }
      />
      <main className="space-y-12">
        {content?.data?.slices && (
          <SliceZone slices={content?.data?.slices} components={components} />
        )}
      </main>
    </>
  );
}

Project.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};

export async function getStaticPaths() {
  const client = createClient();
  const documents = await client.getAllByType("project");
  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: true,
  };
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const content = await client.getByUID("project", params.uid);
  return {
    props: { content },
  };
}
