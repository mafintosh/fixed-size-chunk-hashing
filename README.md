# fixed-size-chunk-hashing

Hash a stream to fixed size chunks

```
npm install fixed-size-chunk-hashing
```

## Usage

``` js
var hash = require('fixed-size-chunk-hashing')
var fs = require('fs')

fs.createReadStream('some-file').pipe(hash(512 * 1024, function (err, hashes) {
  if (err) throw err

  // hashes is a list of the file hashes
  console.log(hashes)
}))
```

## API

#### `var stream = hash(size, [options], [callback])`

Create a new fixed size chunking hash stream. Size if the byte size of the chunks (the last chunk might be less than this size).
Callback is called with `callback(err, listOfHashes)` if you provide it and the list of hashes is also returned as a stream.

## License

MIT
