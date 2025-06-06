type MovieGenre = {
    id: number;
    name: string;
  };
  
  type MovieGenresResponse = {
    genres: MovieGenre[];
  };
  
  type MovieDetail = {
    id: number;
    runtime: number;
    overview: string;
    vote_count: number;
    poster_path: string;
    release_date: string;
    vote_average: number;
    backdrop_path: string;
    original_title: string;
  } & MovieGenresResponse;
  
  type MoviesListResponse = {
    total_pages: number;
    total_results: number;
    results: MovieDetail[];
  };

  type VideoDetails = {
    key: string;
    site: string;
    type: string;
  };
  
  type MovieVideosResponse = {
    results: VideoDetails[];
  };
  type MovieCategoryPage = {
    title: string;
    category: string;
    seeMorePath: string;
  };
  type PageRouteParams = {
    params: {
      segments: string[];
    };
    searchParams: {
      page?: string;
    };
  };

  type MovieCastMember = {
    name: string;
    known_for_department: string;
  };

  type MovieCrewMember = {
    name: string;
    job: string;
  };

  type MovieCreditsResponse = {
    cast: MovieCastMember[];
    crew: MovieCrewMember[];
  };

  type ParralelRoutesLayoutProps = {
    genres: React.ReactNode;
    movies: React.ReactNode;
  };