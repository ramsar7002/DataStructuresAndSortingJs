class HashTable {
    constructor(size = 17) {
      this.size = size;
      this.items = new Array(size);
      this.numOfItems = 0;
    }
  
    genHash(key) {
      let keyStr = key.toString();
      let sum = 0;
  
      for (let i = 0; i < keyStr.length; i++) {
        sum += keyStr.charCodeAt(i);
        return sum % this.size;
      }
    }
  
    add(key, value) {
      let hashKey = this.genHash(key);
      if (this.items[hashKey]) {
        let inserted = false;
        for (let i = 0; i < this.items[hashKey].length; i++) {
          if (this.items[hashKey][i][0] === key) {
            this.items[hashKey][i][1] = value;
            inserted = true;
          }
          if (inserted === false) {
            this.items[hashKey].push([key, value]);
          }
        }
      } else {
        this.items[hashKey] = [[key, value]];
        this.numOfItems++;
  
        if (this.numOfItems * 2 >= this.size) {
          this.size *= 2;
          this.items.length *= 2;
        }
      }
    }
  
    remove(key) {
      let hashKey = this.genHash(key);
      if (!this.items[hashKey]) return;
      if (this.items[hashKey].length === 1) {
        delete this.items[hashKey];
        this.size--;
      } else {
        for (let i = 0; i < this.items[hashKey].length; i++) {
          if (this.items[hashKey][i][0] === key) {
            delete this.items[hashKey][i];
          }
        }
      }
    }
  
    lookUp(key) {
      let hashKey = this.genHash(key);
      if (!this.items[hashKey]) return null;
      for (let i = 0; i < this.items[hashKey].length; i++) {
        if (this.items[hashKey][i][0] === key) {
          return this.items[hashKey][i][1];
        }
      }
      return null;
    }
  }
  
  let table = new HashTable();
  table.add('name', 'Ram Sarfian');
  table.add('age', 26);
  table.add('name', 'Yuval Raviv');
  table.add('addr', 'Her');
  table.add('addfdr', 'Her');
  table.add('cxvfghfg', 'Her');
  
  console.log(table.items);
  // table.remove('addr');
  // console.log(table.items);
  console.log(table.lookUp('addr'));