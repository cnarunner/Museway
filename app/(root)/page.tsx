import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({searchParams}: {
    searchParams: Promise<{ query?: string}>
}) {
    const query = (await searchParams).query;

    const posts  = [
        {
            _createdAt: new Date(),
            views: 55,
            author: {_id: 1, name: 'Creative Genius'},
            _id: 1,
            title: 'Muse 1',
            description: 'Muse 1 description',
            image: 'https://picsum.photos/600/900',
            category: 'Muse Test'
        },
        {
            _createdAt: new Date(),
            views: 1000,
            author: {_id: 2, name: 'Pink Peel Creations'},
            _id: 2,
            title: 'Muse 2',
            description: 'Muse 2 description',
            image: 'https://picsum.photos/300/450',
            category: 'Muse Test'
        }];

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
                    posts.map((post: StartupTypeCard) => (
                        <StartupCard key={post?._id} post={post} />
                    ))
                ) : (
                    <p className="no-results">No startups found</p>
                )}
            </ul>
        </section>
    </>
  );
}
