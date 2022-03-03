## How to Use
### HTML
```HTML
<script src="https://raw.githubusercontent.com/jc3213/metalink4.js/main/metalink4.js"
        integrity="sha256-6oj9bI0kPdhk0XE8OEW9VWwedwSdFxjIirpGaFTAq0A=" crossorigin="anonymous"></script>
```
### TamperMonkey
```javascript
// @require https://raw.githubusercontent.com/jc3213/metalink4.js/main/metalink4.js#sha256-6oj9bI0kPdhk0XE8OEW9VWwedwSdFxjIirpGaFTAq0A=
```
## Syntax
```javascript
const metalink = new Metalink4(input);
```
### `input`
An array of object `[ object0, object1, ... ]`
#### `object`
An object contains keys `{ url, name, size, version, locale, hash, metaurl }`
#### url `*required`
The download address of the file\
Array `[ url0, url1... ]` to generate `<url>https://sam.pl/e.zip</url>`\
Array `[ [ locale0, url0 ], [ locale1, url1 ]... ]` to generate `<url location="en">https://sam.pl/e.zip</url>`
#### name `Optional`
The name of the file `<file name="This.File">`
#### size `Optional`
The size of the file `<size>4279183</size>`
#### version `Optional`
The version of the file `<version>1.0.1</version>`
#### locale `Optional`
The language of the file `<laguage>en</language>`
#### hash `Optional`
The hash of the file\
Array `[ [ type0, hash0 ], [ type1, hash1 ]... ]` to generate `<hash type="sha-256">40a51...1e1d7</hash>`
#### metaurl `Optional`
The metaurl address of the file\
Array `[ [ type0, metaurl0 ], [ type1, metaurl1 ]... ]` to generate `<metaurl type="torrent">https://sam.pl/e.zip.torrent</metaurl>`
## Method
```javascript
metalink.saveAs(name);
```
Save the result into a local file. If **filename** is not defined, default filename is `metalink`
