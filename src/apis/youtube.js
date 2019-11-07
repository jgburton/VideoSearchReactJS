import axios from "axios";

const KEY = "AIzaSyAUhZQC-eyxhAxDlaKOh1h2i43FUkI-doA";

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults:5,
    key:KEY
  }
});
