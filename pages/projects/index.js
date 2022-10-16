import { BaseLayout } from "components";
import Image from "next/image";
import Link from "next/link";
import { createClient } from "prismicio";

export default function Projects({ content }) {
  return (
    <>
      <main className="space-y-12 px-6">
        <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
          {content.map((project, index) => (
            <Link href={`/projects/${project.uid}`} key={index}>
              <a>
                <div className="w-full h-full space-y-2">
                  <figure className="aspect-[3/2]">
                    <Image
                      src={project?.data?.cover?.url}
                      width={project?.data?.cover?.dimensions?.width}
                      height={project?.data?.cover?.dimensions?.height}
                      alt={project?.data?.cover?.alt}
                    />
                  </figure>
                  <p className="text-2xl">{project?.data?.title}</p>
                </div>
              </a>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}

Projects.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};

export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData });
  const content = await client.getAllByType("project", {
    orderings: { field: "my.project.date", direction: "desc" },
  });
  return {
    props: { content },
  };
}
