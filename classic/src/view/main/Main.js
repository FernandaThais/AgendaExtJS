/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('AgendaExtJS.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.button.Button',
        'Ext.form.field.Text',

        'AgendaExtJS.view.main.MainController',
        'AgendaExtJS.view.main.MainModel'
    ],

    controller: 'main',
    viewModel: 'main',

    id: 'main-panel',

    title: 'Main',

    defaults: {
        margin: 5
    },

    layout: 'hbox',

    items: [{
        xtype: 'button',
        bind: {
            text: '{textoBotao}'
        }
    }, {
        xtype: 'textfield',
        bind: '{textoBotao}'
    }]
    
});
