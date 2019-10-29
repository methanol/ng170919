import { Observable, Subject } from 'rxjs';

export interface IComponentObject {
  component: any;
  resolver: any;
  context: any;
}

export class ModalService {

  private _modalSequence$$: Subject<any> = new Subject();

  public constructor() {
  }

  public open(componentObject: IComponentObject): void {
    this._modalSequence$$.next(componentObject);
  }

  public close(): void {
    this._modalSequence$$.next({});
  }

  public get modalSequence$(): Observable<any> {
    return this._modalSequence$$.asObservable();
  }


}

