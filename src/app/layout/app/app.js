import '../../components/sidenav/sidenav';
import '../../components/toolbar/toolbar';
import '../../components/videolist/videolist';
import '../../components/videoview/videoview';
import '../../components/episodes/episodes';
import '../../components/home/home';
import '../../components/docu-series/docu-series';
import '../../components/radio-tv-film/radio-tv-film';
import '../../components/music/music';
import '../../components/comedy/comedy';
import '../../components/lifestyle/lifestyle';
import '../../components/about/about';
import template from './app.html!text';
import './app.css!';
import {RouteConfig, View, Component, Inject} from '../../core/decorators/decorators';

// start-non-standard
@Component({
  selector: 'app'
})
@View({
  template: template
})
@Inject('$log')
// end-non-standard
class AppComponent {
  constructor($log) {
    Object.assign(this, {
      $log
    });
    $log.log('App Container');
  }
}

export default AppComponent;
