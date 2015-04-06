
# outliers

  Find outliers in a dataset.

## Install

```
npm install outliers
```

## Examples

### Pass an array

```js
outliers([12, 14, 51, 12, 10, 9, 16, 1]) // [1, 51]
```

### Filter out outliers

```js
[12, 14, 51, 12, 10, 9, 16, 1].filter(outliers()); // [12, 14, 12, 10, 9, 16]
```

### Filter out outliers from an array of objects

```js
var arr = [{ n: 12 },{ n: 14 },{ n: 51 },{ n: 12 },{ n: 10 },{ n: 9 },{ n: 16 },{ n: 1 }]
arr.filter(outliers('n')); // [{ n: 12 },{ n: 14 },{ n: 12 },{ n: 10 },{ n: 9 },{ n: 16 }]
```

## Credits

- Based on: http://en.wikipedia.org/wiki/Interquartile_range#Interquartile_range_and_outliers
- Basically the non-OOP version of: https://github.com/pablodenadai/outlier

## License

(The MIT License)

Copyright (c) 2015 Matthew Mueller &lt;mattmuelle@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
