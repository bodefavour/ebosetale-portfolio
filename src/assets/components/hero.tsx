import { useEffect } from "react"; import { motion } from "framer-motion"; import "./App.css";

const App = () => { useEffect(() => { document.title = "Stella Whyte | Portfolio"; }, []);

return ( <main className="bg-[#0e0e10] text-gray-100 font-sans"> <HeroSection /> <AboutSection /> </main> ); };

const HeroSection = () => { return ( <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"> {/* Glowing background light */} <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-900/10 to-transparent rounded-full blur-3xl z-0 animate-pulse"></div>

<motion.h1
    initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-serif text-yellow-400 z-10"
                  >
                      Mrs. Okhueileigbe Ebosetale
                        </motion.h1>

                          <motion.p
                              initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: 0.5, duration: 1 }}
                                          className="mt-4 text-lg md:text-xl text-gray-300 z-10"
                                            >
                                                Model. Philanthropist. Golf Champion. Media Personality.
                                                  </motion.p>

                                                    <motion.div
                                                        initial={{ opacity: 0 }}
                                                            animate={{ opacity: 1 }}
                                                                transition={{ delay: 1, duration: 1 }}
                                                                    className="mt-6 flex flex-col sm:flex-row gap-4 z-10"
                                                                      >
                                                                          <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold shadow-lg">
                                                                                View Achievements
                                                                                    </button>
                                                                                        <button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-full font-semibold transition">
                                                                                              Explore Foundation
                                                                                                  </button>
                                                                                                    </motion.div>

                                                                                                      {/* Profile Image Placeholder */}
                                                                                                        <div className="w-40 h-40 md:w-60 md:h-60 bg-gray-800 rounded-full mt-10 border-4 border-yellow-400 z-10" />
                                                                                                        </section>

                                                                                                        ); };

                                                                                                        const AboutSection = () => { return ( <section className="py-16 px-6 md:px-20 bg-[#0e0e10] text-gray-200 relative"> <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="max-w-4xl mx-auto" > <h2 className="text-3xl md:text-4xl font-serif text-yellow-400 mb-4"> About Stella Whyte </h2> <p className="text-lg leading-relaxed"> Born with the name Okhueileigbe Ebosetale – meaning "what God has said will surely come to pass" – Stella Whyte is a dynamic force: a model, philanthropist, golf champion, and media personality. She holds a degree in Business Administration from the University of Benin and graduated from the Word of Faith Bible Institute. </p> <p className="mt-4 text-lg leading-relaxed"> Her charisma and bold personality led her to win prestigious beauty pageants like Miss ITV Hot Legs and become the Face of Afriwomen Magazine. She's also a top golfer, winning tournaments across Africa. Her humanitarian reach expands through the Stella Whyte Foundation, impacting lives through empowerment and support initiatives. </p> </motion.div> </section> ); };

                                                                                                        export default App;

                                                                                                        