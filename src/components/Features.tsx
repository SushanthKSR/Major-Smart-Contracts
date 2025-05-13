import React from 'react';
import { ShieldCheck, Zap, FileCode, CreditCard, Key, BarChart3 } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Smart Contract Features
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Discover how smart contracts revolutionize traditional agreements with these powerful capabilities.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<ShieldCheck className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
            title="Immutable & Secure"
            description="Once deployed, smart contracts cannot be altered, ensuring that all parties are bound to the original terms."
          />
          <FeatureCard 
            icon={<Zap className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
            title="Self-Executing"
            description="Automatically execute agreements when predefined conditions are met, without requiring manual intervention."
          />
          <FeatureCard 
            icon={<FileCode className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
            title="Transparent"
            description="All terms are visible on the blockchain, providing complete transparency to all parties involved."
          />
          <FeatureCard 
            icon={<CreditCard className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
            title="Cost-Effective"
            description="Eliminate intermediaries and reduce overhead costs associated with traditional contract execution."
          />
          <FeatureCard 
            icon={<Key className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
            title="Decentralized"
            description="Operate on decentralized blockchain networks, removing the need for central authorities."
          />
          <FeatureCard 
            icon={<BarChart3 className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />}
            title="Programmable Logic"
            description="Create complex business logic with conditional statements, loops, and custom functions."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 dark:border-gray-700">
      <div className="mb-5">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default Features;