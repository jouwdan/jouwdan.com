import { getSortedPosts } from "@/lib/blog";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";

export default async function BlogPage() {
  const posts = await getSortedPosts();

  return (
    <div className="container mx-auto py-8 md:py-12 lg:py-24">
      <div className="mx-auto max-w-[64rem]">
        <h1 className="font-heading text-4xl md:text-6xl mb-8">Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.slug} className="group relative">
              <Link href={`/blog/${post.slug}`}>
                <div className="relative overflow-hidden rounded-xl border bg-background p-2 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                  {post.cover && (
                    <div className="relative h-48 w-full mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={post.cover}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="space-y-3 p-4">
                    <h2 className="font-heading text-xl line-clamp-2">{post.title}</h2>
                    <div className="text-sm text-muted-foreground">
                      {format(new Date(post.date), "MMMM d, yyyy")}
                    </div>
                    {post.excerpt && (
                      <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                    )}
                    {post.tags && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
