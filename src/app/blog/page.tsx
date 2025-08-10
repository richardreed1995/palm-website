import Link from 'next/link';
import Image from 'next/image';
import { HeroHeader } from '@/components/header';
import FooterSection from '@/components/footer';

const posts = [
  {
    slug: 'hidden-cost-manual-processes',
    title: 'The Hidden Cost of Manual Processes in B2B Service Businesses',
    category: 'Business',
    date: 'January 15, 2025',
    image: '/gradii-1920x1080 (18).png',
    excerpt: 'Discover how manual processes are silently eating away at your profits and learn the strategic approach to automation that successful businesses use.'
  },
  {
    slug: 'why-automation-projects-fail',
    title: 'Why Most Business Automation Projects Fail (And How to Get It Right)',
    category: 'Automation',
    date: 'January 22, 2025',
    image: '/gradii-1920x1080 (19).png',
    excerpt: 'Learn the five most common reasons automation fails and the proven methodology that successful businesses use to implement automation correctly.'
  },
  {
    slug: '90-day-automation-roadmap',
    title: 'The 30-60-90 Day Automation Roadmap for B2B Service Businesses',
    category: 'Strategy',
    date: 'January 29, 2025',
    image: '/gradii-1920x1080 (20).png',
    excerpt: 'Follow this proven 90-day roadmap to systematically automate your business processes and create sustainable competitive advantage.'
  },

];

export default function BlogList() {
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      <HeroHeader />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 pt-28 pb-16">
        <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-2xl overflow-hidden shadow hover:shadow-lg transition-all bg-white border border-gray-100">
              <div className="aspect-[4/3] w-full relative">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 flex flex-col gap-2">
                <div className="text-sm text-gray-500 font-medium">{post.category} <span className="ml-2">{post.date}</span></div>
                <h2 className="text-xl font-semibold leading-tight group-hover:underline">{post.title}</h2>
                <p className="text-gray-600 text-base mt-2 line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
        {/* Pagination (static example) */}
        <div className="flex justify-center gap-2">
          <button className="px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200" disabled>Previous</button>
          <button className="px-4 py-2 rounded bg-gray-900 text-white hover:bg-gray-700">1</button>
          <button className="px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200">2</button>
          <button className="px-4 py-2 rounded bg-gray-100 text-gray-700 hover:bg-gray-200">Next</button>
        </div>
      </main>
      <FooterSection />
    </div>
  );
} 