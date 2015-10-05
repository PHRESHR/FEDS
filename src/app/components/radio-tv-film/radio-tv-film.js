import template from './radio-tv-film.html!text';
import './radio-tv-film.css!';
import {RouteConfig, Component, View, Inject} from '../../core/decorators/decorators';

// start-non-standard
@RouteConfig('radio-tv-film', {
  url: '/radio-tv-film',
  template: '<radio-tv-film></radio-tv-film>',
  resolve: {
    // Constant Meta
    $title: () => 'Radio-tv-film',
    $description: () => 'Radio-tv-film description'
  }
})
@Component({
  selector: 'radio-tv-film'
})
@View({
  template: template
})
@Inject('$log')
// end-non-standard

// RadioTvFilm Controller
class RadioTvFilm {
  constructor($log) {
    Object.assign(this, {
      $log,
      apiHost: '/api',
      name: 'radio-tv-film',
      activated: false
    });
    // On load
    this.activate();
  }

  /**
   * Handles on load processing, and loading initial data
 */
  activate() {

    this.activated = true;
  }
}

export default RadioTvFilm;
