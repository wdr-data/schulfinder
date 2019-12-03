import React from "react";
import PropTypes from "prop-types";
import { Player, BigPlayButton } from "video-react";
import "video-react/dist/video-react.css";
import styles from "./video.module.css";
import HLSSource from "./HLSSource.jsx";

const WdrPlayer = ({ videoId, videoSrc, videoPoster }) => {
  if (typeof videoId !== "undefined") {
    var url =
      "http://deviceids-medp.wdr.de/ondemand/" +
      videoId.substring(0, 3) +
      "/" +
      videoId +
      ".js";

    // cors problem mit der MedienDB - URL :-(
  }
  return (
    <Player playsInline fluid poster={videoPoster}>
      <HLSSource isVideoChild src={videoSrc} />
      <BigPlayButton className={styles.playButton} />
    </Player>
  );
};

WdrPlayer.propTypes = {
  videoSrc: PropTypes.string,
  videoPoster: PropTypes.string
};
export default WdrPlayer;
