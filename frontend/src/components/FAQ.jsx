import { useState } from 'react'

const faqs = [
  {
    id: 1,
    q: 'What is a VPN and why do I need one in 2026?',
    a: 'A VPN (Virtual Private Network) encrypts your internet traffic and hides your IP address, protecting you from hackers, surveillance, and geo-restrictions. In 2026, with rising cyber threats and widespread data tracking, a VPN is essential for anyone who values online privacy, security on public Wi-Fi, or access to global streaming content.',
  },
  {
    id: 2,
    q: 'Which VPN is the absolute best in 2026?',
    a: "NordVPN ranks #1 in our 2026 tests with a score of 9.8/10. It offers the fastest speeds (NordLynx protocol), widest server coverage (7,100+ servers in 118 countries), and advanced Threat Protection. It's ideal for most users whether they want privacy, streaming, or gaming performance.",
  },
  {
    id: 3,
    q: 'Are free VPNs safe to use?',
    a: 'Most free VPNs are not safe — they often log and sell your data to cover costs. The only reputable free option we recommend is ProtonVPN\'s free plan, which offers unlimited bandwidth and a strict no-logs policy. For full features, a premium VPN like Surfshark ($1.99/mo) offers exceptional value.',
  },
  {
    id: 4,
    q: 'Will a VPN slow down my internet speed?',
    a: 'A quality VPN will cause minimal speed reduction — our top picks like NordVPN and ExpressVPN only reduce speeds by 3–5% in our tests. Avoid cheap or free VPNs which can cut speeds by 50%+. Using servers geographically close to you also minimizes any performance impact.',
  },
  {
    id: 5,
    q: 'Can I use a VPN for Netflix and streaming?',
    a: 'Yes! Most premium VPNs on our list work with Netflix, Disney+, HBO Max, and BBC iPlayer. NordVPN and ExpressVPN are our top picks for streaming, with dedicated servers optimized for bypassing geo-blocks. CyberGhost also has specific streaming servers labeled by service.',
  },
  {
    id: 6,
    q: 'Is using a VPN legal?',
    a: 'VPNs are completely legal in most countries including the US, UK, EU, Canada, and Australia. However, a few countries restrict or ban VPN use (China, Russia, Iran, UAE). Even where legal, using a VPN for illegal activities is still against the law. Always use a VPN responsibly.',
  },
  {
    id: 7,
    q: 'How do you test and rank the VPNs on this list?',
    a: 'Our team of 10 security experts tests each VPN across 6 categories: (1) Speed tests via 50+ servers, (2) Security & encryption audit, (3) Privacy policy & no-logs verification, (4) Streaming unblocking capability, (5) Ease of use across platforms, and (6) Value for money. All tests are updated quarterly.',
  },
  {
    id: 8,
    q: 'What is a no-logs VPN policy?',
    a: "A no-logs policy means the VPN provider doesn't store any record of your online activity — websites visited, downloads, or connection timestamps. The best VPNs (NordVPN, ExpressVPN, ProtonVPN) have had their no-logs claims verified by independent security auditors like PwC and Cure53.",
  },
]

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false)

  return (
    <div id={`faq-item-${faq.id}`} className="border border-border-soft rounded-card bg-white overflow-hidden">
      <button
        id={`faq-toggle-${faq.id}`}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-bg-secondary transition-colors duration-200"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-text-primary text-sm leading-snug">{faq.q}</span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full bg-brand/10 flex items-center justify-center text-brand font-bold text-sm transition-transform duration-300 ${open ? 'rotate-180' : ''}`}>
          ↓
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="px-5 pb-5 pt-1 text-sm text-gray-500 leading-relaxed border-t border-border-soft">
          {faq.a}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-16 bg-bg-secondary">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <div className="badge bg-brand/10 text-brand mb-3 text-xs font-bold px-3 py-1 mx-auto inline-flex">
            💬 FAQ
          </div>
          <h2 className="section-heading">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-sm mt-2">
            Everything you need to know about VPNs in 2026
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
