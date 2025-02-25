import SearchForm from "@/components/SearchForm";
import PostCard, { PostTypeCard } from "@/components/PostCard";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = {search: query || null};

  const { data: posts } = await sanityFetch({ query: POSTS_QUERY, params });

  return (
    <>
      <section className={"pink_container"}>
        <h1 className={"heading"}>
          Post your muse! <br /> We would love to see it!
        </h1>

        <p className={"sub-heading !max-w-3xl"}>
          Share your creative process for the world to see!
        </p>

        <SearchForm query={query} />
      </section>

      <section className={"section_container"}>
        <p className={"text-30-semibold"}>
          {query ? `Search results for "${query}"` : "All posts"}
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

        <SanityLive/>
    </>
  );
}
