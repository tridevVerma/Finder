import React, { useEffect } from "react";
import { useGoogleContext } from "./customContext";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import Search from "./routesComponents/Search";
import Image from "./routesComponents/Image";
import News from "./routesComponents/News";
import Video from "./routesComponents/Video";
import EmptyPage from "./EmptyPage";

const Results = () => {
  const { isLoading, results, fetchGoogleData, searchTerm, setSearchTerm } =
    useGoogleContext();

  const query = searchTerm.split(" ").join("+");
  const { type } = useParams();

  useEffect(() => {
    fetchGoogleData(type, query);
  }, [type]);

  if (isLoading) {
    return <Loader />;
  }

  if (searchTerm === "") {
    return <EmptyPage />;
  }

  switch (type) {
    case "search":
      return (
        <Search
          results={results?.results}
          answers={results?.answers}
          setSearchTerm={setSearchTerm}
        />
      );
    case "image":
      return <Image results={results?.image_results} />;
    case "news":
      return <News results={results?.entries} />;
    case "video":
      return <Video results={results?.results} />;
    default:
      return <h1>Hello</h1>;
  }
};

export default Results;
