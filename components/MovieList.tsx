import React from "react";
import MovieCard from "./MovieCard";

import { isEmpty } from "lodash";

interface MoveListProps {
  data: Record<string, any>[];
  title: string;
}

const MovieList: React.FC<MoveListProps> = ({ data, title }) => {
  console.log(data);

  if (isEmpty(data)) {
    return null;
  }
  return (
    <div className="mt-4 space-y-8 px-4 md:px-12">
      <p className="text-md mb-4 font-semibold text-white md:text-xl lg:text-2xl">
        {title}
      </p>
      <div className="grid grid-cols-4 gap-2">
        {data.map((movie) => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
