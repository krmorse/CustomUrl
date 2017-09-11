Ext.define('CustomUrlApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    layout: 'fit',

    URL: 'http://www.google.com',

    launch: function () {
        this.add({
            xtype: 'component',
            autoEl: {
                tag: 'iframe',
                frameborder: 0,
                src: this.URL
            }
        });
    }
});
