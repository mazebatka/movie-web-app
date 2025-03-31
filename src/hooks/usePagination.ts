"use cliet" ;

import { usePathname,useSearchParams,useRouter } from "next/navigation";


export const usePagination = (totalPages:number) => {
    const {push}=useRouter();
    const pathname=usePathname();
    const searchParams=useSearchParams();

    const maxVisibleButtons=3;
    const currentPage=searchParams.get("page")??"1";
    const currentPageNumber=Number(currentPage);

    const maxPage=Math.min(totalPages,10);

    const handlePrevious=()=>{
        if(currentPageNumber>1){
           handlePageChange(currentPageNumber-1);
        }
    };
    const handleNext=()=>{
        if(currentPageNumber<maxPage){
            handlePageChange(currentPageNumber+1);
        }
    };
    const handlePageChange=(pageNumber:number)=>{
       const params = new URLSearchParams(searchParams.toString());

       params.set("page",pageNumber.toString());
       push(`${pathname}?${params.toString()}`);
    };

    const getPageNumbers=()=>{
        let start=Math.max(
            currentPageNumber-Math.floor(maxVisibleButtons/2),1);
        let end= start+maxVisibleButtons-1;

        if(end>maxPage){
            end=maxPage;
            start=Math.max(end-maxVisibleButtons+1,1);
        }
        return Array.from({length:end-start+1},(_,index)=>start+index);

    };

    const pageNumbers=getPageNumbers();

    return {
        handlePrevious,
        handleNext,
        handlePageChange,
        currentPageNumber,
        maxPage,
        pageNumbers,
    };
};