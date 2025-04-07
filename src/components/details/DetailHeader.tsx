import { convertRunTimeIntoHoursAndMinutes, convertVoteCount, formatDate } from "@/utils";
import { Star } from "lucide-react";
import { Vote } from "../common";

type DetailHeaderProps = {
    movieDetail: MovieDetail
};

export const DetailHeader = (props: DetailHeaderProps) => {
    const { movieDetail } = props;
    const {original_title, release_date, runtime, vote_average, vote_count}=movieDetail;

    const formattedDate = formatDate(release_date);
    const formattedRuntime = convertRunTimeIntoHoursAndMinutes(runtime);
    const formattedVoteCount = convertVoteCount(vote_count);

    return(
        <div className="mt-8 mb-4 px-5 flex justify-between lg:mt-[52px] lg:mb-6 lg:px-0">
            <div className="space-y-1">
                <h1 className="break-words text-2xl font-bold w-52 lg:w-fit lg:text-4xl">
                    {original_title}
                </h1>
                <h4 className="text-sm lg:text-lg">
                    {formattedDate} . PG . {formattedRuntime} 
                </h4>
            </div>

            <div className="text-xs">
                <h5 className="hidden lg:block">Rating</h5>
                <div className="flex items-center py-[2px] gap-x-1">
                    <Star size={28} fill="#fde047" color="#fde047"/>
                    <div>
                        <Vote voteAverage={vote_average} showStar={false}/>
                        <span>{formattedVoteCount}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}