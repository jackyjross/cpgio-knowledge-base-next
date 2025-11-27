export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl font-bold text-primary">
          CPGIO Knowledge Base
        </h1>
        <p className="text-xl text-text-secondary">
          Choose your path: discover our capabilities, evaluate us for an RFP, or access internal resources.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 border border-border rounded-lg hover:border-accent-blue hover:shadow-lg transition-all cursor-pointer">
            <div className="w-14 h-14 bg-bg-accent-blue rounded-md flex items-center justify-center mb-4 mx-auto">
              <svg className="w-7 h-7 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">New to CPGIO?</h3>
            <p className="text-text-secondary text-base">
              Explore our 5 strategic pillars and 12 core capabilities with proven KPIs and case studies.
            </p>
            <div className="mt-4 text-accent-blue font-semibold text-sm">
              Explore Capabilities →
            </div>
          </div>

          <div className="p-6 border border-border rounded-lg hover:border-accent-blue hover:shadow-lg transition-all cursor-pointer">
            <div className="w-14 h-14 bg-bg-accent-blue rounded-md flex items-center justify-center mb-4 mx-auto">
              <svg className="w-7 h-7 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Evaluating Us?</h3>
            <p className="text-text-secondary text-base">
              Get direct answers to common RFP questions with copy-paste responses and supporting data.
            </p>
            <div className="mt-4 text-accent-blue font-semibold text-sm">
              Browse RFP Center →
            </div>
          </div>

          <div className="p-6 border border-border rounded-lg hover:border-accent-blue hover:shadow-lg transition-all cursor-pointer">
            <div className="w-14 h-14 bg-bg-accent-blue rounded-md flex items-center justify-center mb-4 mx-auto">
              <svg className="w-7 h-7 text-accent-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Internal Team?</h3>
            <p className="text-text-secondary text-base">
              Use AI-powered search to find specific answers, case studies, or prep for client calls.
            </p>
            <div className="mt-4 text-accent-blue font-semibold text-sm">
              Search Knowledge Base →
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <h2 className="text-2xl font-semibold mb-6">Performance Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-blue">48K units/hr</div>
              <div className="text-sm text-text-secondary mt-1">Peak Velocity</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-blue">5-8x</div>
              <div className="text-sm text-text-secondary mt-1">ROAS Range</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-blue">$526K</div>
              <div className="text-sm text-text-secondary mt-1">Monthly Revenue Recovery</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-blue">800+</div>
              <div className="text-sm text-text-secondary mt-1">ASINs Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-blue">56</div>
              <div className="text-sm text-text-secondary mt-1">Sellers Removed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-blue">&lt;0.01%</div>
              <div className="text-sm text-text-secondary mt-1">Defect Rate</div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-text-tertiary text-sm">
          <p>Next.js Production Build • Phase 1: Foundation Complete</p>
        </div>
      </div>
    </div>
  );
}
