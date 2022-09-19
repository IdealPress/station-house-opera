import { BaseLayout } from "components";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <main className="space-y-12 px-6">
        <section>
          <div className="grid grid-cols-3 gap-12">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="w-full h-full">
                <figure className="aspect-[3/2]">
                  <Image
                    src="/test-image-3-2.png"
                    width="1200"
                    height="800"
                    alt=""
                  />
                </figure>
                <p className="text-2xl">Title</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

Projects.getLayout = function getLayout(page) {
  return <BaseLayout>{page}</BaseLayout>;
};
