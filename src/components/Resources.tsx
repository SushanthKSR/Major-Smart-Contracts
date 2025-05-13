import React from 'react';
import { BookOpen, GraduationCap, Github, Code2 } from 'lucide-react';

const Resources = () => {
  return (
    <section id="resources" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Learning Resources
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Explore these resources to deepen your understanding of smart contracts.
          </p>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ResourceCard 
            icon={<BookOpen className="h-8 w-8" />}
            title="Documentation"
            description="Official guides and documentation for popular smart contract platforms."
            links={[
              { text: "Ethereum Documentation", url: "https://ethereum.org/developers/docs/" },
              { text: "Solidity Documentation", url: "https://docs.soliditylang.org/" },
              { text: "Solana Documentation", url: "https://docs.solana.com/" }
            ]}
          />
          <ResourceCard 
            icon={<GraduationCap className="h-8 w-8" />}
            title="Tutorials"
            description="Step-by-step guides and courses to help you start developing smart contracts."
            links={[
              { text: "CryptoZombies", url: "https://cryptozombies.io/" },
              { text: "Buildspace", url: "https://buildspace.so/" },
              { text: "Chainlink Tutorials", url: "https://docs.chain.link/getting-started/tutorials" }
            ]}
          />
          <ResourceCard 
            icon={<Github className="h-8 w-8" />}
            title="Open Source"
            description="Explore open source smart contract projects and libraries."
            links={[
              { text: "OpenZeppelin", url: "https://github.com/OpenZeppelin/openzeppelin-contracts" },
              { text: "Hardhat", url: "https://github.com/NomicFoundation/hardhat" },
              { text: "Foundry", url: "https://github.com/foundry-rs/foundry" }
            ]}
          />
          <ResourceCard 
            icon={<Code2 className="h-8 w-8" />}
            title="Developer Tools"
            description="Tools to simplify smart contract development, testing, and deployment."
            links={[
              { text: "Remix IDE", url: "https://remix.ethereum.org/" },
              { text: "Truffle Suite", url: "https://trufflesuite.com/" },
              { text: "Alchemy", url: "https://www.alchemy.com/" }
            ]}
          />
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-2xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Stay Updated</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest news, tutorials, and resources about smart contracts and blockchain development.
            </p>
            <form className="mt-8 sm:flex sm:max-w-md sm:mx-auto">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs border-gray-300 dark:border-gray-700 rounded-md dark:bg-gray-800 dark:text-white"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ResourceCard = ({ 
  icon, 
  title, 
  description, 
  links 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  links: Array<{text: string; url: string}>;
}) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm p-6">
      <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600 dark:text-indigo-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 flex items-center"
            >
              <span className="mr-1">→</span> {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;