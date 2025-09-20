import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`This is Ashley Beebakee, I think it's about time that I
        showcased my work and projects here. Feel free to explore
        and get in touch!`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
