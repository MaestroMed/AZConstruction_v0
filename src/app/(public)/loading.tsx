export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="h-16 bg-navy-dark" />

      <main className="flex-1">
        <section className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-navy-dark via-navy-dark to-blue-corporate overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan-glow blur-3xl animate-pulse" />
          </div>
          <div className="container relative mx-auto px-6 h-full flex flex-col justify-center">
            <div className="h-4 w-32 bg-white/10 rounded animate-pulse mb-6" />
            <div className="h-12 w-3/4 max-w-2xl bg-white/15 rounded-xl animate-pulse mb-4" />
            <div className="h-12 w-1/2 max-w-xl bg-white/15 rounded-xl animate-pulse mb-6" />
            <div className="h-4 w-full max-w-lg bg-white/10 rounded animate-pulse mb-2" />
            <div className="h-4 w-2/3 max-w-lg bg-white/10 rounded animate-pulse" />
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="h-8 w-64 bg-gray-200 rounded mx-auto animate-pulse mb-4" />
              <div className="h-4 w-96 max-w-full bg-gray-100 rounded mx-auto animate-pulse" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-64 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl animate-pulse"
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="h-6 w-48 bg-gray-200 rounded animate-pulse" />
              <div className="h-4 w-full bg-gray-100 rounded animate-pulse" />
              <div className="h-4 w-5/6 bg-gray-100 rounded animate-pulse" />
              <div className="h-4 w-4/6 bg-gray-100 rounded animate-pulse" />
            </div>
          </div>
        </section>
      </main>

      <div className="h-[200px] bg-navy-dark" />
    </div>
  );
}
