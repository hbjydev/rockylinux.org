import React from 'react';
import { LocalizedLink } from 'gatsby-theme-i18n';
import { Button } from '@resf/pebble';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

export default function Pagination({
  totalCount,
  currentPage,
  itemPerPage,
  type,
}) {
  const totalPages = Math.ceil(totalCount / itemPerPage);

  const nextPage = currentPage + 1;
  const previousPage = currentPage - 1;

  //const prevPath = currentPage -1 === 1 ? `/news/` : `/news/${previousPage}`;
  const prevPath = `/${type}/${previousPage}`;
  const nextPath = `/${type}/${nextPage}`;

  return (
    <div className="text-center pagination-navi text-gray-900 dark:text-gray-50 mb-10">
      <Button link={prevPath} icon disabled={previousPage <= 0}><ChevronLeftIcon /></Button>
      <span style={{ margin: '0 12px' }}>{currentPage} of {totalPages}</span>
      <Button link={nextPath} icon disabled={nextPage > totalPages}><ChevronRightIcon /></Button>
    </div>
  );
}
