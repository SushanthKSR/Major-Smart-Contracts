import React, { useState } from 'react';
import { Code, Landmark, Check, Boxes } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);
  
  const steps = [
    {
      id: 1,
      title: "Smart Contract Creation",
      description: "Developers write code that defines the rules and conditions of the agreement. This code is then compiled and tested thoroughly.",
      icon: <Code className="h-8 w-8" />,
    },
    {
      id: 2,
      title: "Blockchain Deployment",
      description: "The smart contract is deployed to a blockchain network (like Ethereum), where it receives a unique address. Once deployed, the contract cannot be modified.",
      icon: <Boxes className="h-8 w-8" />,
    },
    {
      id: 3,
      title: "Execution & Triggers",
      description: "The contract monitors for specific conditions or triggers. When these predefined conditions are met, the contract automatically executes its terms.",
      icon: <Landmark className="h-8 w-8" />,
    },
    {
      id: 4,
      title: "Verification & Completion",
      description: "All transactions are verified by the blockchain network. Once executed, the results are permanently recorded and visible to all parties.",
      icon: <Check className="h-8 w-8" />,
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            How Smart Contracts Work
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Understanding the lifecycle of a smart contract from creation to execution.
          </p>
        </div>
        
        <div className="mt-16 lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 mt-10 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-20 dark:opacity-30"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl p-6 md:p-8">
                <div className="animate-opacityPulse">
                  {activeStep === 1 && (
                    <div className="flex flex-col space-y-4">
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{steps[0].title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{steps[0].description}</p>
                      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm font-mono text-gray-800 dark:text-gray-300 overflow-x-auto">
                        <code>{`// Define contract parameters
contract PropertyTransfer {
    address public owner;
    address public newOwner;
    uint public propertyId;
    uint public price;
    bool public isPaid;
    bool public isTransferred;
    
    // Initialize with property details
    constructor(uint _propertyId, uint _price) {
        owner = msg.sender;
        propertyId = _propertyId;
        price = _price;
    }
}`}</code>
                      </pre>
                    </div>
                  )}
                  
                  {activeStep === 2 && (
                    <div className="flex flex-col space-y-4">
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{steps[1].title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{steps[1].description}</p>
                      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                        <div className="font-mono text-sm text-gray-800 dark:text-gray-300">
                          <div className="flex items-center">
                            <span className="text-green-600 dark:text-green-400">✓</span> 
                            <span className="ml-2">Contract compiled successfully</span>
                          </div>
                          <div className="flex items-center mt-2">
                            <span className="text-green-600 dark:text-green-400">✓</span> 
                            <span className="ml-2">Deploying to Ethereum network...</span>
                          </div>
                          <div className="mt-2">
                            Contract Address: <span className="text-indigo-600 dark:text-indigo-400">0x7a58c0be72be218b41c608b7fe7c5bb630736c71</span>
                          </div>
                          <div className="mt-2">
                            Gas Used: 1,420,000
                          </div>
                          <div className="flex items-center mt-2">
                            <span className="text-green-600 dark:text-green-400">✓</span> 
                            <span className="ml-2">Deployment successful</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeStep === 3 && (
                    <div className="flex flex-col space-y-4">
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{steps[2].title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{steps[2].description}</p>
                      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded text-sm font-mono text-gray-800 dark:text-gray-300 overflow-x-auto">
                        <code>{`// Buyer pays for the property
function purchaseProperty() public payable {
    require(msg.value == price, "Incorrect payment amount");
    newOwner = msg.sender;
    isPaid = true;
}

// Seller transfers the property
function transferProperty() public {
    require(msg.sender == owner, "Only owner can transfer");
    require(isPaid, "Property must be paid for");
    owner = newOwner;
    isTransferred = true;
}`}</code>
                      </pre>
                    </div>
                  )}
                  
                  {activeStep === 4 && (
                    <div className="flex flex-col space-y-4">
                      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{steps[3].title}</h3>
                      <p className="text-gray-600 dark:text-gray-300">{steps[3].description}</p>
                      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded">
                        <div className="font-mono text-sm text-gray-800 dark:text-gray-300">
                          <div className="flex items-center">
                            <span className="text-green-600 dark:text-green-400">✓</span> 
                            <span className="ml-2">Condition verified: Payment received</span>
                          </div>
                          <div className="flex items-center mt-2">
                            <span className="text-green-600 dark:text-green-400">✓</span> 
                            <span className="ml-2">Action executed: Property transfer</span>
                          </div>
                          <div className="flex items-center mt-2">
                            <span className="text-green-600 dark:text-green-400">✓</span> 
                            <span className="ml-2">Transaction recorded: Block #15,238,421</span>
                          </div>
                          <div className="mt-4 p-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded">
                            Contract successfully executed - Property ownership transferred
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="flex flex-col space-y-8">
              {steps.map((step) => (
                <div 
                  key={step.id}
                  className={`flex items-start cursor-pointer p-4 rounded-lg transition-all duration-300 ${
                    activeStep === step.id 
                      ? 'bg-indigo-50 dark:bg-indigo-900/30 border-l-4 border-indigo-600 dark:border-indigo-400' 
                      : 'hover:bg-gray-100 dark:hover:bg-gray-700/30'
                  }`}
                  onClick={() => setActiveStep(step.id)}
                >
                  <div className={`flex items-center justify-center h-10 w-10 rounded-full ${
                    activeStep === step.id 
                      ? 'bg-indigo-600 dark:bg-indigo-500 text-white' 
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}>
                    {step.icon}
                  </div>
                  <div className="ml-4">
                    <h4 className={`text-lg font-medium ${
                      activeStep === step.id 
                        ? 'text-indigo-700 dark:text-indigo-400' 
                        : 'text-gray-900 dark:text-gray-100'
                    }`}>
                      {step.title}
                    </h4>
                    <p className={`mt-1 ${
                      activeStep === step.id 
                        ? 'text-indigo-700 dark:text-indigo-300' 
                        : 'text-gray-600 dark:text-gray-400'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;