import React from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";

const ContactForm = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Get In Touch
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Have questions about implementing smart contracts for your business?
            Contact us today to learn how we can help.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Send us a message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 dark:border-gray-700 dark:bg-gray-700 dark:text-white rounded-md"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center items-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </div>

          <div className="lg:pl-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <ContactInfoItem
                icon={<Mail className="h-6 w-6" />}
                title="Email Us"
                content="Zenithsmartcontract@gmail.com"
                subContent="support@zenith.com"
              />
              <ContactInfoItem
                icon={<Phone className="h-6 w-6" />}
                title="Call Us"
                content="+91 1234567890"
                subContent="Mon-Fri from 8am to 5pm"
              />
              <ContactInfoItem
                icon={<MapPin className="h-6 w-6" />}
                title="Visit Us"
                content="Grp 139 Amity University, Noida"
                subContent="Noida, UP 201301"
              />
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Frequently Asked Support Questions
              </h4>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  <div className="font-medium text-indigo-600 dark:text-indigo-400">
                    How do I get started with smart contracts?
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Find our step-by-step guide for beginners →
                  </p>
                </a>
                <a
                  href="#"
                  className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  <div className="font-medium text-indigo-600 dark:text-indigo-400">
                    How much does implementation typically cost?
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    View our pricing guide and calculator →
                  </p>
                </a>
                <a
                  href="#"
                  className="block p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300"
                >
                  <div className="font-medium text-indigo-600 dark:text-indigo-400">
                    Do you offer consulting services?
                  </div>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                    Learn about our expert consulting team →
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfoItem = ({
  icon,
  title,
  content,
  subContent,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
  subContent: string;
}) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center text-indigo-600 dark:text-indigo-400">
          {icon}
        </div>
      </div>
      <div className="ml-4">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white">
          {title}
        </h4>
        <p className="mt-1 text-gray-600 dark:text-gray-300">{content}</p>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          {subContent}
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
