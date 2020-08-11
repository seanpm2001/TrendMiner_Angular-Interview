import { async, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ContextItemService } from './context-item.service';
import { ContextItem } from '../models/context-item.model';

describe('ContextItemService', () => {

  let service: ContextItemService;
  let httpMock: HttpTestingController;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ContextItemService],
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(ContextItemService);
    httpMock = TestBed.inject(HttpTestingController);
  }));

  describe('When calling getContextItems', () => {
    it('should do a fetch all the context items', (done) => {
      const contextItems = [
        {
          id: '1',
          name: 'Test 1',
          type: 'Test type'
        },
        {
          id: '2',
          name: 'Test 2',
          type: 'Test type 2'
        }
      ] as Array<ContextItem>;

      service.getContextItems().subscribe(result => {
        expect(result).toEqual(contextItems);
        done();
      });

      const request = httpMock.expectOne('/api/context');
      request.flush(contextItems);
    });
  });

  describe('When calling createContextItem', () => {
    it('should do a post to create the context item', (done) => {
      const contextItem =
        {
          name: 'Test 1',
          type: 'Test type'
        } as ContextItem;

      const createdContextItem = {...contextItem, id: '1'};

      service.createContextItem(contextItem).subscribe(result => {
        expect(result).toEqual(createdContextItem);
        done();
      });
      const request = httpMock.expectOne('/api/context');
      expect(request.request.body).toEqual(contextItem);
      expect(request.request.method).toBe('POST');
      request.flush(createdContextItem);
    });


  });

});
