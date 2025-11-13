# va-action
A tiny event emitter library

## usage

```ts
const action = {
  foo: {
    increase: createAction<number>(),
  },
  bar: {
    decrease: createAction<number>(),
  },
};


// foo.ts
const onClick = () => {
  action.foo.increase(1);
};

action.bar.decrease.subscribe((c)=>{
  console.log('data from bar: ', c);
});


// bar.ts
const onClick = () => {
  action.bar.decrease(2);
};

action.foo.increase.subscribe((c)=>{
  console.log('data from foo: ', c);
});

```
## License
MIT

## keywords
action tiny event emitter pubsub
