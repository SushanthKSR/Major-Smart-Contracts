import React from "react";
import {
  Home,
  Briefcase,
  DollarSign,
  Scale as Scales,
  Leaf,
  Heart,
} from "lucide-react";

const UseCases = () => {
  return (
    <section
      id="use-cases"
      className="py-16 md:py-24 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Zenith's Real-World Applications
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Smart contracts are transforming industries across the global
            economy.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <UseCaseCard
            icon={<Home className="h-8 w-8" />}
            title="Real Estate"
            description="Automate property transfers, rental agreements, and escrow services without the need for traditional intermediaries."
            color="from-blue-500 to-indigo-600"
          />
          <UseCaseCard
            icon={<Briefcase className="h-8 w-8" />}
            title="Supply Chain"
            description="Track goods from production to delivery, ensuring authenticity and enabling automatic payments upon receipt."
            color="from-purple-500 to-pink-600"
          />
          <UseCaseCard
            icon={<DollarSign className="h-8 w-8" />}
            title="Financial Services"
            description="Streamline loans, insurance claims, and complex financial instruments with automatic execution."
            color="from-green-500 to-teal-600"
          />
          <UseCaseCard
            icon={<Scales className="h-8 w-8" />}
            title="Legal & Governance"
            description="Implement voting systems, multi-signature approvals, and automate legal processes."
            color="from-yellow-500 to-orange-600"
          />
          <UseCaseCard
            icon={<Leaf className="h-8 w-8" />}
            title="Energy & Sustainability"
            description="Enable peer-to-peer energy trading and automate carbon credit transactions."
            color="from-teal-500 to-green-600"
          />
          <UseCaseCard
            icon={<Heart className="h-8 w-8" />}
            title="Healthcare"
            description="Secure patient data sharing, automate insurance claims, and manage supply chains for pharmaceuticals."
            color="from-red-500 to-pink-600"
          />
        </div>

        <div className="mt-16 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl p-8 md:p-12">
          <div className="md:flex md:items-center">
            <div className="md:w-2/3 md:pr-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Ready to implement smart contracts?
              </h3>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                Whether you're looking to streamline operations, reduce costs,
                or create new business models, smart contracts can help you
                achieve your goals.
              </p>
              <div className="mt-6">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
                >
                  Get Started Today
                </a>
              </div>
            </div>
            <div className="mt-8 md:mt-0 md:w-1/3">
              <div className="aspect-w-16 aspect-h-9">
                <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 rounded-lg shadow-lg flex items-center justify-center">
                  <span className="text-white text-5xl font-bold">+85%</span>
                </div>
              </div>
              <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400">
                Companies reporting increased efficiency after implementing
                smart contracts*
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const UseCaseCard = ({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className={`h-2 bg-gradient-to-r ${color}`}></div>
      <div className="p-6">
        <div className="w-12 h-12 rounded-lg bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default UseCases;
