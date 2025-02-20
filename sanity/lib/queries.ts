import { defineQuery } from "groq";

export const POST_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)] | order(_createdAt desc) {
            _id,
            title,
            slug,
            _createdAt,
            author -> {
                _id, name, image, bio
            },
            views,
            description,
            category,
            image
        }`,
);
