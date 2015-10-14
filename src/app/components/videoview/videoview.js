import template from './videoview.html!text';
import '../../common/styles/videoplayer.css!';
import './videoview.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

const INIT = new WeakMap();
const SERVICE = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@RouteConfig('videoview', {
  url: '/:tag/:id/:slug',
  template: '<video-view></video-view>',
  resolve: {
    // Constant Meta
    $title: () => 'Video View',
    $description: () => 'Videoview description'
  }
})
@Component({
  selector: 'video-view'
})
@View({
  template: template
})
@Inject('$stateParams', 'VideosService', '$log')
// end-non-standard

// Videoview Controller
class VideoView {
  constructor($stateParams, VideosService, $log) {
    Object.assign(this, {
      name: 'Video View',
      activated: false,
      id: $stateParams.id
    });
    SERVICE.set(this, VideosService);
    LOG.set(this, $log);
    LOG.get(this).log(this.id);
    INIT.set(this, () => {
      const id = this.id;
      SERVICE.get(this).getVideo(id).then(video => {
        this.video = video[0];
        this.videoHtml = video[1];
        this.title = this.video.fragments['video.title'].value[0].text;
        this.intro = this.video.fragments['video.shortlede'].value[0].text;
        this.content = this.videoHtml;
        this.description = this.video.fragments['video.content'];
        this.url = this.video.fragments['video.videourl'].value;
        this.poster = this.video.fragments['video.poster'].value.main.url;

        // Videogular
        this.video = this.url;
        this.currentTime = 0;
        this.totalTime = 0;
        this.state = null;
        this.volume = 1;
        this.isCompleted = false;
        this.API = null;
        this.onPlayerReady = (API) => {
          this.API = API;
        };
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

export default VideoView;
