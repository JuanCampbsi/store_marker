export interface ICordenate{
  id: string;
  name: string;
  description: string;
  latitude: string;
  longitude: string;
}
export interface ICordenateItem{
  store: ICordenate;
  quantity: Number;
}

export interface ICordenateState{
  items: ICordenateItem[];
}
