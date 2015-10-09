import template from './featured-video.html!text';
import '../../common/styles/videoplayer.css!';
import './featured-video.css!';
import {Component, View, Inject} from '../../core/decorators/decorators';

const INIT = new WeakMap();
const SERVICE = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@Component({
  selector: 'featured-video'
})
@View({
  template: template
})
@Inject('VideosService', '$log')
// end-non-standard

// Featured-video Controller
class FeaturedVideo {
  constructor(VideosService, $log) {
    Object.assign(this, {
      label: 'Featured Video',
      activated: false
    });
    SERVICE.set(this, VideosService);
    LOG.set(this, $log);
    INIT.set(this, () => {
      SERVICE.get(this).getFeatured().then(featured => {
        this.featured = featured;
        this.results = featured.results;
        this.title = this.results[0].fragments['featured.title'].value[0].text;
        this.url = this.results[0].fragments['featured.videourl'].value;
        this.poster = this.results[0].fragments['featured.poster'].value.main.url;

        // Videogular
        this.video = this.url;
        this.currentTime = 0;
        this.totalTime = 0;
        this.state = null;
        this.volume = 1;
        this.isCompleted = false;
        this.API = null;
        this.onPlayerReady = (API) => this.API = API;

        this.onCompleteVideo = () => this.isCompleted = true;

        this.onUpdateState = (state) => this.state = state;

        this.onUpdateTime = (currentTime, totalTime) => {
          this.currentTime = currentTime;
          this.totalTime = totalTime;
        };

        this.onUpdateVolume = (newVol) => this.volume = newVol;

        this.config = {
          autoHide: true,
          autoHideTime: 3000,
          autoPlay: true,
          preload: 'auto',
          sources: [
            {src: this.video },
          ],
          plugins: {
            poster: this.poster
          }
        };
      });
    });
    // On load
    this.activate();
  }

  /**
   * Handles on load processing, and loading initial data
 */
  activate() {
    INIT.get(this)();
    this.activated = true;
  }
}

export default FeaturedVideo;
