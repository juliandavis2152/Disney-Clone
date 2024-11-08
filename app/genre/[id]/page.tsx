import MoviesCarousel from "@/components/MoviesCarousel";
import OpenAIAzureSuggestion from "@/components/OpenAIAzureSuggestion";
import { getDiscoverMovies } from "@/lib/getMovies";

type Params = Promise<{ id: string }>;
type SearchParams = Promise<{ genre: string }>;

type Props = {
  params: Params;
  searchParams: SearchParams;
};

async function GenrePage(props: Props) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  const { id } = params; // Get id from params
  const { genre } = searchParams;

  // Fetch movies based on the genre id
  const movies = await getDiscoverMovies(id);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-5 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {genre}</h1>
        <OpenAIAzureSuggestion term={genre} />
      </div>
      <MoviesCarousel title={`${genre} Movies`} movies={movies} isVertical />
    </div>
  );
}

export default GenrePage;
