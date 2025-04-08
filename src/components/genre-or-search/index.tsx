import { GenreHeader } from "../genre";
import { Separator } from "../ui";

type GenreOrSearchProps = {
  title: string;
  wrapperTitle: string;
  reverse?: boolean;
  genres: React.ReactNode;
  movies: React.ReactNode;
};

export const GenreOrSearch = (props: GenreOrSearchProps) => {
  const { title, wrapperTitle, reverse, genres, movies } = props;

  console.log(reverse);

  return (
    <section className="page-primary mt-[59px]">
      <div className="py-8 lg:pt-[52px]">
        <h2 className="mb-8 text-2xl font-semibold text-foreground 
        lg:text-3xl">
          {wrapperTitle}
        </h2>
        <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0">
          <div className="static h-fit w-full lg:sticky lg:top-[111px] 
          lg:w-[387px]">
            <div className="space-y-5">
              <GenreHeader title={title} />
              {genres}
            </div>
          </div>

          <Separator
            orientation="vertical"
            className="hidden lg:block border h-screen mx-4"
          />

          {movies}
        </div>
      </div>
    </section>
  );
};