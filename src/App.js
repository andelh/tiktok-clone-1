import React from "react";
import Video from "./Video";
// import db from "./firebase";
import "./App.css";

function App() {
  // const [videos, setVideos] = useState([]);

  return (
    // BEM
    <div className="app">
      <div className="app__videos">
        {feed.map(({ uri, username, music, likes, comments }) => (
          <Video
            url={uri}
            channel={username}
            song={music}
            likes={likes}
            messages={comments}
            description={"Some description"}
            shares={0}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

const feed = [
  {
    id: 0,
    username: "@matheuscastroweb",
    tags:
      "#testvideo #reactnative #tiktok #git #development #github #clone #react",
    music: "Introducing Chromecast. The easiest way to enjoy",
    likes: 9444,
    comments: 6340,
    uri:
      "https://dv.phncdn.com/videos/201812/08/195742421/720P_4000K_195742421.mp4?ttl=1607482960&ri=1433600&rs=4000&hash=aca52685bc6020c07135013ff74aa1e0",
  },
  {
    id: 1,
    username: "@matheuscastroweb",
    tags: "#test",
    music: "HBO GO now works with Chromecast",
    likes: 8411,
    comments: 2240,
    uri:
      "https://dv.phncdn.com/videos/202009/14/351867072/720P_4000K_351867072.mp4?ttl=1607484068&ri=1024000&rs=4000&hash=099ebd592009ee74dabf672ad8f27dd0",
  },
  {
    id: 2,
    username: "@matheuscastroweb",
    tags: "#test",
    music: "HBO GO now works with Chromecast",
    likes: 8411,
    comments: 2240,
    uri:
      "https://ev.phncdn.com/videos/202012/02/376086911/720P_4000K_376086911.mp4?validfrom=1607476951&validto=1607484151&rate=500k&burst=1200k&hash=HNxTELE9LZt1uI2bmUQjPksHn4k%3D",
  },
  {
    id: 3,
    username: "@matheuscastroweb",
    tags: "#test",
    music: "HBO GO now works with Chromecast",
    likes: 8411,
    comments: 2240,
    uri:
      "https://ev.phncdn.com/videos/202012/01/375719271/720P_4000K_375719271.mp4?validfrom=1607476999&validto=1607484199&rate=500k&burst=1000k&hash=UTZ28TXKXz%2BCf6LPoK49SXzDGco%3D",
  },
];
