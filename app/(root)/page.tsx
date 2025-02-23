import SearchForm from "@/components/SearchForm";
import PostCard from "@/components/PostCard";
import {client} from "@/sanity/lib/client";
import {POST_QUERY} from "@/sanity/lib/queries";

export default async function Home({searchParams}: {
    searchParams: Promise<{ query?: string}>
}) {
    const query = (await searchParams).query;

    const posts = await client.fetch(POST_QUERY)

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

        <section className={"section_container"}>
            <p className={"text-30-semibold"}>
                {query ? `Search results for "${query}"` : 'All posts' }
            </p>

            <ul className={"mt-7 card_grid"}>
                {posts?.length > 0 ? (
                    posts.map((post: PostTypeCard) => (
                        <PostCard key={post?._id} post={post} />
                    ))
                ) : (
                    <p className="no-results">No startups found</p>
                )}
            </ul>
        </section>
    </>
  );
}
