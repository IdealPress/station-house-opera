import Link from "next/link";
import * as prismicH from "@prismicio/helpers";
import { SliceZone } from "@prismicio/react";

import { createClient, linkResolver } from "prismicio";
import { components } from "slices";

import { BaseLayout, SubNavigation } from "components";

const hrefResolver = (uid) => {
  return uid === "about" ? "/about" : `/about/${uid}`;
};

export default function About({ content, pages }) {
  return (
    <>
      <SubNavigation
        right={
          <ul>
            {pages.map((page, index) => (
              <Link key={index} href={hrefResolver(page.uid)}>
                <a>
                  <li>{page?.data?.title}</li>
                </a>
              </Link>
            ))}
          </ul>
        }
      />
      <main className="space-y-12">
        <SliceZone slices={content?.data.slices} components={components} />
      </main>
    </>
  );
}

About.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};

export async function getStaticPaths() {
  const client = createClient();
  const documents = await client.getAllByType("info");
  return {
    paths: documents.map((doc) => prismicH.asLink(doc, linkResolver)),
    fallback: false,
  };
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData });
  const content = await client.getByUID("info", params.uid);
  const pages = await client.getByType("info", {
    orderings: {
      field: 'my.info.uid',
      direction: 'asc',
    }
  })
  return {
    props: { content, pages: pages.results },
  };
}
