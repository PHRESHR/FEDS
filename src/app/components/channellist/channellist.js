import template from './channellist.html!text';
import './channellist.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

const CHANNEL_TITLE = new WeakMap();
const INIT = new WeakMap();
const SERVICE = new WeakMap();
const LOCATION = new WeakMap();
const STATE = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@Component({
  selector: 'channellist'
})
@View({
  template: template
})
@Inject('VideosService', '$location', '$state', '$log')
// end-non-standard

// Channellist Controller
class Channellist {
  constructor(VideosService, $location, $state, $log) {
    SERVICE.set(this, VideosService);
    LOG.set(this, $log);
    LOCATION.set(this, $location);
    STATE.set(this, $state);
    CHANNEL_TITLE.set(this, STATE.get(this).current.name);
    INIT.set(this, () => {
      SERVICE.get(this).getChannel(STATE.get(this).current.name).then(videos => {
        this.videos = videos;
        this.results = videos.results;
        // const titles = this.results.map((result) => result.fragments['video.title'].value[0].text);
        // const content = this.results.map((result) => result.fragments['video.content'].value[0].text);
        // const query = this.results.filter((result) => result.fragments['video.title'].value[0].text === 'Faery Dust Episode 3');
        // const words = query.match(/\S+\s*/g);
        // const queryApi = (query) => {
        //   return const cats = animals.filter((x) => x.species === 'cat');
        // };
        // LOG.get(this).log(content);
      });
    });
    Object.assign(this, {
      channel_title: CHANNEL_TITLE.get(this),
      activated: false
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

export default Channellist;
