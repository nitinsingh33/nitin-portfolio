import HeroImg from "@/assets/images/picme.jpg";
import OlovaLogo from "@/assets/images/olova.png";
import GridBackground from "@/components/GridBackground";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-gray-900 dark:text-white bg-gray-50 dark:bg-[#04081A] transition-colors duration-300 relative">
        <GridBackground />
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 relative z-10">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-gray-900 dark:text-white">
            Developer, Designer, Creator, Innovator
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-gradient-to-b aspect-76/59 relative rounded-2xl p-px from-gray-300 dark:from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-gray-700 dark:text-white">
                Hello! I'm Nitin Singh, a passionate Frontend developer
                specializing in creating innovative web solutions and
                user-friendly interfaces.{" "}
                <span className="font-bold text-gray-900 dark:text-white">
                  As the creator of the OlovaJS UI Framework
                </span>
                , I'm dedicated to simplifying development workflows.
              </p>
              <p className="text-gray-700 dark:text-white">
                My focus is on making web development faster, easier, and
                accessible to all developers. Currently, I'm expanding into
                backend development to grow as a full-stack developer and create
                seamless, robust web applications.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-400 dark:border-gray-300 pl-4">
                  <p className="text-gray-700 dark:text-white">
                    I'm a lifelong learner and innovator, driven by a desire to
                    contribute to the developer community with new ideas and
                    tools that deliver real value. As the creator of OlovaJS,
                    I'm pushing the boundaries of JavaScript frameworks to
                    empower developers worldwide.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-gray-900 dark:text-white">
                      Nazmul Hossain, Creator of
                    </cite>
                    <div className="flex items-center gap-2">
                      <img
                        className="h-5 w-fit"
                        src={OlovaLogo}
                        alt="Olova Logo"
                        height="20"
                        width="auto"
                      />
                      <span className="text-gray-900 dark:text-white">OlovaJS</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
