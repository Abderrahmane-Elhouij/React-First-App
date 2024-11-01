import React, { useState } from "react";
import axios from "axios";

const Youtube = () => {
  const [videoInfo, setVideoInfo] = useState({
    thumbnail: "/youtube/miniature.png",
    publishedAt: "xxxxxxx",
    title: "Titre de la vidéo",
    channelProfile: "/youtube/profile.png",
    channelName: "Nom de la chaine",
    subscribers: "XX",
    views: "XX",
    likes: "XX",
    comments: "XX",
  });

  const fetchVideoInfo = async (e) => {
    e.preventDefault();

    function getYoutubeVideoId(url) {
      const pattern = /(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/;
      const matches = url.match(pattern);
      return matches && matches.length > 1 ? matches[1] : null;
    }

    const youtubeUrl = e.target.elements.url.value;
    const videoId = getYoutubeVideoId(youtubeUrl);

    try {
      const videoResponse = await axios.request({
        method: "GET",
        url: "https://youtube-v31.p.rapidapi.com/videos",
        params: {
          part: "contentDetails,snippet,statistics",
          id: videoId,
        },
        headers: {
          "X-RapidAPI-Key":
            "53c90aacefmsh3426cfc180c4f4dp14315ejsnc04993688b5d",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      });

      const channelResponse = await axios.request({
        method: "GET",
        url: "https://youtube-v31.p.rapidapi.com/channels",
        params: {
          part: "snippet,statistics",
          id: videoResponse.data.items[0].snippet.channelId,
        },
        headers: {
          "X-RapidAPI-Key":
            "53c90aacefmsh3426cfc180c4f4dp14315ejsnc04993688b5d",
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      });

      setVideoInfo({
        thumbnail: videoResponse.data.items[0].snippet.thumbnails.medium.url,
        publishedAt: videoResponse.data.items[0].snippet.publishedAt,
        title: videoResponse.data.items[0].snippet.localized.title,
        channelProfile:
          channelResponse.data.items[0].snippet.thumbnails.default.url,
        channelName: videoResponse.data.items[0].snippet.channelTitle,
        subscribers: channelResponse.data.items[0].statistics.subscriberCount,
        views: videoResponse.data.items[0].statistics.viewCount,
        likes: videoResponse.data.items[0].statistics.likeCount,
        comments: videoResponse.data.items[0].statistics.commentCount,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <br />
      <br />
      <br />
      <form onSubmit={fetchVideoInfo}>
        <label htmlFor="url">
          <span>
            <img
              src="/youtube/youtube.png"
              alt="youtube icon"
              width={15}
              height={15}
            />
          </span>
          &nbsp;Détails Youtube&nbsp;&nbsp;&nbsp;
        </label>
        <input type="url" name="url" id="url" style={{ width: "600px" }} />
      </form>
      <br />
      <br />
      <div>
        <img src={videoInfo.thumbnail} alt={"miniature"} width={230} height={200}/>
        <br />
        <b>Date de publication ( {videoInfo.publishedAt} )</b>
        <h1>{videoInfo.title}</h1>
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <img
            src={videoInfo.channelProfile}
            alt="profile du chaine"
            width={50}
            height={50}
            style={{ borderRadius: "100%" }}
          />
          <div>
            <b>{videoInfo.channelName}</b>
            <br />
            <b>{videoInfo.subscribers} Abonnés</b>
          </div>
          <button>S'abonner</button>
        </div>
        <h1>Statistiques</h1>
        <b>Vues : {videoInfo.views}</b>
        <br />
        <b>Likes : {videoInfo.likes}</b>
        <br />
        <b>Commentaires : {videoInfo.comments}</b>
      </div>
    </>
  );
};

export default Youtube;
