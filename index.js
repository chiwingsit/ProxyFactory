const ProxyFactory = (obj, onChange = () => {}, onDelete = () => {}) => {
    const handler = {
        get(target, property) {
            const value = Reflect.get(target, property);
            if (typeof value === "object") {
                return new Proxy(value, handler);
            }
            return value;
        },
        set(target, property, value) {
            const oldVal = Reflect.get(target, property);
            if (!Reflect.has(target, property)) {
                console.log(`SET ${property}`);
            } else {
                console.log(`UPDATE ${property}`);
            }
            onChange(property, oldVal, value);
            return Reflect.set(target, property, value);
        },
        deleteProperty(target, property) {
            console.log(`DELETE ${property}`);
            onDelete(property);
            return Reflect.deleteProperty(target, property);
        }
    };

    return new Proxy(obj, handler);
};

export default ProxyFactory;
