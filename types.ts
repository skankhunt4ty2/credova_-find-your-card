
import React from 'react';

export interface CreditCardData {
  id: number;
  name: string;
  issuer: string;
  category: string;
  tags: string[];
  badge?: string;
  keyBenefit: string;
  rating: number;
  lastFour: string;
  imageUrl: string;
  gradient: {
    from: string;
    to: string;
  };
  features?: CardFeatures;
}

export interface Category {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
}

export interface Review {
  id: number;
  author: string;
  rating: number;
  quote: string;
}

export interface Guide {
  id: number;
  title: string;
  description: string;
}

export interface Offer {
    id: number;
    title: string;
    description: string;
    cta: string;
    imageUrl: string;
}

interface MenuLink {
    title: string;
    href: string;
    description?: string;
    icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    color?: string;
}

export interface MenuItem {
  title: string;
  columns: number;
  href: string;
  links: MenuLink[];
}

export type MenuData = MenuItem[];


// Types for AI-generated card features
interface Overview {
    cardName: string;
    issuingBank: string;
    cardType: string;
    quickSummary: string;
}

interface FeesAndCharges {
    joiningFee: string;
    annualFee: string;

    feeWaivers: string;
    interestRate: string;
    latePaymentCharges: string;
    foreignMarkupFee: string;
}

interface RewardsAndBenefits {
    rewardRates: string;
    bonusCategories: string[];
    welcomeBonus: string;
    milestoneBenefits: string;
    rewardRedemptionOptions: string[];
}

interface LifestyleAndAddons {
    airportLoungeAccess: string;
    fuelSurchargeWaiver: string;
    diningAndMoviePrivileges: string;
    travelInsurance: string;
    partneredBrandOffers: string[];
    otherServices: string;
}

interface EligibilityAndDocs {
    minimumIncome: string;
    age: string;
    otherCriteria: string;
    requiredDocuments: string[];
}

interface ApplicationProcess {
    stepByStepGuide: string[];
    applicationLink: string;
    tipsForApproval: string;
}

interface UserReviewsAndRatings {
    aggregatedRating: number;
    userFeedbackHighlights: string[];
    expertVerdict: string;
}

interface FAQ {
    question: string;
    answer: string;
}

interface LatestOfferOrNews {
    title: string;
    description: string;
}

export interface CardFeatures {
    overview: Overview;
    feesAndCharges: FeesAndCharges;
    rewardsAndBenefits: RewardsAndBenefits;
    lifestyleAndAddons: LifestyleAndAddons;
    eligibilityAndDocs: EligibilityAndDocs;
    applicationProcess: ApplicationProcess;
    userReviewsAndRatings: UserReviewsAndRatings;
    faqs: FAQ[];
    latestOffersAndNews: LatestOfferOrNews[];
}