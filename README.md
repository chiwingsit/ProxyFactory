# ProxyFactory
Sendbird Assignment

Usage example
```
const obj = {
  foo: "foo"
};

const onCreate = (property, oldVal, newVal) => {
  console.log(`property ${property} changed from ${oldVal} to ${newVal}`);
};

const onDelete = (property) => {
  console.log(`property ${property} deleted`);
};

const proxy = new ProxyFactory(obj, onCreate, onDelete);

proxy.foo = "bar";
// UPDATE foo
// property foo changed from foo to bar 

proxy.foobar = "foobar";
// SET foobar
// property foobar changed from undefined to foobar

delete proxy.foo;
// DELETE foo
// property foo deleted
```
