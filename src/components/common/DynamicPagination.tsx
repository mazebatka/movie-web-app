"use client";

import { usePagination } from "@/hooks";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
    PaginationLink,
    PaginationEllipsis
} from "../ui";

type DynamicPaginationProps = {
    totalPages: number;
};

export const DynamicPagination = (props: DynamicPaginationProps) => {
    const { totalPages } = props;
    const { handlePrevious, handleNext, handlePageChange, currentPageNumber, maxPage, pageNumbers } = usePagination(totalPages);

    return(
        <Pagination className="flex justify-end">
            <PaginationContent>
                {currentPageNumber > 1 && (
                    <PaginationItem>
                        <PaginationPrevious onClick={handlePrevious} className="cursor-pointer"/>
                    </PaginationItem>
                )}

                {pageNumbers.map((pageNumber) => (
                    <PaginationItem key={pageNumber}>
                        <PaginationLink
                            onClick={() => handlePageChange(pageNumber)}
                           isActive={pageNumber === currentPageNumber}
                           className="cursor-pointer"
                        >
                            {pageNumber}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                {pageNumbers[pageNumbers.length-1]<maxPage && (
                    <PaginationItem>
                        <PaginationEllipsis/>
                    </PaginationItem>
                    )}
                {currentPageNumber < maxPage && (
                    <PaginationItem>
                        <PaginationNext onClick={handleNext} className="cursor-pointer"/>
                    </PaginationItem>
                )}
            </PaginationContent>
        </Pagination>
    );
};
