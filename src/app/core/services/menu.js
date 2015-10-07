import {Service, Inject} from '../decorators/decorators';

const LOCATION = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@Service({
  serviceName: 'MenuService'
})
@Inject('$rootScope', '$location', '$log')
// end-non-standard
class MenuService {
  constructor($location, $log) {
    LOCATION.set(this, $location);
    LOG.set(this, $log);
    Object.assign(this, {
      name: 'Menu Service',
      openedSection: '',
      sections: [
        {
          name: 'Channels',
          type: 'toggle',
          pages: [
            {
              name: 'Docu-Series',
              type: 'link',
              state: 'docu-series'
            },
            {
              name: 'Radio-TV-Film',
              type: 'link',
              state: 'radio-tv-film'
            },
            {
              name: 'Music',
              type: 'link',
              state: 'music'
            },
            {
              name: 'Comedy',
              type: 'link',
              state: 'comedy'
            },
            {
              name: 'Lifestyle',
              type: 'link',
              state: 'lifestyle'
            }
          ]
        }
      ]
    });
    this.sections.push({
      name: 'Episodes',
      state: 'episodes',
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
    page && page.url && LOCATION.get(this).path(page.url);
    this.currentSection = section;
    this.currentPage = page;
  }
}

export default MenuService;
