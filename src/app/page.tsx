'use client';
import Hero from '@/components/landing/hero';


import AboutSect from '@/src/components/landing/aboutsect';
import ServicesSect from '@/components/landing/subscription';
import ActivitySect from '@/components/landing/activitysect';
import Testimonials from '@/components/landing/testimonials';
import RecentBlogs from '@/components/landing/recentblogs';
import Faq from '@/components/landing/faq';

import Materials from '@/src/components/landing/materials';
import Sub from '@/components/landing/subscription';
import Stats from '@/components/landing/stats';
// import Testimonials from '@/components/landing/testimonials';

export default function Page() {
  return (
    <div className="_body">
    
      <Hero />
      <AboutSect />
      {/* <ServicesSect /> */}
      <ActivitySect />
      {/* <Testimonials /> */}
      {/* <RecentBlogs /> */}
      <Faq />

      {/* <Hero /> */}
      {/* <Materials /> */}
      {/* <Sub /> */}
      <Stats />
      <Testimonials /> 
      {/* <RecentBlogs /> */}

    </div>
  );
}
