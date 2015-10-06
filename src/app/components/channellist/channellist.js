import template from './channellist.html!text';
import './channellist.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

const INIT = new WeakMap();
const SERVICE = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@Component({
  selector: 'channellist'
})
@View({
  template: template
})
@Inject('VideosService', '$log')
// end-non-standard

// Channellist Controller
class Channellist {
  constructor(VideosService, $log) {
    SERVICE.set(this, VideosService);
    LOG.set(this, $log);
    INIT.set(this, () => {
      SERVICE.get(this).getDocuSeries().then(videos => {
        this.videos = videos;
        this.results = videos.results;
        LOG.get(this).log(this.results);
      });
    });
    Object.assign(this, {
      name: 'Channel listing',
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
