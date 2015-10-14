import {Service, Inject} from '../decorators/decorators';

const HTTP = new WeakMap();
const LOG = new WeakMap();

// start-non-standard
@Service({
  serviceName: 'VideosService'
})
@Inject('$http', '$log')
// end-non-standard
class VideosService {
  constructor($http, $log) {
    HTTP.set(this, $http);
    LOG.set(this, $log);
    Object.assign(this, {
      apiHost: '/api',
      name: 'Videos Service'
    });
  }

  getAllVideos() {
    return HTTP.get(this).get(`${this.apiHost}/video`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }

  getFeatured() {
    return HTTP.get(this).get(`${this.apiHost}/video/featured`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }

  getChannel(channel) {
    return HTTP.get(this).get(`${this.apiHost}/video/${channel}`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }

  getVideo(id) {
    return HTTP.get(this).get(`${this.apiHost}/video/${id}`)
      .then(results => results.data )
      .catch(err => LOG.get(this).log(err));
  }
}

export default VideosService;
