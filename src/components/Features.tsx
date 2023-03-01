import React from 'react';

import config from '../config/index.json';

const Features = () => {
  const { features } = config;
  const { title, subtitle, description, items: featuresList } = features;
  return (
    <div className={`py-12 bg-background`} id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2
            className={`text-base text-primary font-semibold tracking-wide uppercase`}
          >
            {title}
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {subtitle}
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            {description}
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:flex md:flex-wrap gap-10 items-center justify-evenly md:gap-y-10">
            {featuresList.map((feature: any) => (
              <div
                key={feature.name}
                className="flex flex-col justify-center items-center"
              >
                <img
                  className={`inline-block w-[300px] h-auto rounded-full mb-5 border-blue-800 border-2`}
                  src={feature.icon}
                  alt={feature.name}
                />
                <p className="text-lg leading-6 font-medium text-gray-900">
                  {feature.name}
                </p>
                <div className="mt-2 text-base text-gray-500">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
