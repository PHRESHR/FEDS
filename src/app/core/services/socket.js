import {Service, Inject} from '../decorators/decorators';

const socket = io();
// start-non-standard
@Service({
  serviceName: 'TestService'
})
@Inject('$rootScope', '$log')
// end-non-standard
class SocketService {
  constructor($rootScope, $log) {
    this.$rootScope = $rootScope;
    this.$log = $log;
    this.name = 'Socket Service';
  }
  on(eventName, callback) {
    socket.on(eventName, () => {
      const args = arguments;
      this.$rootScope.$apply(() => {
        callback.apply(socket, args);
      });
    });
  }
  emit(eventName, data, callback) {
    socket.emit(eventName, data, () => {
      const args = arguments;
      this.$rootScope.$apply(() => {
        callback.apply(socket, args);
      });
    });
  }
}

export default SocketService;
