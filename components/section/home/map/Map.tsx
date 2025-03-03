import WorldMap from "@/components/ui/world-map";

export function Map() {
  return (
    <section className="py-10 bg-white w-full">
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 51.5074, lng: -0.1278 }, // Lisbon
          },
          // {
          //   start: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          //   end: { lat: 51.5074, lng: -3.1578 }, // London
          // },
          // {
          //   start: { lat: 51.5074, lng: -3.1578 }, // London
          //   end: { lat: 46.2276, lng: 5.2137 }, // France
          // },
          // {
          //   start: { lat: 46.2276, lng: 2.2137 }, // France
          //   end: { lat: 23.8859, lng: 45.0792 }, // Saudi Arabia
          // },
          {
            start: { lat: -6.082, lng: 8.6753 }, // South Africa
            end: { lat: -45.5595, lng: 22.9375 }, // Nigeria
          },
          {
            start: { lat: -45.5595, lng: 22.9375 }, // Saudi Arabia
            end: { lat: 7.8731, lng: 80.7718 }, // South Africa
          },
          // {
          //   start: { lat: 13.8859, lng: 42.0792 }, // Saudi Arabia
          //   end: { lat: 7.8731, lng: 80.7718 }, // Sri Lanka
          // },
          {
            start: { lat: 7.8731, lng: 80.7718 }, // London
            end: { lat: 51.5074, lng: -0.1278 }, // New Delhi
          },
          {
            start: { lat: 7.8731, lng: 80.7718 }, // Sri Lanka
            end: { lat: 39.916668, lng: 116.383331 }, // China
          },
          {
            start: { lat: 7.8731, lng: 80.7718 }, // Cgina
            end: { lat: -44.8136, lng: 146.9631 }, // Melbourne
          },
        ]}
      />
    </section>
  );
}
