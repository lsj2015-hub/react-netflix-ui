import './watch.scss';
import { ArrowBackOutlined } from '@mui/icons-material';

function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        progress
        controls
        src="https://assets.mixkit.co/videos/preview/mixkit-soldier-killed-in-action-5961-large.mp4"
      />
    </div>
  );
}

export default Watch;
