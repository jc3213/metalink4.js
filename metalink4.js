class Metalink4 {
    constructor (input) {
        var header = '<?xml version="1.0" encoding="UTF-8"?><metalink xmlns="urn:ietf:params:xml:ns:metalink">';
        var footer = '</metalink>';
        this.binary = [header];
        this.text = header;
        input.map(({name, size, version, locale, hash, url, metaurl}) => {
            var file = name ? '<file name="' + name + '">' : '<file>';
            file += size ? '<size>' + size + '</size>' : '';
            file += version ? '<version>' + version + '</version>' : '';
            file += locale ? '<language>' + locale + '</language>' : '';
            if (hash) {
                hash.forEach(h => {
                    file += '<hash type="' + h[0] + '">' + h[1] + '</hash>';
                });
            }
            url.forEach(u => {
                file += Array.isArray(u) ? '<url location="' + u[0] + '">' + u[1] + '</url>' : '<url>' + u + '</url>';
            });
            if (metaurl) {
                metaurl.forEach(m => {
                    file += '<metaurl metatype="' + m[0] + '">' + m[1] + '</metaurl>';
                });
            }
            var result = file + '</file>';
            this.binary.push(result);
            this.text += result;
        });
        this.binary.push(footer);
        this.text += footer;
        this.blob = new Blob(this.binary, {type: 'application/metalink+xml; charset=utf-8'});
    }
    saveAs (name) {
        var s = document.createElement('a');
        s.href = URL.createObjectURL(this.blob);
        s.download = name + '-' + new Date().toJSON().slice(0, -2).replace(/[T:\.\-]/g, '_') + '.meta4';
        s.click();
        s.remove();
    }
}
