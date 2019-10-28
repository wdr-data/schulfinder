import React from "react";
import PropTypes from "prop-types";
import { Player, BigPlayButton } from "video-react";
import "video-react/dist/video-react.css";
import styles from "./video.module.css";
import HLSSource from "./HLSSource.jsx";

const WdrPlayer = ({ videoSrc, videoPoster }) => {
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
