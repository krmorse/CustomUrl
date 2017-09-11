Ext.define('CustomUrlApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    layout: 'fit',
    config: {
        defaultSettings: {
            url: ''
        }
    },
    getSettingsFields: function () {
        return [{
            xtype: 'rallytextfield',
            name: 'url',
            fieldLabel: 'Url',
            allowBlank: false,
            anchor: '100%',
            cls: 'query-field',
            margin: '0 70 0 0',
            plugins: [
                'rallyfieldvalidationui',
                {
                    ptype: 'rallyhelpfield',
                    helpId: 301,
                    helpTextKey: 'More Info',
                },
            ],
            validator: function (value) {
                if (!!value && document.URL.indexOf("https://") === 0 && value.indexOf("http://") === 0) {
                    return 'Url must begin with http:// or https://';
                }
                return true;
            },
            validateOnBlur: false,
            validateOnChange: false,
        }];
    },
    launch: function () {
        this.add({
            xtype: 'component',
            autoEl: {
                tag: 'iframe',
                frameborder: 0,
                src: this.getSetting('url')
            }
        });
    }
});
