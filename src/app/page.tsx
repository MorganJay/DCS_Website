'use client';
import Hero from '@/components/landing/hero';
import Materials from '@/components/landing/materials';
import Sub from '@/components/landing/subscription';
import Stats from '@/components/landing/stats';
import Testimonials from '@/components/landing/testimonials';
import Faq from '@/components/landing/faq';
import RecentBlogs from '@/components/landing/recentblogs';

export default function Page() {
  return (
    <div className="_body">
    <Hero />
      {/* <Materials />
      <Sub />
      <Stats />
      <RecentBlogs />
      <Testimonials /> */}
      <Faq />
    </div>
  );
}
