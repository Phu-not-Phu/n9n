import { TestBed } from '@angular/core/testing';

import { N8nCoreInterceptor } from './n8n-core.interceptor';

describe('N8nCoreInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      N8nCoreInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: N8nCoreInterceptor = TestBed.inject(N8nCoreInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
