import React from 'react';
import PricingCard from './PricingCard';

const PricingSection: React.FC = () => {
  const pricingPlans = [
    {
      title: 'Hourly',
      price: '$0.4/hr',
      description: 'For a quick requirement of power supply and internet access for short period of time .',
      features: [
        'Workspace access',
        'power supply',
        'Starlink Internet access',
        'Security',
        'T & Cs applied'
      ],
      buttonLabel: 'Sign Up/Purchase',
      buttonLink: '/signup/serverless',
      note: 'Suitable for short time usage only'
    },
    {
      title: 'Daily Plan',
      price: 'from $2.0',
      description: 'For Individuals dedicating a full day to make use of the workspace.',
      features: [
        'Workspace access',
        'power supply',
        'Starlink Internet access',
        'Security',
        'One time snacks and water',
        'T & Cs applied'
      ],
      buttonLabel: 'Sign Up',
      buttonLink: '/signup/Purchase',
      note: 'Those who will like to save cost and enjoy better power suplly and long hours in internet',
      
    },
    {
      title: 'Weekly',
      price: 'from $12/month',
      description: 'For those who are fully deep into their work and will like to greatly cut cost and nejoy more service.',
      features: [
        'Workspace access',
        'power supply',
        'Starlink Internet access',
        'Security',
        'Daily one time snacks and water',
        'Discounted cost',
        'T & Cs applied'
      ],
      buttonLabel: 'Sign Up/Purchase',
      buttonLink: '/signup/shared',
      note: 'Free forever for free clusters',
    },
    {
      title: 'Monthly❤️‍🔥',
      price: 'from $30/month',
      description: 'This is the best and recommended plan for all users who will greatly like to cut cost while enjoying full access with extra added values⚡.',
      features: [
        'Workspace access',
        'power supply',
        'Starlink Internet access',
        'Security',
        'Daily one time snacks and water',
        'Discounted cost',
        'Badge of Honour for end of month free internet usage',
        'T & Cs applied'
      ],
      buttonLabel: 'Sign Up/Purchase',
      buttonLink: '/signup/shared',
      note: 'Best and recommended plan for all users',
      recommended: true
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="text-center mt-12 mb-12">
            <div>
              <h1 className="text-4xl font-bold text-green-500 text-center font-serif">Available Subscription Plans</h1>
            </div>
            <div className="text-slate-500 text-center mt-6 mb-0">Select the best subscription plan suitable for you from among the below cheap subscription plans</div>
          </div>
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="w-full sm:w-1/3 lg:w-1/5 p-4">
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
