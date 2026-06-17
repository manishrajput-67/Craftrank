import { Search, BarChart3, Rocket } from "lucide-react";

export default function Features() {
  const data = [
    {
      icon: <Search size={40} />,
      title: "AI Keyword Research",
      desc: "Find profitable Etsy keywords instantly."
    },
    {
      icon: <BarChart3 size={40} />,
      title: "Competitor Analysis",
      desc: "Track top competitors and discover gaps."
    },
    {
      icon: <Rocket size={40} />,
      title: "Listing Optimization",
      desc: "Boost ranking using AI suggestions."
    }
  ];

  return (
    <section className="max-w-7xl mx-auto py-24 px-8">
      <h2 className="text-5xl font-bold text-center mb-16">
        Everything You Need To Rank Higher
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-[#0f172a] border border-gray-800 p-8 rounded-3xl hover:border-violet-500 transition"
          >
            <div className="text-violet-400 mb-5">
              {item.icon}
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-400">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}