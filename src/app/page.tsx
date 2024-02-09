'use client';
import Hero from '@/components/landing/hero';

import Materials from '@/src/components/landing/materials';
import Sub from '@/components/landing/subscription';
import Stats from '@/components/landing/stats';
// import Testimonials from '@/components/landing/testimonials';

import AboutSect from '@/src/components/landing/aboutsect';
import ServicesSection from '@/components/landing/subscription';
import ActivitySection from '@/components/landing/stats';
import Testimonials from '@/components/landing/testimonials';
import RecentBlogs from '@/components/landing/recentblogs';

import Faq from '@/components/landing/faq';


export default function Page() {
  return (
    <div className="_body">
    <Hero />
      {/* <Materials /> */}
      {/* <Sub /> */}
      {/* <Stats /> */}
      {/* <Testimonials />  */}
      {/* <RecentBlogs /> */}

      
      <AboutSect />
      {/* <ServicesSection /> */}
      {/* <Services /> */}
      {/* <ActivitySection /> */}
      {/* <Testimonials /> */}
      {/* <RecentBlogs /> */}

     
      <Faq />
    </div>
  );
}
