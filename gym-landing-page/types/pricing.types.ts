/**
 * Pricing plan type
 */
export type BillingPeriod = 'monthly' | 'yearly';

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: string[];
  highlighted: boolean;
  ribbonText?: string;
}
