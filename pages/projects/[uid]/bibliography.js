import Link from "next/link";
import * as prismicH from "@prismicio/helpers";
import { SliceZone } from "@prismicio/react";

import { createClient, linkResolver } from "prismicio";
import { components } from "slices";

import { BaseLayout, SubNavigation, SVGCross } from "components";

export default function Project({ content }) {
  return (
    <>
      <SubNavigation
        left={
          <p className="text-3xl"> 
            {content?.data?.title}
          </p>
        }
        right={
          <ul>
            <li>
              <Link href={`/projects/${content?.uid}/project`}>
                <a>Project</a>
              </Link>
            </li>
            <Link href={`/projects/${content?.uid}/credits`}>
              <a>Credits</a>
            </Link>
            <Link href={`/projects/${content?.uid}/bibliography`}>
              <a>Bibliography</a>
            </Link>
            <Link href={`/projects/${content?.uid}`}>
              <a>
                <SVGCross className="text-current inline w-5 h-5" />
              </a>
            </Link>
          </ul>
        }
      />
      <main className="space-y-12">
        {content?.data?.slices3 && (
          <SliceZone slices={content?.data.slices3} components={components} />
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
    // Custom path array for information subpages
    paths: documents.map((doc) => `/projects/${doc.uid}/bibliography`),
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
