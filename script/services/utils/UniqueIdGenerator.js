export class UniqueIdGenerator {
    static getRandomIntegers() {
        let randomIntegers = new Uint32Array(3);
        window.crypto.getRandomValues(randomIntegers);
        return randomIntegers;
    }

    static getRandomString() {
        const randomIntegers = UniqueIdGenerator.getRandomIntegers();
        return Array.from(randomIntegers)
            .map((randomInteger) => randomInteger.toString(36))
            .join("")
            .substring(0, 12)
            .replace(/[^a-zA-Z0-9]/g, "");
    }

    static getTimestampString() {
        const timestampString = performance.now().toString(36);
        const padding = "00000000000000000000";
        return (padding + timestampString).slice(-20).replace(/[^a-zA-Z0-9]/g, "");
    }

    static generateId() {
        const randomString = UniqueIdGenerator.getRandomString();
        const filteredTimestampString = UniqueIdGenerator.getTimestampString();
        return filteredTimestampString + randomString;
    }
}
