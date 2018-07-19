import { normalize} from 'normalizr';
import {videoSchema} from "./index"

function normalizeVideo(video) {
  return normalize(video, videoSchema);
}

export default normalizeVideo
