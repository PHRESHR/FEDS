import {Service, Inject} from '../decorators/decorators';

// start-non-standard
@Service({
  serviceName: 'TestService'
})
@Inject('$log')
// end-non-standard
class TestService {
  constructor($log) {
    // this.$log = $log;
    this.name = 'Test Service';
  }
  getService() {
    return this.name;
  }
}

export default TestService;
