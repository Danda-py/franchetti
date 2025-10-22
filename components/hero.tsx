export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src="/valtellina-mountains-orchards-landscape.jpg" alt="Valtellina landscape" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 text-balance">Franchetti Frutta</h1>
        <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto text-balance">
          Tradition, ethics and organic quality in the heart of Valtellina
        </p>
      </div>
    </section>
  )
}
