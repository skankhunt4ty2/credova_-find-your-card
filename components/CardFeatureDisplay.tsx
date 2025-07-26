
import React from 'react';
import { CardFeatures } from '../types';
import FeatureSection from './FeatureSection';
import FAQItem from './FAQItem';

interface CardFeatureDisplayProps {
  features?: CardFeatures | null;
}

const Placeholder: React.FC<{text: string}> = ({ text }) => (
    <div className="text-center text-gray-500 flex flex-col items-center justify-center min-h-[300px] w-full bg-gray-900/50 rounded-2xl p-6 md:p-8 mt-8 border border-gray-800 shadow-inner shadow-black/30">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4 text-gray-600"><path d="m12 14 4-4"/><path d="M12 14 8 10"/></svg>
        <p className="font-medium">{text}</p>
    </div>
);

const InfoItem: React.FC<{label: string; value: string | React.ReactNode}> = ({label, value}) => (
    <div className="bg-gray-800/40 p-4 rounded-lg">
        <p className="text-sm text-gray-400 mb-1">{label}</p>
        <p className="text-base font-medium text-white">{value}</p>
    </div>
);

const BulletList: React.FC<{items: string[]}> = ({items}) => (
    <ul className="space-y-2 list-disc list-inside">
        {items.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}
    </ul>
);

const CardFeatureDisplay: React.FC<CardFeatureDisplayProps> = ({ features }) => {
    if (!features) {
        return <Placeholder text="Detailed features for this card will be available soon." />;
    }

    const { overview, feesAndCharges, rewardsAndBenefits, lifestyleAndAddons, eligibilityAndDocs, applicationProcess, userReviewsAndRatings, faqs, latestOffersAndNews } = features;
    
    // Icons
    const OverviewIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5H9a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4Z" /><path d="M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" /></svg>;
    const FeesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>;
    const RewardsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect x="4" y="8" width="16" height="12" rx="2"/><path d="m20 12-4.2-4.2a2 2 0 0 0-2.82 0L8.8 12.2a2 2 0 0 0 0 2.82L13 20"/></svg>;
    const LifestyleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2a.3.3 0 0 0-.2.3Z"/><path d="M18 10a4 4 0 0 0-4-4h-2a4 4 0 0 0-4 4v3.3a2 2 0 0 0 .6 1.4l1.5 1.5c.9.9 2.1 1.4 3.4 1.4s2.5-.5 3.4-1.4l1.5-1.5a2 2 0 0 0 .6-1.4V10Z"/><path d="M17.8 21.9a.3.3 0 1 0 .2-.3.3.3 0 0 0-.2.3Z"/><path d="M12 6V5a1 1 0 0 1 1-1h.5a1 1 0 0 0 0-2H13a3 3 0 0 0-3 3v1"/><path d="M12 17v1a2 2 0 0 0 2 2h.5a1 1 0 0 1 0 2H14a4 4 0 0 1-4-4v-1"/></svg>;
    const EligibilityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="m9 12 2 2 4-4"/></svg>;
    const ApplicationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>;
    const ReviewsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>;
    const FaqIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.17 9.17a3 3 0 0 0-4.24 0 1 1 0 0 0 0 1.42 3 3 0 0 0 4.24 0 1 1 0 0 0 0-1.42z"/><path d="m12 15-3-3"/><path d="M9.17 14.83a3 3 0 0 1 0-4.24 1 1 0 0 1 1.42 0 3 3 0 0 1 0 4.24 1 1 0 0 1-1.42 0z"/><path d="m15 12-3 3"/><path d="M14.83 9.17a3 3 0 0 0-4.24 0 1 1 0 0 0 0 1.42 3 3 0 0 0 4.24 0 1 1 0 0 0 0-1.42z"/><circle cx="12" cy="12" r="10"/></svg>;
    const OffersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>;
    const ToolsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M7 21V7l5-5 5 5v14"/><path d="M12 11a2.5 2.5 0 0 1 0 5 2.5 2.5 0 0 1 0-5Z"/></svg>;
    const ResourcesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>;
    
    return (
        <div className="w-full bg-gray-900/50 rounded-2xl p-4 md:p-8 mt-8 border border-gray-800 shadow-inner shadow-black/30 flex flex-col space-y-12">
            
            <FeatureSection title="Card Overview" icon={<OverviewIcon />}>
                <p className="text-lg text-gray-400 mb-6">{overview.quickSummary}</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <InfoItem label="Issuing Bank" value={overview.issuingBank} />
                    <InfoItem label="Card Name" value={overview.cardName} />
                    <InfoItem label="Card Type" value={overview.cardType} />
                </div>
            </FeatureSection>
            
            <FeatureSection title="Fees & Charges" icon={<FeesIcon />}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <InfoItem label="Joining Fee" value={feesAndCharges.joiningFee} />
                    <InfoItem label="Annual Fee" value={feesAndCharges.annualFee} />
                    <InfoItem label="Interest Rate" value={feesAndCharges.interestRate} />
                    <InfoItem label="Foreign Mark-up Fee" value={feesAndCharges.foreignMarkupFee} />
                    <InfoItem label="Late Payment Charges" value={feesAndCharges.latePaymentCharges} />
                    <InfoItem label="Fee Waivers" value={feesAndCharges.feeWaivers} />
                </div>
            </FeatureSection>
            
            <FeatureSection title="Rewards & Benefits" icon={<RewardsIcon />}>
                <div className="space-y-4">
                    <InfoItem label="Reward Rate" value={rewardsAndBenefits.rewardRates} />
                    <InfoItem label="Welcome Bonus" value={rewardsAndBenefits.welcomeBonus} />
                    <InfoItem label="Milestone Benefits" value={rewardsAndBenefits.milestoneBenefits} />
                    <div><h4 className="text-gray-400 mb-2">Bonus Categories</h4><BulletList items={rewardsAndBenefits.bonusCategories} /></div>
                    <div><h4 className="text-gray-400 mb-2">Redemption Options</h4><BulletList items={rewardsAndBenefits.rewardRedemptionOptions} /></div>
                </div>
            </FeatureSection>
            
            <FeatureSection title="Lifestyle & Add-Ons" icon={<LifestyleIcon />}>
                 <div className="space-y-4">
                    <InfoItem label="Airport Lounge Access" value={lifestyleAndAddons.airportLoungeAccess} />
                    <InfoItem label="Fuel Surcharge Waiver" value={lifestyleAndAddons.fuelSurchargeWaiver} />
                    <InfoItem label="Dining & Movie Privileges" value={lifestyleAndAddons.diningAndMoviePrivileges} />
                    <InfoItem label="Travel Insurance" value={lifestyleAndAddons.travelInsurance} />
                    <InfoItem label="Other Services" value={lifestyleAndAddons.otherServices} />
                    <div><h4 className="text-gray-400 mb-2">Partnered Brand Offers</h4><BulletList items={lifestyleAndAddons.partneredBrandOffers} /></div>
                 </div>
            </FeatureSection>

             <FeatureSection title="Eligibility & Documentation" icon={<EligibilityIcon />}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <InfoItem label="Minimum Income" value={eligibilityAndDocs.minimumIncome} />
                    <InfoItem label="Age" value={eligibilityAndDocs.age} />
                    <InfoItem label="Other Criteria" value={eligibilityAndDocs.otherCriteria} />
                </div>
                <div><h4 className="text-gray-400 mb-2">Required Documents</h4><BulletList items={eligibilityAndDocs.requiredDocuments} /></div>
             </FeatureSection>

            <FeatureSection title="Application Process" icon={<ApplicationIcon />}>
                 <div className="space-y-6">
                    <div>
                        <h4 className="font-semibold text-white mb-2">How to Apply</h4>
                        <ol className="list-decimal list-inside space-y-2">
                           {applicationProcess.stepByStepGuide.map((step, index) => <li key={`${step}-${index}`}>{step}</li>)}
                        </ol>
                    </div>
                    <InfoItem label="Tip for Approval" value={applicationProcess.tipsForApproval} />
                    <a href={applicationProcess.applicationLink} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition-colors">
                        Apply Now
                    </a>
                </div>
            </FeatureSection>

            <FeatureSection title="User Reviews & Ratings" icon={<ReviewsIcon />}>
                <div className="space-y-6">
                     <div className="flex items-center space-x-4">
                         <InfoItem label="Aggregated Rating" value={`${userReviewsAndRatings.aggregatedRating} / 5.0`} />
                         <InfoItem label="Expert Verdict" value={userReviewsAndRatings.expertVerdict} />
                     </div>
                     <div><h4 className="text-gray-400 mb-2">User Feedback Highlights</h4><BulletList items={userReviewsAndRatings.userFeedbackHighlights} /></div>
                </div>
            </FeatureSection>

             <FeatureSection title="Latest Offers & News" icon={<OffersIcon />}>
                <div className="space-y-4">
                    {latestOffersAndNews.map((offer, index) => <InfoItem key={`${offer.title}-${index}`} label={offer.title} value={offer.description} />)}
                </div>
            </FeatureSection>
            
            <FeatureSection title="Frequently Asked Questions" icon={<FaqIcon />}>
                <div className="space-y-2">
                    {faqs.map((faq, index) => <FAQItem key={`${faq.question}-${index}`} question={faq.question} answer={faq.answer} />)}
                </div>
            </FeatureSection>
            
            <FeatureSection title="Comparison Tools" icon={<ToolsIcon />} className="opacity-50">
                <p>Side-by-side card comparisons and custom filters coming soon!</p>
            </FeatureSection>
            
            <FeatureSection title="Educational Resources" icon={<ResourcesIcon />} className="opacity-50">
                <p>Guides on responsible credit usage and maximizing benefits coming soon!</p>
            </FeatureSection>

        </div>
    );
};

export default CardFeatureDisplay;
