// src/app/page.tsx

type ToolCardProps = {
  title: string;
  href: string;
  description: string;
};

function ToolCard({ title, href, description }: ToolCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-6 border border-gray-200 rounded-lg bg-white hover:bg-gray-50 hover:shadow-xl transition-shadow"
    >
      <h3 className="text-xl font-semibold mb-2">
        {title} <span className="ml-1">→</span>
      </h3>
      <p className="text-sm text-gray-600">{description}</p>
    </a>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Muni Research Lab
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Empowering researchers with cutting-edge ophthalmology tools and data insights.
        </p>
        <div className="mt-8">
          <a
            href="/about"
            className="inline-block px-6 py-3 text-base font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-500 transition-colors"
          >
            About
          </a>
        </div>
      </section>

      {/* Tools Section */}
      <section
        id="tools"
        className="container mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-800"
      >
        <ToolCard
          title="OCTess"
          href="https://www.octess.ca/"
          description="An automated spectral domain optical coherence tomography data extraction tool."
        />

        <ToolCard
          title="OphthoAI"
          href="https://hidden-wildwood-01085.herokuapp.com/"
          description="Tool for automatic OCT B-Scan classification."
        />

        <ToolCard
          title="SBSA"
          href="https://github.com/jui434/SBSA"
          description="Segmentation and volume calculation for subretinal fluid using OCT images."
        />
      </section>
    </main>
  );
}
