export default function Hero() {
  return (
    <section className="relative text-center py-28 px-6">

      <div className="absolute w-[500px] h-[500px] bg-purple-700/20 blur-[180px] rounded-full top-0 left-0"></div>

      <div className="absolute w-[500px] h-[500px] bg-violet-600/20 blur-[180px] rounded-full top-0 right-0"></div>

      <span className="border border-violet-500 px-5 py-2 rounded-full text-violet-300">
        ✨ AI Powered Etsy SEO Tool
      </span>

      <h1 className="text-7xl font-bold mt-8 leading-tight">
        Rank Your Etsy Listings
        <br />
        <span className="bg-gradient-to-r from-white to-violet-400 bg-clip-text text-transparent">
          With AI
        </span>
      </h1>

      <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-xl">
        Discover profitable keywords, analyze competitors,
        and optimize your Etsy listings in seconds.
      </p>

      <div className="flex justify-center gap-5 mt-10">
        <button className="bg-gradient-to-r from-violet-500 to-purple-600 px-8 py-4 rounded-xl font-semibold">
          Get Started Free
        </button>

        <button className="border border-gray-700 px-8 py-4 rounded-xl">
          Watch Demo
        </button>
      </div>
    </section>
  );
}