import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAnimeFullById, getCharacterById } from "../../../services/api";
import HeaderDetailInformation from "./HeaderDetailInformation";
import DetailInformation from "./DetailInformation";
import YoutubePlayer from "./YoutubePlayer";

const DetailContent = () => {
  const { id } = useParams();
  const [detailAnime, setDetailAnime] = useState([]);
  const [charAnime, setCharAnime] = useState([]);

  useEffect(() => {
    getAnimeFullById(id, (data) => {
      console.log(data.data);
      setDetailAnime(data.data);
    });
    getCharacterById(id, (data) => {
      const limitedData = data.data.slice(0, 5);
      setCharAnime(limitedData);
      console.log(limitedData);
    });
  }, [id, setDetailAnime, setCharAnime]);

  return (
    <div className="px-10 py-5 bg-my-dark text-my-white h-full">
      {detailAnime.length != 0 && (
        <div className="py-5">
          <div className="rounded overflow-hidden flex gap-5">
            <img
              src={detailAnime.images.webp.large_image_url}
              alt="..."
              className="rounded"
            />
            <div className="flex flex-col gap-5">
              <div>
                <p className="font-bold text-my-white text-4xl">
                  {detailAnime.title} ({detailAnime.year})
                </p>
              </div>
              <div className="flex items-center gap-5">
                <div className="flex flex-col items-center gap-5">
                  <p className="uppercase px-3 py-1 rounded bg-my-pink text-my-white text-xs">
                    score
                  </p>
                  <p>{detailAnime.score}</p>
                </div>
                <div className="flex flex-col gap-5 ite">
                  <div className="flex items-center gap-5">
                    <p className="text-slate-200 font-light text-lg">
                      Ranked{" "}
                      <span className="font-semibold text-slate-100">
                        #{detailAnime.rank}
                      </span>
                    </p>
                    <p className="text-slate-200 font-light text-lg">
                      Popularity{" "}
                      <span className="font-semibold text-slate-100">
                        #{detailAnime.popularity}
                      </span>
                    </p>
                    <p className="text-slate-200 font-light text-lg">
                      Members{" "}
                      <span className="font-semibold text-slate-100">
                        {detailAnime.members.toLocaleString()}
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-10 items-center">
                    <Link className="text-blue-400 text-xs hover:text-my-pink hover:underline transition-all duration-500 capitalize">
                      {detailAnime.season} {detailAnime.year}
                    </Link>
                    <Link className="text-blue-400 text-xs hover:text-my-pink hover:underline transition-all duration-500 capitalize">
                      {detailAnime.type}
                    </Link>
                    <Link className="text-blue-400 text-xs hover:text-my-pink hover:underline transition-all duration-500 capitalize">
                      {detailAnime.studios.length !== 0 &&
                        detailAnime.studios[0].name}
                    </Link>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-2xl font-semibold my-5">Synopsis</p>
                <p className="text-justify text-sm">{detailAnime.synopsis}</p>
              </div>
            </div>
          </div>

          <div className="py-10 flex gap-5">
            <div className="w-5/12 flex flex-col gap-5">
              <div>
                <HeaderDetailInformation>
                  Alternative Titles
                </HeaderDetailInformation>
                <div className="flex flex-col gap-1">
                  {detailAnime.title_synonyms.length !== 0 && (
                    <DetailInformation title="Synonyms">
                      {detailAnime.title_synonyms[0]}
                    </DetailInformation>
                  )}
                  <DetailInformation title="Japanese">
                    {detailAnime.title_japanese}
                  </DetailInformation>
                  <DetailInformation title="English">
                    {detailAnime.title_english}
                  </DetailInformation>
                </div>
              </div>

              <div>
                <HeaderDetailInformation>Information</HeaderDetailInformation>
                <div className="flex flex-col gap-1">
                  <DetailInformation title="Type">
                    {detailAnime.type}
                  </DetailInformation>
                  <DetailInformation title="Episodes">
                    {detailAnime.episodes}
                  </DetailInformation>
                  <DetailInformation title="Status">
                    {detailAnime.status}
                  </DetailInformation>
                  <DetailInformation title="Aired">
                    {detailAnime.aired.string}
                  </DetailInformation>
                  <DetailInformation title="Broadcast">
                    {detailAnime.broadcast.string}
                  </DetailInformation>
                  <DetailInformation title="Producers">
                    {detailAnime.producers.map((producer, index) => (
                      <Link
                        key={index}
                        className="text-blue-400 hover:text-my-pink hover:underline transition-all duration-500"
                      >
                        {index !== detailAnime.producers.length - 1
                          ? `${producer.name}, `
                          : producer.name}
                      </Link>
                    ))}
                  </DetailInformation>
                  <DetailInformation title="Licensors">
                    {detailAnime.licensors.map((licensor, index) => (
                      <Link
                        key={index}
                        className="text-blue-400 hover:text-my-pink hover:underline transition-all duration-500"
                      >
                        {index !== detailAnime.licensors.length - 1
                          ? `${licensor.name}, `
                          : licensor.name}
                      </Link>
                    ))}
                  </DetailInformation>
                  <DetailInformation title="Studios">
                    {detailAnime.studios.map((studio, index) => (
                      <Link
                        key={index}
                        className="text-blue-400 hover:text-my-pink hover:underline transition-all duration-500"
                      >
                        {index !== detailAnime.studios.length - 1
                          ? `${studio.name}, `
                          : studio.name}
                      </Link>
                    ))}
                  </DetailInformation>
                  <DetailInformation title="Source">
                    <Link className="text-blue-400 hover:text-my-pink hover:underline transition-all duration-500">
                      {detailAnime.source}
                    </Link>
                  </DetailInformation>
                  <DetailInformation title="Genres">
                    {detailAnime.genres.map((genre, index) => (
                      <Link
                        key={index}
                        className="text-blue-400 hover:text-my-pink hover:underline transition-all duration-500"
                      >
                        {index !== detailAnime.genres.length - 1
                          ? `${genre.name}, `
                          : genre.name}
                      </Link>
                    ))}
                  </DetailInformation>
                  <DetailInformation title="Duration">
                    {detailAnime.duration}
                  </DetailInformation>
                  <DetailInformation title="Rating">
                    {detailAnime.rating}
                  </DetailInformation>
                </div>
              </div>

              <div>
                <HeaderDetailInformation>Statistics</HeaderDetailInformation>
                <div className="flex flex-col gap-1">
                  <DetailInformation title="Score">
                    {detailAnime.score} (scored by{" "}
                    {detailAnime.scored_by.toLocaleString()} users)
                  </DetailInformation>
                  <DetailInformation title="Ranked">
                    #{detailAnime.rank}
                  </DetailInformation>
                  <DetailInformation title="Popularity">
                    #{detailAnime.popularity}
                  </DetailInformation>
                  <DetailInformation title="Members">
                    {detailAnime.members.toLocaleString()}
                  </DetailInformation>
                  <DetailInformation title="Favorites">
                    {detailAnime.favorites.toLocaleString()}
                  </DetailInformation>
                </div>
              </div>
            </div>
            <div className="w-7/12 flex flex-col">
              <div>
                <HeaderDetailInformation>Trailer</HeaderDetailInformation>
                <YoutubePlayer
                  youtubeEmbed={detailAnime.trailer.embed_url}
                  youtubeId={detailAnime.trailer.youtube_id}
                />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <HeaderDetailInformation>
                    Characters & Voice Actors
                  </HeaderDetailInformation>
                  <Link
                    to="/"
                    className="text-blue-500 hover:underline transition-all text-xs duration-500"
                  >
                    See More
                  </Link>
                </div>
                <div className="my-5">
                  {charAnime.length !== 0 &&
                    charAnime.map((char, index) => (
                      <table key={index} className="w-full">
                        <tbody>
                          <tr>
                            <td className="flex justify-between border border-slate-400">
                              <div className="flex gap-3">
                                <div>
                                  <img
                                    src={char.character.images.webp.image_url}
                                    alt={char.character.images.jpg.image_url}
                                    className="object-contain w-15"
                                  />
                                </div>
                                <p className="text-sm">{char.character.name}</p>
                              </div>
                              <div className="flex gap-3">
                                <p className="text-sm">
                                  {char.voice_actors.length > 0
                                    ? char.voice_actors[0].person.name
                                    : "undifined"}
                                </p>
                                <img
                                  src={
                                    char.voice_actors.length > 0
                                      ? char.voice_actors[0].person.images.jpg
                                          .image_url
                                      : "/public/assets/images/questionmark_23.gif"
                                  }
                                  alt={
                                    char.voice_actors.length > 0
                                      ? char.voice_actors[0].person.name
                                      : "undifined"
                                  }
                                  className="object-contain w-15"
                                />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailContent;
