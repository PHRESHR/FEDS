import {Directive, Inject} from '../../core/decorators/decorators';

const LOG = new WeakMap();
const ANIMATE_CSS = new WeakMap();

// start-non-standard
@Directive({
  selector: 'animate-on-load'
})
// end-non-standard
class animateOnLoad {
  constructor($animateCss, $log) {
    this.restrict = 'A';
    ANIMATE_CSS.set(this, $animateCss);
    LOG.set(this, $log);
  }

  link(scope, element, attrs) {
    const animate = ANIMATE_CSS.get(animateOnLoad.instance);
    animate(element, {
      'event': 'enter',
      structural: true
    }).start();
  }

  // start-non-standard
  @Inject('$animateCss', '$log')
  // end-non-standard
  static directiveFactory($animateCss, $log) {
    animateOnLoad.instance = new animateOnLoad($animateCss, $log);
    return animateOnLoad.instance;
  }
}

export default animateOnLoad;
