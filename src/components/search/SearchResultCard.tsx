import Link from "next/link";
import React, { Fragment } from "react";
import { Button, Separator } from "../ui";
import { ArrowRight } from "lucide-react";

type SearchResultCardProps = {
  movie: MovieDetail;
  removeSearchValue: () => void;
};

export const SearchResultCard = ({
  movie,
  removeSearchValue,
}: SearchResultCardProps) => {
  const { id, original_title, release_date } = movie;

  const releaseYear = new Date(release_date).getFullYear();

  return (
    <Fragment>
      <Link onClick={removeSearchValue} href={`/details/${id}`}>
        <div className="flex-1 text-foreground">
          <h4 className="w-48 lg:w-96 truncate text-xl font-semibold">
            {original_title}
          </h4>

          <div className="mt-3 flex justify-between text-sm font-medium">
            <h5>{releaseYear}</h5>
            <Button variant="link">
              See more <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Link>

      <Separator className="my-2 border" />
    </Fragment>
  );
};