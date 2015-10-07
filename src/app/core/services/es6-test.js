function test($location) {
  const sections = [{
    name: 'Getting Started',
    state: 'home.gettingstarted',
    type: 'link'
  }];
  sections.push({
    name: 'Beers',
    type: 'toggle',
    pages: [
      {
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
      }
    ]
  });
  sections.push({
    name: 'Munchies',
    type: 'toggle',
    pages: [
      {
        name: 'Cheetos',
        type: 'link',
        state: 'munchies.cheetos',
        icon: 'fa fa-group'
      },
      {
        name: 'Banana Chips',
        state: 'munchies.bananachips',
        type: 'link',
        icon: 'fa fa-map-marker'
      },
      {
        name: 'Donuts',
        state: 'munchies.donuts',
        type: 'link',
        icon: 'fa fa-map-marker'
      }
    ]
  });

  const self = {
    sections: sections,
    toggleSelectSection(section) {
      self.openedSection = self.openedSection === section ? null : section;
    },
    isSectionSelected(section) {
      return self.openedSection === section;
    },
    selectPage(section, page) {
      page && page.url && $location.path(page.url);
      self.currentSection = section;
      self.currentPage = page;
    }
  };
  return self;
  function sortByHumanName(a, b) {
    return a.humanName < b.humanName ? -1 : a.humanName > b.humanName ? 1 : 0;
  }
}