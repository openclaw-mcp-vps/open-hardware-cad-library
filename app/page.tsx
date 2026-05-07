export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Nav */}
      <nav className="border-b border-[#30363d] px-6 py-4 flex items-center justify-between max-w-6xl mx-auto">
        <span className="text-[#58a6ff] font-bold text-lg tracking-tight">OpenCAD Library</span>
        <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#79b8ff] transition-colors">
          Get Access
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          Creative Commons &amp; Open-Source Hardware
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#e6edf3] leading-tight mb-6">
          The CAD Library Built for{" "}
          <span className="text-[#58a6ff]">Open Hardware</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Search thousands of curated CAD files — STEP, STL, KiCad, FreeCAD and more. Version-controlled, collaboration-ready, and always open-source.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={checkoutUrl} className="bg-[#58a6ff] text-[#0d1117] px-8 py-3 rounded-md font-semibold text-base hover:bg-[#79b8ff] transition-colors">
            Start for $15/mo
          </a>
          <a href="#faq" className="border border-[#30363d] text-[#c9d1d9] px-8 py-3 rounded-md font-semibold text-base hover:border-[#58a6ff] hover:text-[#58a6ff] transition-colors">
            Learn More
          </a>
        </div>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-14">
          {["Full-text search","Version history","Team collaboration","Cloud storage","STEP / STL / KiCad","CC-licensed designs"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#8b949e] text-sm px-4 py-2 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-[#e6edf3] text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
          <div className="text-center mb-6">
            <p className="text-[#8b949e] text-sm mb-1">Pro Access</p>
            <p className="text-5xl font-bold text-[#e6edf3]">$15<span className="text-xl text-[#8b949e] font-normal">/mo</span></p>
          </div>
          <ul className="space-y-3 mb-8">
            {[
              "Unlimited CAD file downloads",
              "Full-text search across all designs",
              "Version history & diffs",
              "Team workspaces (up to 5 members)",
              "Cloud storage for your own designs",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a href={checkoutUrl} className="block w-full text-center bg-[#58a6ff] text-[#0d1117] py-3 rounded-md font-semibold hover:bg-[#79b8ff] transition-colors">
            Get Started
          </a>
          <p className="text-center text-[#8b949e] text-xs mt-4">Cancel anytime. No lock-in.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-[#e6edf3] text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-[#e6edf3] mb-2">What file formats are supported?</h3>
            <p className="text-[#8b949e] text-sm">We support STEP, STL, IGES, FreeCAD, KiCad, Gerber, DXF, and more. New formats are added based on community requests.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-[#e6edf3] mb-2">Are the designs truly open-source?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Every design in the library is licensed under Creative Commons, CERN OHL, or another approved open-source hardware license. License details are shown on every file.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h3 className="font-semibold text-[#e6edf3] mb-2">Can I upload and share my own designs?</h3>
            <p className="text-[#8b949e] text-sm">Absolutely. Pro subscribers can upload designs, manage version history, and collaborate with teammates — all within your private workspace or shared publicly.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e] text-sm">
        <p>&copy; {new Date().getFullYear()} OpenCAD Library. Built for the open hardware community.</p>
      </footer>
    </main>
  );
}
