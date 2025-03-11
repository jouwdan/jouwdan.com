import { getPostBySlug } from "@/lib/blog"
import { format } from "date-fns"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight"

type BlogPostPageProps = {
  params: {
    slug: string
  }
  searchParams?: { [key: string]: string | string[] | undefined }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto py-8 md:py-12 lg:py-24">
      <div className="mx-auto max-w-[58rem]">
        <div className="mb-8">
          <Button variant="ghost" size="icon" className="rounded-full" asChild>
            <Link href="/blog">
              <ArrowLeft className="h-4 w-4" />
              <span className="sr-only">Back to blog</span>
            </Link>
          </Button>
        </div>
        <article className="prose prose-slate dark:prose-invert max-w-none">
          {post.cover && (
            <Image
              src={post.cover}
              alt={post.title}
              width={1200}
              height={400}
              className="w-full h-[400px] object-cover rounded-lg mb-8"
            />
          )}
          <h1 className="font-heading text-4xl md:text-6xl mb-4">{post.title}</h1>
          <time className="text-sm text-muted-foreground">
            {format(new Date(post.date), "MMMM d, yyyy")}
          </time>
          {post.tags && (
            <div className="mt-4 flex flex-wrap gap-2">
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
          <div className="mt-8">
            <Markdown rehypePlugins={[rehypeHighlight]}>{post.content}</Markdown>
          </div>
        </article>
      </div>
    </div>
  )
}

