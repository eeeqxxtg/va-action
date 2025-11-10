
export type Action<T> = {
  (v: T): void;
  attach?: (v: T) => void;
  subscribe: (f: (v: T) => void) => () => void;
};

export const subscribe = <T>(action: Action<T>, f: (v: T) => void) => {
  let canceled = false;
  const cancel = () => {
    canceled = true;
  };

  const before = action.attach;
  action.attach = (v: T) => {
    before?.(v);
    if (!canceled) {
      f(v);
    }
  };

  return cancel;
};

export const createAction = <T>() => {
  const a: Action<T> = (v: T) => {
    a.attach?.(v);
  };
  a.attach = undefined;
  a.subscribe = (f: (v: T) => void) => subscribe(a, f);
  return a;
};
