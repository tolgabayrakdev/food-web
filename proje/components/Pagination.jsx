"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Pagination({ totalPages, currentPage }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("sayfa", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };
  
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    router.push(createPageURL(pageNumber));
  };
  
  // Generate page numbers to display (show at most 5 pages)
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is less than max visible
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      // Calculate start and end of visible pages
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, start + maxVisiblePages - 3);
      
      // Adjust start if end is too close to totalPages
      start = Math.max(2, end - (maxVisiblePages - 3));
      
      // Add ellipsis if needed
      if (start > 2) {
        pages.push("...");
      }
      
      // Add middle pages
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      // Add ellipsis if needed
      if (end < totalPages - 1) {
        pages.push("...");
      }
      
      // Always show last page
      pages.push(totalPages);
    }
    
    return pages;
  };
  
  // Don't show pagination if there's only one page
  if (totalPages <= 1) return null;
  
  return (
    <div className="flex items-center justify-center my-8">
      <nav className="flex space-x-1" aria-label="Sayfalama">
        {/* Previous button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`inline-flex items-center px-3 py-2 rounded-md text-sm ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Önceki
        </button>
        
        {/* Page numbers */}
        <div className="flex space-x-1">
          {generatePageNumbers().map((page, index) => (
            page === "..." ? (
              <span key={`ellipsis-${index}`} className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                ...
              </span>
            ) : (
              <button
                key={`page-${page}`}
                onClick={() => handlePageChange(page)}
                className={`inline-flex items-center px-4 py-2 rounded-md text-sm ${
                  page === currentPage
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                }`}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </button>
            )
          ))}
        </div>
        
        {/* Next button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`inline-flex items-center px-3 py-2 rounded-md text-sm ${
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
          }`}
        >
          Sonraki
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </nav>
    </div>
  );
} 