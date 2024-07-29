import { TestBed } from '@angular/core/testing';

import { TypingEffectService } from './typing-effect.service';

describe('TypingEffectService', () => {
  let service: TypingEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypingEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
