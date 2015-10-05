import {Service, Inject} from '../decorators/decorators';

// start-non-standard
@Service({
  serviceName: 'MenuService'
})
@Inject('$rootScope', '$location', '$log')
// end-non-standard
class MenuService {
  constructor($rootScope, $location, $log) {
    this.$rootScope = $rootScope;
    this.$location = $location;
    this.$log = $log;
    this.name = 'Menu Service';
    this.sections = [{
      name: 'Getting Started',
      state: 'home.gettingstarted',
      type: 'link'
    }];
    this.sections.push({
      name: 'Beers',
      type: 'toggle',
      pages: [{
        name: 'IPAs',
        type: 'link',
        state: 'home.beers.ipas',
        icon: 'fa fa-group'
      },
      {
        name: 'Porters',
        state: 'home.beers.porters',
        type: 'link',
        icon: 'fa fa-map-marker'
      },
      {
        name: 'Wheat',
        state: 'home.beers.wheat',
        type: 'link',
        icon: 'fa fa-plus'
      }]
    });
  }
  toggleSelectSection(section) {
    this.openedSection = (this.openedSection === section ? null : section);
    return this.openedSection;
  }
  isSectionSelected(section) {
    return this.openedSection === section;
  }
  selectPage(section, page) {
    page && page.url && this.$location.path(page.url);
    this.currentSection = section;
    this.currentPage = page;
  }
}

export default MenuService;
