import {Service, Inject} from '../decorators/decorators';

// start-non-standard
@Service({
  serviceName: 'ItemsService'
})
@Inject('$log')
// end-non-standard
class ItemsService {
  constructor($log) {
    this.$log = $log;
    this.name = 'Items Service';
    thisitems = [
      {
        id: 0,
        name: 'First item',
        description: 'This is my first item',
        status: 'active'
      },
      {
        id: 1,
        name: 'Second item',
        description: 'This is my second item',
        status: 'active'
      },
      {
        id: 2,
        name: 'Third item',
        description: 'This is my third item',
        status: 'active'
      },
      {
        id: 3,
        name: 'Fourth item',
        description: 'This is my fourth item',
        status: 'active'
      },
      {
        id: 4,
        name: 'Fifth item',
        description: 'This is my fifth item',
        status: 'active'
      }
    ];
  }
  getAllItems() {
    return this.name;
  }

  getItemById() {
    return this.name;
  }
}

export default ItemsService;
