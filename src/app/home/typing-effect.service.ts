import { Injectable } from '@angular/core';
import { Observable, concat, from, interval, of } from 'rxjs';
import { concatMap, delay, ignoreElements, map, repeat, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TypingEffectService {
  type({ word, speed, backward = false }): Observable<string> {
    return interval(speed).pipe(
      map(x => backward ? word.substr(0, word.length - x - 1) : word.substr(0, x + 1)),
      take(word.length)
    );
  }

  typeEffect(word: string): Observable<string> {
    return concat(
      this.type({ word, speed: 70 }), // type
      of('').pipe(delay(1500), ignoreElements()), // pause
      this.type({ word, speed: 30, backward: true }), // delete
      of('').pipe(delay(300), ignoreElements()) // pause
    );
  }

  getTypingObservable(words: string[]): Observable<string> {
    return from(words).pipe(concatMap(word => this.typeEffect(word)), repeat());
  }
}
