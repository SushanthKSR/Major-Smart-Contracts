import React from "react";
import { ArrowRight, Code2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Smart Contracts:
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                {" "}
                The Future of Trust
              </span>
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Self-executing contracts with the terms directly written into
              code. Automatically enforce agreements, eliminate intermediaries,
              and revolutionize how we conduct business in the digital age.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#use-cases"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-700 text-base font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
              >
                Explore Use Cases
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg blur opacity-30 dark:opacity-40 animate-pulse"></div>
              <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-xl">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="ml-4 text-sm text-gray-500 dark:text-gray-400 font-mono">
                    SmartContract.sol
                  </div>
                </div>
                <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded text-sm font-mono text-gray-800 dark:text-gray-300 overflow-x-auto">
                  <code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleEscrow {
    address public buyer;
    address public seller;
    uint public amount;
    bool public isFunded;
    bool public isComplete;

    constructor(address _seller) payable {
        buyer = msg.sender;
        seller = _seller;
        amount = msg.value;
        isFunded = true;
    }

    function confirmDelivery() external {
        require(msg.sender == buyer);
        require(isFunded);
        
        payable(seller).transfer(amount);
        isComplete = true;
    }
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 py-6 border-t border-gray-200 dark:border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                100%
              </div>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                Automated Execution
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                0%
              </div>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                Intermediaries
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                24/7
              </div>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                Availability
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
                Immutable
              </div>
              <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">
                Contract Terms
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
