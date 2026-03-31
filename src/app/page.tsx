import Link from 'next/link'
import DemoForm from '@/components/DemoForm'
import ExpandableImage from '@/components/ExpandableImage'
import MTAMDonut from '@/components/MTAMDonut'

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* â”€â”€ HERO â”€â”€ */}
      <section className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight tracking-tight">
            Map your{" "}
            <span className="text-brand-600">roll-up</span>
            <br />
            strategy.
          </h1>
          <p className="text-lg md:text-xl text-gray-500 mb-10 leading-relaxed">
            Geographic market intelligence for PE firms backing location-based businesses.
            Visualize public and private local market data, identify white space, and move faster than your competition.
          </p>

        </div>
      </section>

      {/* â”€â”€ SECTION 1: Prioritize markets â”€â”€ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Prioritize markets for expansion
          </h2>
          <ExpandableImage src="/screenshot-table.jpg" alt="PinpointIQ market prioritization dashboard" width={1200} height={700} />
        </div>
      </section>

      {/* â”€â”€ SECTION 2: Visualize market dynamics â”€â”€ */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Visualize local market dynamics
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <ExpandableImage src="/screenshot-map.jpg" alt="PinpointIQ local market map view" width={1200} height={700} />
          </div>
        </div>
      </section>

      {/* â”€â”€ SECTION 3: Competition & targets â”€â”€ */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Understand local market competition &amp; add-on target availability
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <ExpandableImage src="/screenshot-targets.jpg" alt="PinpointIQ competitive landscape and acquisition targets" width={1200} height={700} />
          </div>
        </div>
      </section>
      {/* SECTION 4: mTAM and market share */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
            Calculate micro TAM (mTAM) and estimate market share
          </h2>
          <div className="flex justify-center">
            <MTAMDonut />
          </div>
        </div>
      </section>


      {/* â”€â”€ SECTION 5: Book a Demo â”€â”€ */}
      <section className="py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Book a Demo
          </h2>
          <p className="text-gray-500 mb-10 text-lg">
            See how PinpointIQ can accelerate your roll-up strategy. We&apos;ll walk you through the platform with your specific market.
          </p>
          <DemoForm />
        </div>
      </section>

    </main>
  )
}

