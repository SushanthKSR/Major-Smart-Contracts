import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: "What is a smart contract?",
      answer: "A smart contract is a self-executing contract with the terms directly written into code. These contracts automatically enforce and execute agreements when predetermined conditions are met, without requiring intermediaries or manual intervention."
    },
    {
      question: "How secure are smart contracts?",
      answer: "Smart contracts inherit the security properties of the blockchain they run on, making them tamper-resistant and transparent. However, they are only as secure as their code. Vulnerabilities in the code can lead to exploits, which is why thorough auditing and testing are essential."
    },
    {
      question: "What are the benefits of using smart contracts?",
      answer: "Key benefits include automation (reducing manual processes), trustlessness (eliminating the need for intermediaries), transparency (all parties can verify the contract), cost efficiency (reducing overhead), and precision (eliminating ambiguity in contract terms)."
    },
    {
      question: "What programming languages are used for smart contracts?",
      answer: "Solidity is the most popular language for writing smart contracts on Ethereum. Other languages include Vyper (also for Ethereum), Rust (for Solana and Near), Move (for Diem and Sui), and WebAssembly-based languages for various blockchains."
    },
    {
      question: "Can smart contracts be modified after deployment?",
      answer: "Traditional smart contracts are immutable once deployed, meaning they cannot be modified. However, there are design patterns like proxy contracts that allow for upgradeable functionality while maintaining data persistence."
    },
    {
      question: "How much does it cost to deploy a smart contract?",
      answer: "The cost varies by blockchain. On Ethereum, it depends on the contract's complexity and current gas prices, typically ranging from $50 to several hundred dollars. Other blockchains may have lower deployment costs."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Find answers to common questions about smart contracts and their implementation.
          </p>
        </div>
        
        <div className="mt-12 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isLast={index === faqs.length - 1}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            Still have questions?
          </p>
          <a 
            href="#contact"
            className="mt-4 inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300"
          >
            Contact our team for more information
          </a>
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ 
  question, 
  answer, 
  isLast 
}: { 
  question: string; 
  answer: string; 
  isLast: boolean 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`py-5 ${!isLast && 'border-b border-gray-200 dark:border-gray-700'}`}>
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{question}</h3>
        <span className="ml-6 flex-shrink-0 text-gray-500 dark:text-gray-400">
          {isOpen ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
        </span>
      </button>
      {isOpen && (
        <div className="mt-3 pr-12">
          <p className="text-gray-600 dark:text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQ;