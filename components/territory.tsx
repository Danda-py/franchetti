"use client"

import { MapPin } from "lucide-react"

export function Territory() {
  const locations = [
    {
      name: "Ponte in Valtellina Location",
      address: "Via Molini, 3, 23026 Ponte in Valtellina (SO)",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Via+Molini+3+23026+Ponte+in+Valtellina+SO",
    },
    {
      name: "Tresivio Location",
      address: "Via Palù, 39, 23020 Tresivio SO, Italy",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Via+Palù+39+23020+Tresivio+SO+Italy",
    },
  ]

  return (
    <section id="territory" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Territory
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-balance">
            The lands of Franchetti farm are located on the Rhon alluvial fan, between Ponte in Valtellina and Tresivio,
            in an ideal area for fruit growing thanks to the climate and sun exposure. Valtellina, rich in biodiversity
            and characterized by strong thermal excursions, gives the fruit unique organoleptic qualities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {locations.map((location, index) => (
            <div key={index} className="p-8 rounded-lg bg-card border border-border">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-2">{location.name}</h3>
                  <p className="text-muted-foreground mb-4">{location.address}</p>
                  <a
                    href={location.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline"
                  >
                    View on Google Maps
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> {/* ✅ chiusura mancante */}
    </section>
  )
}
