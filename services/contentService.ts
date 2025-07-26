
import { CreditCardData, Category, Review, Guide, Offer, MenuData, CardFeatures } from '../types';
import { 
    CashbackIcon, TravelIcon, ShoppingIcon, StudentIcon, LifestyleIcon, RupeeIcon, 
    FuelIcon, BusinessIcon, PremiumIcon, SecuredIcon, EntertainmentIcon, BeginnerIcon, LowIncomeIcon,
    WelcomeBonusIcon, ZeroFeeIcon, LifetimeFreeIcon, LoungeIcon, EcommerceIcon, DiningIcon
} from '../components/icons/Icons';

const hdfcMillenniaFeatures: CardFeatures = {
    overview: {
        cardName: 'HDFC Bank Millennia Credit Card',
        issuingBank: 'HDFC Bank',
        cardType: 'Cashback',
        quickSummary: 'A top-tier cashback card for online shoppers, offering 5% back on popular merchants and 1% on all other spends.'
    },
    feesAndCharges: {
        joiningFee: '₹1,000 + GST',
        annualFee: '₹1,000 + GST',
        feeWaivers: 'Annual fee waived on spending over ₹1,00,000 in the previous year.',
        interestRate: '3.6% per month (43.2% per annum)',
        latePaymentCharges: 'Varies based on outstanding amount.',
        foreignMarkupFee: '3.5% of the transaction amount.'
    },
    rewardsAndBenefits: {
        rewardRates: '1% cashback on all spends (1 CashPoint per ₹150).',
        bonusCategories: ['Amazon', 'Flipkart', 'Myntra', 'Swiggy', 'Zomato', 'Uber', 'Cult.fit'],
        welcomeBonus: '1000 CashPoints on payment of joining fee.',
        milestoneBenefits: '₹1,000 gift voucher on spending ₹1,00,000 in a calendar quarter.',
        rewardRedemptionOptions: ['Statement credit (1 CashPoint = ₹1)', 'Product catalogue', 'Flight/Hotel bookings']
    },
    lifestyleAndAddons: {
        airportLoungeAccess: '8 complimentary domestic airport lounge visits per year (2 per quarter).',
        fuelSurchargeWaiver: '1% fuel surcharge waiver at all fuel stations across India (Min. transaction ₹400).',
        diningAndMoviePrivileges: 'Up to 20% off on partner restaurants via Dineout.',
        travelInsurance: 'Not applicable.',
        partneredBrandOffers: ['Various offers on SmartBuy portal.'],
        otherServices: 'Contactless payments, Good Food Trail Dining program.'
    },
    eligibilityAndDocs: {
        minimumIncome: 'Salaried: > ₹35,000/month, Self-Employed: ITR > ₹6.0 Lakhs p.a.',
        age: '21 to 40 years for Salaried, 21 to 65 for Self-Employed.',
        otherCriteria: 'Good credit history with a CIBIL score of 750+ recommended.',
        requiredDocuments: ['PAN Card', 'Address Proof', 'Income Proof (Salary slip/ITR)']
    },
    applicationProcess: {
        stepByStepGuide: [
            'Visit the HDFC Bank website.',
            'Fill in the online application form with personal and financial details.',
            'Upload the required documents.',
            'Submit the application and wait for bank verification.'
        ],
        applicationLink: 'https://www.hdfcbank.com/personal/pay/cards/credit-cards/millennia-cards',
        tipsForApproval: 'Having an existing relationship with HDFC Bank can improve approval chances.'
    },
    userReviewsAndRatings: {
        aggregatedRating: 4.8,
        userFeedbackHighlights: [
            'Excellent cashback for online purchases.',
            'Lounge access is a great perk for this segment.',
            'The rewards cap can be restrictive for high spenders.'
        ],
        expertVerdict: 'One of the best entry-level to mid-range cards, especially for young professionals who spend heavily online.'
    },
    faqs: [
        { question: 'What is the maximum cashback I can earn?', answer: 'The maximum cashback from 5% merchants is capped at ₹1000 per statement cycle.' },
        { question: 'Are CashPoints same as cashback?', answer: 'Yes, for statement credit redemption, 1 CashPoint is equal to ₹1.' }
    ],
    latestOffersAndNews: [
        { title: 'New Partner Merchants', description: 'Cult.fit and Myntra recently added to the 5% cashback category.' }
    ]
};

const axisMagnusFeatures: CardFeatures = {
    overview: {
        cardName: 'Axis Bank Magnus Credit Card',
        issuingBank: 'Axis Bank',
        cardType: 'Premium',
        quickSummary: 'A premium card offering exceptional travel benefits, rewards, and lifestyle privileges for high-income individuals.'
    },
    feesAndCharges: {
        joiningFee: '₹12,500 + GST (Currently waived for Burgundy clients)',
        annualFee: '₹12,500 + GST',
        feeWaivers: 'Annual fee waived on spending over ₹25,00,000 in the previous year.',
        interestRate: '3.0% per month',
        latePaymentCharges: 'Varies, up to ₹1,000',
        foreignMarkupFee: '2% of the transaction amount.'
    },
    rewardsAndBenefits: {
        rewardRates: '12 EDGE Rewards points per ₹200 spent.',
        bonusCategories: ['TRAVEL EDGE portal (60 points per ₹200)'],
        welcomeBonus: 'One complimentary domestic flight ticket or a TATA CLiQ voucher worth ₹10,000.',
        milestoneBenefits: '25,000 EDGE Rewards points on spending ₹1 Lakh in a calendar month.',
        rewardRedemptionOptions: ['Points transfer to various airline/hotel partners', 'Product catalogue']
    },
    lifestyleAndAddons: {
        airportLoungeAccess: 'Unlimited complimentary international lounge visits with Priority Pass. 8 complimentary guest visits per year.',
        fuelSurchargeWaiver: '1% fuel surcharge waiver on transactions between ₹400 and ₹4,000.',
        diningAndMoviePrivileges: 'Buy one, get one free on movie tickets (up to ₹500 off on the second ticket). 40% off at partner restaurants.',
        travelInsurance: 'Air accident cover up to ₹4.5 Crores, loss of travel documents cover.',
        partneredBrandOffers: ['Complimentary airport concierge services.'],
        otherServices: '24/7 dedicated concierge service for travel, dining, and other bookings.'
    },
    eligibilityAndDocs: {
        minimumIncome: 'Salaried: > ₹1,50,000/month, Self-Employed: ITR > ₹18 Lakhs p.a.',
        age: '21 to 65 years.',
        otherCriteria: 'High CIBIL score is crucial. Often targeted at existing high-value bank customers.',
        requiredDocuments: ['PAN Card', 'Address Proof', 'Income Proof']
    },
    applicationProcess: {
        stepByStepGuide: [
            'Best applied through an existing relationship with Axis Bank.',
            'Fill out the application form with a relationship manager or online.',
            'Submit all financial documents for verification.'
        ],
        applicationLink: 'https://www.axisbank.com/retail/cards/credit-card/axis-bank-magnus-credit-card',
        tipsForApproval: 'Having a Burgundy salary or savings account with Axis Bank significantly increases approval odds.'
    },
    userReviewsAndRatings: {
        aggregatedRating: 4.9,
        userFeedbackHighlights: [
            'Unbeatable value due to milestone benefits and points transfers.',
            'Recent devaluations have reduced some benefits.',
            'Excellent for international travelers.'
        ],
        expertVerdict: 'Despite recent changes, it remains one of India\'s most rewarding premium credit cards if you can meet the spend-based criteria.'
    },
    faqs: [
        { question: 'Is the Priority Pass membership for the primary cardholder only?', answer: 'Yes, the unlimited lounge access is for the primary cardholder. Guests are limited to 8 visits per year.'},
        { question: 'What is the value of one EDGE Reward point?', answer: 'The value varies. For travel transfers, it can be as high as ₹2 per point (on a 5:4 transfer ratio), while for statement credit it is much lower at ₹0.20.'}
    ],
    latestOffersAndNews: [
        { title: 'Benefit Devaluation', description: 'As of Sep 2023, the monthly milestone benefit has been revised and the rewards structure has been updated.'}
    ]
};

// In a real application, this data would be fetched from your public Google Sheet JSON endpoint.
const ALL_CARDS: CreditCardData[] = [
  {
    id: 1,
    name: 'HDFC Millennia',
    issuer: 'HDFC Bank',
    category: 'Cashback Cards',
    tags: ['Cashback Cards', 'E-commerce Offers', 'Cards for Beginners'],
    badge: 'Best Cashback',
    keyBenefit: '5% cashback on Amazon, Flipkart, etc.',
    rating: 4.8,
    lastFour: '1121',
    imageUrl: 'https://images.unsplash.com/photo-1518066000714-58c45f7e8c4b?q=80&w=600',
    gradient: { from: 'from-blue-500', to: 'to-indigo-600' },
    features: hdfcMillenniaFeatures,
  },
  {
    id: 2,
    name: 'SBI Card PRIME',
    issuer: 'SBI Card',
    category: 'Lifestyle Cards',
    tags: ['Lifestyle Cards', 'Dining/Movie Discounts', 'Welcome Bonus Offers'],
    badge: 'Youth Favorite',
    keyBenefit: '10 points per ₹100 on dining, movies.',
    rating: 4.7,
    lastFour: '8898',
    imageUrl: 'https://images.unsplash.com/photo-1555485647-1c2490d19423?q=80&w=600',
    gradient: { from: 'from-yellow-400', to: 'to-amber-500' },
  },
  {
    id: 3,
    name: 'Axis Bank Magnus',
    issuer: 'Axis Bank',
    category: 'Premium & Super Premium Cards',
    tags: ['Premium & Super Premium Cards', 'Travel Cards', 'Lounge Access Offers'],
    keyBenefit: 'Unlimited international lounge access.',
    rating: 4.9,
    lastFour: '5555',
    imageUrl: 'https://images.unsplash.com/photo-1563241527-56505a4a55ae?q=80&w=600',
    gradient: { from: 'from-slate-800', to: 'to-blue-900' },
    features: axisMagnusFeatures,
  },
  {
    id: 4,
    name: 'ICICI Amazon Pay',
    issuer: 'ICICI Bank',
    category: 'Shopping Cards',
    tags: ['Shopping Cards', 'Cashback Cards', 'E-commerce Offers', 'Lifetime Free Cards'],
    badge: 'Top for Shopping',
    keyBenefit: '5% back for Prime users on Amazon.',
    rating: 4.9,
    lastFour: '2667',
    imageUrl: 'https://images.unsplash.com/photo-1621359342798-6041113b0336?q=80&w=600',
    gradient: { from: 'from-sky-400', to: 'to-cyan-400' },
  },
  {
    id: 5,
    name: 'IDFC FIRST Millennia',
    issuer: 'IDFC First Bank',
    category: 'Cards for Beginners',
    tags: ['Cards for Beginners', 'Zero Joining Fee Cards', 'Low interest'],
    keyBenefit: 'Low interest rates, 10x rewards.',
    rating: 4.5,
    lastFour: '3141',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600',
    gradient: { from: 'from-gray-800', to: 'to-black' },
  },
  {
    id: 6,
    name: 'American Express Gold Card',
    issuer: 'American Express (Amex)',
    category: 'Lifestyle Cards',
    tags: ['Lifestyle Cards', 'Premium & Super Premium Cards', 'Welcome Bonus Offers'],
    keyBenefit: '25,000 bonus points on signup.',
    rating: 4.6,
    lastFour: '1007',
    imageUrl: 'https://images.unsplash.com/photo-1614035032449-174834889843?q=80&w=600',
    gradient: { from: 'from-amber-500', to: 'to-yellow-600' },
  },
   {
    id: 7,
    name: 'Axis Bank Atlas',
    issuer: 'Axis Bank',
    category: 'Travel Cards',
    tags: ['Travel Cards', 'Lounge Access Offers', 'Milestone benefits'],
    badge: 'Top Travel Pick',
    keyBenefit: 'Earn Edge Miles, convert to partners.',
    rating: 4.8,
    lastFour: '2023',
    imageUrl: 'https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=600',
    gradient: { from: 'from-cyan-500', to: 'to-blue-600' },
  },
];

const CATEGORIES: Category[] = [
    { name: 'Cashback', icon: CashbackIcon },
    { name: 'Travel', icon: TravelIcon },
    { name: 'Shopping', icon: ShoppingIcon },
    { name: 'Student', icon: StudentIcon },
    { name: 'Lifestyle', icon: LifestyleIcon },
    { name: 'First Card', icon: RupeeIcon },
];

const REVIEWS: Review[] = [
    { id: 1, author: 'Aarav S.', rating: 5, quote: 'The cashback is insane! I use it for all my online shopping.' },
    { id: 2, author: 'Priya K.', rating: 4, quote: 'Lounge access is a lifesaver. Customer service could be faster though.' },
    { id: 3, author: 'Rohan M.', rating: 5, quote: 'Got approved instantly as a student. Perfect for managing my monthly budget.' },
];

const GUIDES: Guide[] = [
    { id: 1, title: 'How to Choose Your First Credit Card', description: 'A simple guide to picking the right card without getting overwhelmed.'},
    { id: 2, title: 'Understanding Your CIBIL Score', description: 'Learn what affects your score and how to improve it.' },
    { id: 3, title: 'Maximizing Rewards & Benefits', description: 'Tips and tricks to get the most out of your card.' },
];

const LATEST_OFFER: Offer = {
    id: 1,
    title: 'Get ₹1500 Amazon Voucher on Signup!',
    description: 'Limited-time offer for new users on select travel cards. Apply now and unlock exclusive deals for your next vacation.',
    cta: 'Explore Cards',
    imageUrl: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=2070&auto=format&fit=crop'
};

const toUrl = (str: string) => encodeURIComponent(str);

const MENU_DATA: MenuData = [
    { 
      title: 'Cards by Categories',
      columns: 2,
      href: `#/category-list/${toUrl('Cards by Categories')}`,
      links: [
        { title: 'Cashback Cards', href: `#/card-list/category/${toUrl('Cashback Cards')}`, description: 'Earn money back on every purchase you make.', icon: CashbackIcon, color: 'green' },
        { title: 'Travel Cards', href: `#/card-list/category/${toUrl('Travel Cards')}`, description: 'Unlock free flights, hotel stays, and lounge access.', icon: TravelIcon, color: 'blue' },
        { title: 'Shopping Cards', href: `#/card-list/category/${toUrl('Shopping Cards')}`, description: 'Get exclusive discounts and offers on online shopping.', icon: ShoppingIcon, color: 'pink' },
        { title: 'Fuel Cards', href: `#/card-list/tag/${toUrl('Fuel Cards')}`, description: 'Save money on petrol and diesel with fuel surcharge waivers.', icon: FuelIcon, color: 'orange' },
        { title: 'Lifestyle Cards', href: `#/card-list/category/${toUrl('Lifestyle Cards')}`, description: 'Enjoy benefits on dining, movies, and entertainment.', icon: LifestyleIcon, color: 'red' },
        { title: 'Student Cards', href: `#/card-list/category/${toUrl('Student Cards')}`, description: 'Build your credit score early with easy-to-get cards.', icon: StudentIcon, color: 'indigo' },
        { title: 'Business Cards', href: `#/card-list/tag/${toUrl('Business Cards')}`, description: 'Manage company expenses and earn business-centric rewards.', icon: BusinessIcon, color: 'slate' },
        { title: 'Premium & Super Premium Cards', href: `#/card-list/category/${toUrl('Premium & Super Premium Cards')}`, description: 'Access luxury perks, concierge services, and golf benefits.', icon: PremiumIcon, color: 'amber' },
        { title: 'Secured Credit Cards', href: `#/card-list/tag/${toUrl('Secured Credit Cards')}`, description: 'For those with low or no credit score, against a fixed deposit.', icon: SecuredIcon, color: 'teal' },
        { title: 'Entertainment/Movie Cards', href: `#/card-list/tag/${toUrl('Entertainment/Movie Cards')}`, description: 'Get free movie tickets and discounts on entertainment.', icon: EntertainmentIcon, color: 'rose' },
        { title: 'Cards for Beginners', href: `#/card-list/category/${toUrl('Cards for Beginners')}`, description: 'Simple, no-frills cards perfect for your first credit experience.', icon: BeginnerIcon, color: 'cyan' },
        { title: 'Cards for Low Income', href: `#/card-list/tag/${toUrl('Cards for Low Income')}`, description: 'Accessible cards with lower income requirements.', icon: LowIncomeIcon, color: 'lime' },
      ]
    },
    { 
      title: 'Cards by Issuers', 
      columns: 2,
      href: `#/category-list/${toUrl('Cards by Issuers')}`,
      links: [
        { title: 'HDFC Bank', href: `#/card-list/issuer/${toUrl('HDFC Bank')}`},
        { title: 'SBI Card', href: `#/card-list/issuer/${toUrl('SBI Card')}`},
        { title: 'ICICI Bank', href: `#/card-list/issuer/${toUrl('ICICI Bank')}`},
        { title: 'Axis Bank', href: `#/card-list/issuer/${toUrl('Axis Bank')}`},
        { title: 'American Express (Amex)', href: `#/card-list/issuer/${toUrl('American Express (Amex)')}`},
        { title: 'Kotak Mahindra Bank', href: `#/card-list/issuer/${toUrl('Kotak Mahindra Bank')}`},
        { title: 'IDFC First Bank', href: `#/card-list/issuer/${toUrl('IDFC First Bank')}`},
        { title: 'Standard Chartered', href: `#/card-list/issuer/${toUrl('Standard Chartered')}`},
        { title: 'IndusInd Bank', href: `#/card-list/issuer/${toUrl('IndusInd Bank')}`},
        { title: 'YES Bank', href: `#/card-list/issuer/${toUrl('YES Bank')}`},
        { title: 'Citi Bank', href: `#/card-list/issuer/${toUrl('Citi Bank')}`},
        { title: 'RBL Bank', href: `#/card-list/issuer/${toUrl('RBL Bank')}`},
      ]
    },
    { 
      title: 'Cards by Offers',
      columns: 2,
      href: `#/category-list/${toUrl('Cards by Offers')}`,
      links: [
        { title: 'Welcome Bonus Offers', href: `#/card-list/tag/${toUrl('Welcome Bonus Offers')}`, description: 'Get bonus rewards just for signing up.', icon: WelcomeBonusIcon, color: 'violet' },
        { title: 'Zero Joining Fee Cards', href: `#/card-list/tag/${toUrl('Zero Joining Fee Cards')}`, description: 'Start without any upfront payment.', icon: ZeroFeeIcon, color: 'emerald' },
        { title: 'Lifetime Free Cards', href: `#/card-list/tag/${toUrl('Lifetime Free Cards')}`, description: 'Cards with no joining or annual fees, ever.', icon: LifetimeFreeIcon, color: 'sky' },
        { title: 'Lounge Access Offers', href: `#/card-list/tag/${toUrl('Lounge Access Offers')}`, description: 'Relax at domestic and international airport lounges.', icon: LoungeIcon, color: 'fuchsia' },
        { title: 'E-commerce Offers', href: `#/card-list/tag/${toUrl('E-commerce Offers')}`, description: 'Save big on Amazon, Flipkart, Swiggy, etc.', icon: EcommerceIcon, color: 'orange' },
        { title: 'Dining/Movie Discounts', href: `#/card-list/tag/${toUrl('Dining/Movie Discounts')}`, description: 'Get discounts at your favorite restaurants and cinemas.', icon: DiningIcon, color: 'rose' },
      ]
    },
    { 
      title: 'About & Support',
      columns: 1,
      href: `#/category-list/${toUrl('About & Support')}`,
      links: [
        { title: 'About Us', href: '#/about'},
        { title: 'Contact/Support', href: '#/contact'},
        { title: 'FAQs', href: '#/faqs'}
      ]
    },
];

const MOCK_APP_CONTENT = {
    cards: ALL_CARDS,
    categories: CATEGORIES,
    reviews: REVIEWS,
    guides: GUIDES,
    latestOffer: LATEST_OFFER,
    menuData: MENU_DATA
};

export const fetchHomepageContent = async () => {
    // Simulate a network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    return MOCK_APP_CONTENT;
};