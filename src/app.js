export default class ArrayBufferConverter {
    static toString(buffer) {
        return String.fromCharCode(...new Uint16Array(buffer));
    }

    static load(buffer) {
        return JSON.parse(this.toString(buffer));
    }    
}
