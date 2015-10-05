import template from './videolist.html!text';
import './videolist.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

// start-non-standard
@RouteConfig('app.videolist', {
  url: '/',
  template: '<videolist></videolist>',
  resolve: {
    // Constant Meta
    $title: () => 'Videolist',
    $description: () => 'Videolist description'
  }
})
@Component({
  selector: 'videolist'
})
@View({
  template: template
})
@Inject('VideosService', '$location', '$log')
// end-non-standard

// Videolist Controller
class Videolist {
  constructor(VideosService, $location, $log) {
    Object.assign(this, {
      $log,
      $location,
      VideosService: VideosService,
      name: 'videolist',
      activated: false
    });
    // On load
    this.activate();
  }

  /**
   * Handles on load processing, and loading initial data
 */
  activate() {

    // fetch data using promise
    this.VideosService.getAllVideos()
      .then((videos) => {
        this.videos = videos;
        this.results = videos.results;
        this.$log.log(this.results);
      }).catch((err) => {
        this.$location.path('/');
        this.$log.log(err); // oh noes, we got an error
      });

    this.activated = true;
  }
}

export default Videolist;
