// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import PageMetaModule from './page-meta';
import PageMetaFactory from './page-meta.factory';
import test from './page-meta-test';

describe('PageTitle', ()=> {
  it('should run this test', ()=> {
    expect(4).to.equal(4);
  });

  it('should import properly', function() {
    expect(test.hello).to.equal('world');
  });
});
