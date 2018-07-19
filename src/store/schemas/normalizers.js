import { normalize} from 'normalizr';
import {videoSchema} from "./index"

function normalizeVideo(video) {

  let vid = normalize(video, videoSchema);
  debugger
}

export default normalizeVideo
