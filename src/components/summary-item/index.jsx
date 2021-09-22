import React from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';

const SummaryItem = ({
  name,
  description,
  date,
  link = false,
  internal = false,
}) => {
  return (
    <LocalizedLink
      to={link}
      className="relative block overflow-hidden transition duration-300 transform border group hover:shadow-lg hover:-translate-y-1"
      style={{ borderColor: '#e1e1e1' }}
    >
      <div className="relative flex items-center justify-between p-5 bg-white">
        <div className="pr-4">
          <h5 className="mb-2 font-semibold leading-5">{name}</h5>
          <p className="text-sm text-gray-500 pb-2">{date}</p>
          <p className="text-sm text-black dark:text-white">{description}</p>
        </div>
        <div className="flex items-center justify-center">
          <svg
            className="w-3 text-gray-700 transition-colors duration-300 group-hover:text-deep-purple-accent-400"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
          </svg>
        </div>
      </div>
    </LocalizedLink>
  );
};

export default SummaryItem;
