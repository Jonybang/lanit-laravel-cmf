angular.module('admin_app.database')
    .factory('DBManageSettingsConfig', ['Settings', 'Contexts', 'ServerData', function(Settings, Contexts, ServerData) {

        this.entityName = 'Settings';

        this.aeGridOptions = {
            caption: 'All settings available in templates.',
            resource: Settings,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'key',
                    modal: 'self',
                    label: 'Setting key',
                    new_placeholder: 'New Setting',
                    required: true
                },
                {
                    name: 'value',
                    label: 'Value',
                    required: true
                },
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'description',
                    label: 'Description'
                },
                {
                    name: 'context_id',
                    label: 'Context',
                    type: 'select',
                    list: 'contexts',
                    resource: Contexts
                }
            ],
            callbacks: {
                onChange: ServerData.reload
            }
        };

        return this;
    }]);