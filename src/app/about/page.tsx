// src/app/about/page.tsx

export default function AboutPage() {
    return (
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="py-16 text-center">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-2">
            About Our Lab
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Driving innovation in ophthalmology research.
          </p>
        </section>
  
        {/* About Content */}
        <section className="container mx-auto px-4 pb-16">
          <div className="max-w-3xl mx-auto bg-gray-50 shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We specialize in ophthalmology research and provide a suite of tools
              to facilitate data analysis, automate processes, and ensure accurate
              results for cutting-edge eye care. Our mission is to leverage
              technology and scientific insight to advance the field of
              ophthalmology.
            </p>
  
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Focus</h3>
            <ul className="list-disc list-inside text-gray-600 mb-6 space-y-1">
              <li>OCT data extraction and classification</li>
              <li>Subretinal fluid segmentation and volume calculation</li>
              <li>Deep learning models for clinical insights</li>
            </ul>
  
            <p className="text-gray-600 leading-relaxed">
              Our multidisciplinary team combines expertise in medical imaging,
              data science, and ophthalmology to develop groundbreaking
              solutions—helping clinicians and researchers unlock deeper insights
              into eye health.
            </p>
          </div>
        </section>
      </main>
    );
  }
  