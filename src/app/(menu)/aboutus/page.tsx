import AboutUs from '@/components/about_us_components/AboutUs'
import BackedBy from '@/components/about_us_components/BackedBy'
import CompanyTimeline from '@/components/about_us_components/CompanyTimeline'
import HowWeAreChanging from '@/components/about_us_components/HowWeAreChanging'
import RelatedPosts from '@/components/about_us_components/RelatedPosts'
import StatusCard from '@/components/about_us_components/StatusCard'
import BetterOverview from '@/components/home_page_component/BetterOverview'
import Footer from '@/components/home_page_component/Footer'
import React from 'react'

const page = () => {
  return (
    <div>
      <AboutUs/>
      <StatusCard/>
      <HowWeAreChanging/>
      <BackedBy/>
      <CompanyTimeline/>
      <RelatedPosts/>
        <BetterOverview/>
   <Footer/>
    </div>
  )
}

export default page
