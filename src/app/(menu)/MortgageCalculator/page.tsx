import BetterOverview from '@/components/home_page_component/BetterOverview'
import Footer from '@/components/home_page_component/Footer'
import MonthlyBreakdown from '@/components/MortgageCalculator_comonent/MonthlyBreakdown'
import MortgageCalculator from '@/components/MortgageCalculator_comonent/MortgageCalculator'
import MortgageInfo from '@/components/MortgageCalculator_comonent/MortgageInfo'
import React from 'react'

const page = () => {
  return (
    <div>
      <MortgageCalculator/>
      <MonthlyBreakdown/>
      <MortgageInfo/>
      <BetterOverview/>
      <Footer/>
    </div>
  )
}

export default page
