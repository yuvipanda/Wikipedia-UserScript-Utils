(function() {

    function ClientTemplate(basePath) {
        this.basePath = basePath;
    }

    ClientTemplate.prototype.getTemplatePath = function(name) {
        return '//en.wikipedia.org/w/index.php?title=' + this.basePath + '/' + name +'.template&action=raw&smaxage=21600&maxage=86400&ctype=text/x-wiki';
    }

    ClientTemplate.prototype.getTemplate = function(name) {
        var url = this.getTemplatePath(name);
        var d = $.Deferred();
        $.get(url).done(function(data) {
            d.resolve(_.template(data));
        });
        return d;
    }

    window.ClientTemplate = ClientTemplate;
})();
