import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Ciao, I'm Ashley!
        💡 Passionate about: AGI 🤖 • Software Development 💻 • Game Development 🎮
      </h1>
      <p className="mb-4">
        {`...`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
                                                                                