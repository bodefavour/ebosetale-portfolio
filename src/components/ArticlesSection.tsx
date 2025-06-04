import React from "react";
import { motion } from "framer-motion";

type Article = {
  title: string;
  source: string;
  date: string;
  snippet: string;
  url: string;
  imageUrl: string;
};

const articles: Article[] = [
  {
    title: "Okhueleigbe Wins International Golf Tournament in Tanzania",
    source: "Vanguard Nigeria",
    date: "2023-09-11",
    snippet: "Stella Whyte clinched the coveted overall winner’s trophy at the CEO Golf Cup tournament in Zanzibar, Tanzania, with 40 Stableford points.",
    url: "https://www.vanguardngr.com/2023/09/okhueleigbe-wins-international-golf-tournament-in-tanzania/",
    imageUrl: "https://www.vanguardngr.com/wp-content/uploads/2023/09/golf-tournament.jpg"
  },
  {
    title: "Stella Whyte Celebrates 23rd Birthday With 300 Widows and Orphans in Jos",
    source: "Nairaland",
    date: "2018-03-06",
    snippet: "Stella Whyte celebrated her 23rd birthday by hosting over 300 widows and orphans in Jos, Plateau State.",
    url: "https://www.nairaland.com/4382687/stella-whyte-celebrates-23rd-birthday",
    imageUrl: "https://www.nairaland.com/4382687/stella-whyte-celebrates-23rd-birthday/image.jpg"
  },
  {
    title: "This Beautiful Lady Is Representing Nigeria At Miss Polo International 2018",
    source: "Tori News",
    date: "2018-03-16",
    snippet: "Stella Whyte represented Nigeria at the Miss Polo International 2018 competition, showcasing her beauty and elegance.",
    url: "https://www.tori.ng/news/91267/this-beautiful-lady-is-representing-nigeria-at-mis.html",
    imageUrl: "https://www.tori.ng/news/91267/this-beautiful-lady-is-representing-nigeria-at-mis.html/image.jpg"
  }
];

export const ArticlesSection: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-[#121214] text-gray-300">
      <h2 className="text-3xl md:text-4xl font-serif text-yellow-400 mb-12 text-center">
        Featured Articles
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {articles.map(({ title, source, date, snippet, url, imageUrl }, idx) => (
          <motion.a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="group relative bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
          >
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-yellow-400 font-semibold text-lg text-center">{title}</h3>
              <p className="text-gray-300 text-sm mt-2">{snippet}</p>
              <p className="text-gray-400 text-xs mt-2">{source} - {new Date(date).toLocaleDateString()}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};