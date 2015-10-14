import {Filter, Inject} from '../decorators/decorators';

export class HtmlFilters {
  // Trusted
  @Filter({
    filterName: 'trusted'
  })
  @Inject('$sce')
  static trustedFilter($sce) {
    return (url) => $sce.trustAsResourceUrl(url);
  }
  // Unsafe
  @Filter({
    filterName: 'unsafe'
  })
  @Inject('$sce')
  static unsafeFilter($sce) {
    return (val) => $sce.trustAsHtml(val);
  }
}
