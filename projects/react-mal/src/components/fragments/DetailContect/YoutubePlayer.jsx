import YouTube from "react-youtube";

const YoutubePlayer = (props) => {
  const { youtubeId, youtubeEmbed } = props;

  const ytId = youtubeEmbed?.split("/").pop().split("?")[0];

  const opts = {
    width: "600",
    height: "350"
  };

  return (
    <div className="my-5">
      {/* {youtubeId !== null ? (
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={opts}
        />
      ) : (
        <iframe src={youtubeEmbed} width={700} height={350}></iframe>
      )} */}
      <YouTube
        videoId={youtubeId !== null ? youtubeId : ytId}
        onReady={(event) => event.target.pauseVideo()}
        opts={opts}
        onError={() => alert("Trailer not found")}
      />
    </div>
  );
};

export default YoutubePlayer;
