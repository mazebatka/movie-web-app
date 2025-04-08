import { getMovieCreditsById } from "@/services";
import { CreditRow } from "./CreditRow";

type DetailCreditsProps = {
  id: number;
};

export const DetailCredits = async (props: DetailCreditsProps) => {
  const { id } = props;

  const response = await getMovieCreditsById(id);

  if (!response) return <div>No Credits Found</div>;

  const { actors, directors, writers } = response;
  console.log(actors, directors, writers);
  return (
    <div className="space-y-5 text-foreground mb-8">
      <CreditRow role="Director" names={directors} />
      <CreditRow role="Writer" names={writers} />
      <CreditRow role="Stars" names={actors} />
    </div>
  );
};
