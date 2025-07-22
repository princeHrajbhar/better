// ./src/components/MortgageCalculator_comonent/MortgageInfo.tsx
"use client";
import React from 'react';
import styles from '@/styles/MortgageCalculator_styles/MortgageInfo.module.scss'; // Corrected path assumption

const MortgageInfo = () => {
  return (
    <div className={styles.container}>
      <hr className={styles.separator} />

      <h1 className={styles.heading}>How does a mortgage calculator help me?</h1>
      <p className={styles.description}>
        When deciding how much house you can afford, one of the most important pieces to determine
        is whether a home will fit into your monthly budget. A mortgage calculator helps you
        understand the monthly cost of a home. And ours will allow you to enter different down
        payments and interest rates to help determine what is affordable for you.
      </p>

      <hr className={styles.separator} />

      <h2 className={styles.subheading}>How much monthly mortgage payment can I afford?</h2>
      <p className={styles.description}>
        Lenders determine how much you can afford on a monthly housing payment by calculating your
        debt-to-income ratio (DTI). The maximum DTI you can have in order to qualify for most
        mortgage loans is often between 45-50%, with your anticipated housing costs included.
      </p>
      <p className={styles.description}>
        Your DTI is the balance between your income and your debt. It helps lenders understand how
        safe or risky it is for them to approve your loan. A DTI ratio represents how much of your
        gross monthly income is spoken for by creditors, and how much of it is left over to you as
        disposable income. It&apos;s most commonly written as a percentage. For example, if you pay half
        your monthly income in debt payments, you would have a DTI of 50%.
      </p>

      <h3 className={styles.formulaTitle}>Formula for calculating your debt-to-income (DTI) ratio:</h3>
      <div className={styles.formulaImage}>
        <div className={styles.formulaPlaceholder}>
          <div className={styles.formulaContent}>
            <div className={styles.formulaText}>
              <div>DTI Ratio =</div>
              <div className={styles.formulaFraction}>
                <div>Total Monthly Debt Payments</div>
                <div className={styles.formulaDivider}></div>
                <div>Gross Monthly Income</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imageCaption}>Formula 1: Debt-to-Income Ratio Calculation</div>

      <hr className={styles.separator} />

      <h2 className={styles.subheading}>How to calculate monthly mortgage payments?</h2>
      <p className={styles.description}>
        Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it&apos;s a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.
      </p>

      <h3 className={styles.formulaTitle}>Formula for calculating monthly mortgage payments</h3>
      <p className={styles.description}>
        The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here&apos;s the formula for calculating principal and interest yourself:
      </p>

      <div className={styles.formulaImage}>
        <div className={styles.formulaPlaceholder}>
          <div className={styles.formulaContent}>
            <div className={styles.formulaText}>
              <div>M = P</div>
              <div className={styles.formulaFraction}>
                <div>r(1+r)<sup>n</sup></div>
                <div className={styles.formulaDivider}></div>
                <div>(1+r)<sup>n</sup> - 1</div>
              </div>
            </div>
            <div className={styles.formulaLegend}>
              <p>Where:</p>
              <p>M = Monthly payment</p>
              <p>P = Principal loan amount</p>
              <p>r = Monthly interest rate</p>
              <p>n = Number of payments (loan term in months)</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.imageCaption}>Formula 2: Mortgage Payment Calculation</div>

      <p className={styles.description}>
        This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout the loan term. And remember, you&apos;ll still need to add on taxes, insurance, utilities, and HOA fees if applicable.
      </p>

      <hr className={styles.separator} />

      <h2 className={styles.subheading}>How to use this mortgage calculator?</h2>
      <p className={styles.description}>
        Play around with different home prices, locations, down payments, interest rates, and mortgage lengths to see how they impact your monthly mortgage payments.
      </p>
      <p className={styles.description}>
        Increasing your down payment and decreasing your interest rate and mortgage term length will make your monthly payment go down. Taxes, insurance, and HOA fees will vary by location. If you enter a down payment amount that&apos;s less than 20% of the home price, private mortgage insurance (PMI) costs will be added to your monthly mortgage payment. As the costs of utilities can vary from county to county, we&apos;ve included a utilities estimate that you can break down by service. If you&apos;re thinking about buying a condo or into a community with a Homeowners Association (HOA), you can add HOA fees.
      </p>
      <p className={styles.description}>
        The only amounts we haven&apos;t included are the money you&apos;ll need to save for annual home maintenance/repairs or the costs of home improvements. To see how much home you can afford including these costs, take a look at the Better home affordability calculator.
      </p>
      <p className={styles.description}>
        Fun fact: Property tax rates are extremely localized, so two homes of roughly the same size and quality on either side of a municipal border could have very different tax rates. Buying in an area with a lower property tax rate may make it easier for you to afford a higher-priced home.
      </p>

      <h3 className={styles.subsubheading}>Do you know your property tax rate?</h3>
      <p className={styles.description}>
        While exact property tax rates vary by county, it can be helpful to look at taxes on the state level to get an idea for taxes in your state. Here&apos;s a helpful chart from Forbes breaking down the Census Bureau&apos;s 2021 American Community Survey 5-year estimate:
      </p>

      <div className={styles.propertyTaxTable}>
        <div className={styles.tableHeader}>
          <div className={styles.headerCell}>State</div>
          <div className={styles.headerCell}>Median Effective Property Tax Rate</div>
          <div className={styles.headerCell}>Mean Effective Property Tax Rate</div>
          <div className={styles.headerCell}>Median Home Value</div>
          <div className={styles.headerCell}>Median Property Taxes Paid</div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.rowCell}>AL</div>
          <div className={styles.rowCell}>0.41%</div>
          <div className={styles.rowCell}>0.40%</div>
          <div className={styles.rowCell}>$157,100</div>
          <div className={styles.rowCell}>$646</div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.rowCell}>AK</div>
          <div className={styles.rowCell}>1.23%</div>
          <div className={styles.rowCell}>1.04%</div>
          <div className={styles.rowCell}>$282,800</div>
          <div className={styles.rowCell}>$3,464</div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.rowCell}>AZ</div>
          <div className={styles.rowCell}>0.62%</div>
          <div className={styles.rowCell}>0.63%</div>
          <div className={styles.rowCell}>$265,600</div>
          <div className={styles.rowCell}>$1,648</div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.rowCell}>AR</div>
          <div className={styles.rowCell}>0.62%</div>
          <div className={styles.rowCell}>0.64%</div>
          <div className={styles.rowCell}>$142,100</div>
          <div className={styles.rowCell}>$878</div>
        </div>
        <div className={styles.tableRow}>
          <div className={styles.rowCell}>CA</div>
          <div className={styles.rowCell}>0.76%</div>
          <div className={styles.rowCell}>0.75%</div>
          <div className={styles.rowCell}>$573,200</div>
          <div className={styles.rowCell}>$4,380</div>
        </div>
      </div>

      <hr className={styles.separator} />

      <h2 className={styles.subheading}>How is Better&apos;s mortgage calculator different?</h2>

      <h3 className={styles.subsubheading}>This mortgage calculator shows your payments with taxes and insurance</h3>
      <p className={styles.description}>
        The property taxes you contribute are used to finance the services provided by your local government to the community. These services encompass schools, libraries, roads, parks, water treatment, police, and fire departments. Even after your mortgage has been fully paid, you will still need to pay property taxes. If you neglect your property taxes, you run the risk of losing your home to your local tax authority.
      </p>
      <p className={styles.description}>
        Your lender will usually require you to have homeowners insurance while you&apos;re settling your mortgage. This is a common practice among lenders because they understand that nobody wants to continue paying a mortgage on a home that&apos;s been damaged or destroyed.
      </p>
      <p className={styles.description}>
        Here&apos;s an interesting fact: Once you fully own your home, the choice to maintain homeowners insurance is entirely up to you. However, to ensure your home is protected against damages caused by fires, lightning strikes, and natural disasters that are common in your area, it is highly recommended to keep it. Therefore, always factor in these costs when using a Mortgage Calculator.
      </p>

      <h3 className={styles.subsubheading}>This mortgage calculator shows your mortgage costs with PMI</h3>
      <p className={styles.description}>
        PMI, an abbreviation for private mortgage insurance, aids potential homeowners in qualifying for a mortgage without the necessity of a 20% down payment. By opting for a lower down payment and choosing a mortgage with PMI, you can purchase a home sooner, begin accruing equity, and keep cash available for future needs. This can all be calculated using this Mortgage Calculator.
      </p>
      <p className={styles.description}>
        Choosing a mortgage with PMI is a popular option: 71% of first-time homebuyers had a down payment of less than 20% in July 2021. In 2020, the median down payment for first-time homebuyers was just 7%, and it hasn&apos;t risen above 10% since 1989.
      </p>
      <p className={styles.description}>
        PMI is automatically removed from conventional mortgages once your home equity reaches 22%. Alternatively, you can request the removal of PMI once you&apos;ve accumulated at least 20% home equity.
      </p>

      <h3 className={styles.subsubheading}>This mortgage calculator includes HOA fees</h3>
      <p className={styles.description}>
        Homeowners association (&quot;HOA&quot;) fees are typically charged directly by a homeowners association, but as HOA fees come part and parcel with condos, townhomes, and planned housing developments, they&apos;re an essential factor to consider when calculating your mortgage costs.
      </p>
      <p className={styles.description}>
        Homes that share structural elements, such as roofs and walls, or community amenities like landscaping, pools, or BBQ areas, often require homeowners to pay HOA fees for the maintenance of these shared features. It&apos;s important to factor in these costs during your budget planning stage, especially considering that HOA fees typically increase annually. HOAs may also charge additional fees known as &apos;special assessments&apos; to cover unexpected expenses from time to time.
      </p>

      <h2 className={styles.subheading}>How to reduce your monthly mortgage payments?</h2>
      <p className={styles.description}>
        The lower the purchase price of the home, the lower your loan amount will be. But if the seller is less than willing to cut you a deal, you have other options.
      </p>

      <h3 className={styles.subsubheading}>Extend the length of your mortgage</h3>
      <p className={styles.description}>
        The more time you have to pay off the mortgage, the less each monthly mortgage payment will be. (In lender-speak, &apos;extending the length of your mortgage&apos; is known as &apos;increasing your loan term&apos;.) This is why people often choose a 30-year fixed rate mortgage over one with a 15- or 20-year term.
      </p>

      <h3 className={styles.subsubheading}>Increase your down payment</h3>
      <p className={styles.description}>
        The smaller the amount of your mortgage, the smaller your monthly mortgage payments will be. If you&apos;re able to put at least 20% of the home price towards your down payment, you&apos;ll be able to avoid PMI (private mortgage insurance). Even if you can&apos;t afford a complete 20% down payment, boosting your down payment will help you get PMI removed sooner. In fact, boosting your down payment by 5% can lower your monthly PMI fees.
      </p>

      <h3 className={styles.subsubheading}>Get a lower interest rate</h3>
      <p className={styles.description}>
        Increasing your down payment can be one way to help you qualify for a lower interest rate. The amount of your down payment compared to the total amount of the loan is called your loan-to-value ratio (LTV).
      </p>
      <p className={styles.description}>
        Depending on your loan amount, a lower LTV may increase the likelihood of you being offered a low interest rate. If you intend on keeping your home for a while, you could consider buying points to reduce your interest rate. Buying points essentially means you agree to pay more upfront costs in exchange for a lower monthly payment.
      </p>
      <p className={styles.description}>
        If you think you may sell or refinance the home in the first 5-10 years of the mortgage, you could consider an adjustable-rate mortgage (ARM). An ARM offers a lower fixed interest rate for a set introductory period&mdash;typically 5, 7, or 10 years. Once the set introductory period ends, the interest rate adjusts (interest rate may increase after consummation). The introductory interest rate for ARMs is typically lower than the interest rate for a conventional fixed-rate mortgage which could make it a great way to save on interest if you know you won&apos;t keep the mortgage for long.
      </p>
      <p className={styles.description}>
        If you&apos;re not planning on buying a home for a while, improving your credit score is a tried and true way of increasing your chances of qualifying for a lower interest rate. By reducing your debt-to-income ratio (DTI), lenders will see that you comfortably afford your mortgage and may be more willing to offer a lower interest rate.
      </p>

      <h2 className={styles.subheading}>How much home can I afford?</h2>
      <p className={styles.description}>
        Once again, the easiest way to do this is with a calculator! To know if a home is in your budget, try out our home affordability calculator. This calculator will take a few inputs from you, like income and savings, and let you know the maximum amount of home you can afford.
      </p>

      <h2 className={styles.subheading}>Next steps to buying a house</h2>
      <p className={styles.description}>
        There are 8 steps to buying a house and by using this calculator you&apos;ve completed step 2 (calculating your home affordability) and maybe even step 1 (getting your finances in order).
      </p>
      <p className={styles.description}>
        The next step is getting pre-approved. A mortgage pre-approval with Better Mortgage takes as little as 3-minutes and doesn&apos;t impact your credit score. It&apos;s a free, no-commitment way to see how much home you can buy, the mortgages you qualify for, and the range of interest rates you&apos;ll be offered.
      </p>
      <p className={styles.description}>
        If you&apos;re ready to buy a home now, our definitive home buying checklist can walk you through everything you need to know to get the home you want. With your Better Mortgage pre-approval letter in hand, you&apos;ll be able to show sellers and real estate agents that you mean business&mdash;giving you an edge over homebuyers that don&apos;t have this kind of proof that they&apos;re financially ready to purchase. And by working with an agent from Better Real Estate and funding with Better Mortgage, you&apos;ll save $2,000 on closing costs, and save up to $8,200 on average over the life of your loan.**
      </p>

      <h2 className={styles.subheading}>More resources</h2>
      <ul className={styles.resourceList}>
        <li><a href="#">Home Affordability Calculator</a></li>
        <li><a href="#">Mortgage Pre-Approval Process</a></li>
        <li><a href="#">First-Time Homebuyer Guide</a></li>
        <li><a href="#">Understanding PMI</a></li>
        <li><a href="#">HOA Fees Explained</a></li>
        <li><a href="#">Property Tax Guide</a></li>
      </ul>
    </div>
  );
};

export default MortgageInfo;