class HashMap {
    constructor(initialCapacity = 8) {
        this.length = 0;
        this._hashTable = [];
        this._capacity = initialCapacity;
        this._deleted = 0;
    }
    get(key) {
        const index = this._findSlot(key);
        if (this._hashTable[index] === undefined) {
            throw new Error('Key error.');
        }
        return this._hashTable[index].value;
    }
    //adding the item to the hash map
    set(key, value) {
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        //MAX_LOAD_RATIO --> keeps track of how full the hash map it
        //when it is a certain % full, move to a bigger hash table using the
        //SIZE_RATIO, so we redue the number of collisions
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap.SIZE_RATIO);
        }
        //find the slot where this key should be in
        const index = this._findSlot(key);
        if (!this._hashTable[index]) {
            this.length++;
        }
        this._hashTable[index] = {
            key, 
            value, 
            DELETED: false
        };
    }
    delete(key) {
        //
        const index = this._findSlot(key);
        const slot = this._hashTable[index];
        if (slot === undefined) {
            throw new Error('Key error.');
        }
        //sets the DELETED flag to true
        slot.DELETED = true;
        //decreasing the length
        this.length--;
        //increasng the deleted count
        this._deleted++;
    }
    //helper function
    //finds the correct slot for a given key
    _findSlot(key) {
        const hash = HashMap._hashString(key);
        const start = hash % this._capacity;
        //loops through the array, stopping when it finds the slot with a 
        //matching key or an empty slot
        for (let i = start; i < start + this._capacity; i++) {
            const index = i % this._capacity;
            const slot = this._hashTable[index];
            if (slot === undefined || (slot.key === key && !slot.DELETED)) {
                return index;
            }
        }
    }
    _resize(size) {
        const oldSlots = this._hashTable;
        this._capacity = size;
        //reset the length, it will get rebuilt as you add the items back
        this.length = 0;
        this._hashTable = [];

        for (const slot of oldSlots) {
            if (slot !== undefined) {
                this.set(slot.key, slot.value);
            }
        }
    }
    static _hashString(string) {
        let hash = 5381;
        for (let i = 0; i < string.length; i++) {
            //bitwise left shift with 5 0's
            hash = (hash << 5) + hash + string.charCodeAt(i);
            // converting hash to a 32 bit integer
            hash = hash & hash;
        }
        //making sure hash is unsigned, meaning non-negative number
        return hash >>> 0;
    }
}

module.exports = HashMap;