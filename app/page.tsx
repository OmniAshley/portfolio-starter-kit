import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Hello there, I am Ashley Beebakee, I think it's about time that I
        showcased my work and projects here. Feel free to explore
        and get in touch! Do try out the deployed projects, and let me know.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
                                                                                