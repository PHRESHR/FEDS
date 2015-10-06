import {Service, Inject} from '../decorators/decorators';

// start-non-standard
@Service({
  serviceName: 'MenuService'
})
@Inject('$rootScope', '$location', '$log')
// end-non-standard
class MenuService {
  constructor($rootScope, $location, $log) {
    Object.assign(this, {
      $rootScope,
      $location,
      $log,
      name: 'Menu Service'
    });
    this.sections = [{
      name: 'Docu-Series',
      type: 'toggle',
      pages: [{
        name: 'All',
        type: 'link',
        state: 'docu-series'
      },
      {
        name: 'Boxing Chicks',
        type: 'link',
        state: 'episodes.boxing-chicks'
      }]
    }];
    this.sections.push({
      name: 'Radio-Tv-Film',
      state: 'radio-tv-film',
      type: 'link'
    });
    this.sections.push({
      name: 'Music',
      state: 'music',
      type: 'link'
    });
    this.sections.push({
      name: 'Comedy',
      state: 'comedy',
      type: 'link'
    });
    this.sections.push({
      name: 'Lifestyle',
      state: 'lifestyle',
      type: 'link'
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
