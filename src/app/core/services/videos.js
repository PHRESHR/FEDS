import {Service, Inject} from '../decorators/decorators';

// start-non-standard
@Service({
  serviceName: 'VideosService'
})
@Inject('$http', '$log')
// end-non-standard
class VideosService {
  constructor($http, $log) {
    Object.assign(this, {
      $http,
      $log,
      apiHost: '/api',
      name: 'Videos Service'
    });
  }

  getAllVideos() {
    return this.$http.get(`${this.apiHost}/video`)
      .then((results) => {
        // Just return the http body
        return results.data;
      })
      .catch((err) => {
        this.$log.log(err);
      });
  }

  // getAllVideos() {
  //   return this.$http.get(`${this.apiHost}/video`);
  // }
  getVideo(id) {
    return this.$http.get('api/video/' + id);
  }
}

export default VideosService;
