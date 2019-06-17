// 下面是完整代码实现
module.exports.Event = (() => {
    let Event;
    let _default = 'default';

    Event = (() => {
        const namespaceCache = {};
        const each = (ary, fn) => {
            let ret;
            for (let i = 0, l = ary.length; i < l; i++) {
                let n = ary[i];
                ret = fn.call(n, i, n);
            }
            return ret;
        };

        const _listen = (key, fn, cache) => {
            if (!cache[key]) {
                cache[key] = [];
            }

            cache[key].push(fn);
        };

        const _remove = (key, cache, fn) => {
            if (cache[key]) {
                if (fn) {
                    for (let i = 0, _fn, len = cache[key].length; i < len; i++) {
                        _fn = cache[key][i];
                        if (_fn === fn) {
                            cache[key].splice(i, 1);
                            break;
                        }
                    }
                } else {
                    cache[key] = [];
                }
            }
        };

        const _trigger = (cache, key, ...args) => {
            const stack = cache[key];
            const _self = this;
            if (!stack || stack.length === 0) {
                return;
            }

            return each(stack, function() {
                return this.apply(_self, args);
            });
        };

        const _create = (namespace = _default) => {
            const cache = {};
            let offlineStack = [];
            const ret = {
                listen(key, fn, last) {
                    _listen(key, fn, cache);
                    if (offlineStack === null) {
                        return;
                    }
                    if (last === 'last') {
                        offlineStack.length && offlineStack.pop()();
                    } else {
                        each(offlineStack, function(...args) {
                            console.log(this === args[1]); // true
                            this();
                        });
                    }
                    offlineStack = null;
                },
                one(key, fn, last) {
                    _remove(key, cache);
                    this.listen(key, fn, last);
                },
                remove(key, fn) {
                    _remove(key, cache, fn);
                },
                trigger(...args) {
                    args.unshift(cache);
                    let fn;
                    const _self = this;
                    fn = function() {
                        return _trigger.apply(_self, args);
                    };
                    if (offlineStack) {
                        return offlineStack.push(fn);
                    }
                    return fn();
                }
            };
            return namespace
          ? namespaceCache[namespace]
            ? namespaceCache[namespace]
            : (namespaceCache[namespace] = ret)
          : ret;
        };
        return {
            create: _create,
            one(key, fn, last) {
                const event = this.create();
                event.one(key, fn, last);
            },
            remove(key, fn) {
                const event = this.create();
                event.remove(key, fn);
            },
            listen(key, fn, last) {
                var event = this.create();
                event.listen(key, fn, last);
            },
            trigger(...args) {
                const event = this.create();
                event.trigger.apply(this, args);
            }
        };
    })();

    return Event;
})();
