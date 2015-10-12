import _ from 'lodash';
import template from './home.html!text';
import './home.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

const INIT = new WeakMap();
const SERVICE = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@RouteConfig('home', {
  url: '/',
  template: '<home></home>',
  resolve: {
    // Constant Meta
    $title: () => 'Home',
    $description: () => 'My App description'
  }
})
@Component({
  selector: 'home'
})
@View({
  template: template
})
@Inject('VideosService', '$log')
// end-non-standard

// Home Controller
class Home {
  constructor(VideosService, $log) {
    Object.assign(this, {
      name: 'home',
      activated: false
    });
    SERVICE.set(this, VideosService);
    LOG.set(this, $log);
    INIT.set(this, () => {
      SERVICE.get(this).getAllVideos().then(videos => {
        this.videos = videos;
        this.results = videos.results;
      });
    });

    // On load
    this.activate();
  }

  /**
   * Handles on load processing, and loading initial data
 */
  activate() {
    // fetch data

    INIT.get(this)();
    this.activated = true;
  }
}

export default Home;
