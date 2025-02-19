import Image from "next/image";
import SearchForm from "@/app/components/SearchForm";

export default async function Home({searchParams}: {
    searchParams: Promise<{ query?: string}>
}) {
    const query = (await searchParams).query;

  return (
    <>
        <section className={"pink_container"}>
            <h1 className={"heading"}>
                Post your muse! <br/> We would love to see it!
            </h1>

            <p className={"sub-heading !max-w-3xl"}>
                Share your creative process for the world to see!
            </p>

            <SearchForm query={query}/>

        </section>
    </>
  );
}
