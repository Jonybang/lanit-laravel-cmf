// Code goes here
angular
  .module('a-edit', ['ui.bootstrap', 'angularMoment', 'ui.select', 'ngSanitize', 'wiz.markdown'])
  
  .run(['amMoment', 'uiSelectConfig', '$templateCache', function(amMoment, uiSelectConfig, $templateCache) {
    amMoment.changeLocale('ru');
    uiSelectConfig.theme = 'bootstrap';
    
    $templateCache.put('a-edit-image-popover.html', '<img class="img-responsive" ng-src="{{::image}}" alt="">');
    
    $templateCache.put('a-edit-date-input.html', '\
            <div class="date-input">\
            <span ng-if="!isEdit">{{ngModelStr}}</span>\
            \
            <div ng-if="isEdit" class="input-group">\
                <input\
                        type="text"\
                        class="form-control input-sm"\
                        \
                        name="{{$parent.name}}"\
                        ng-model="$parent.ngModel"\
                        placeholder="{{$parent.placeholder}}"\
                        \
                        uib-datepicker-popup="dd.MM.yyyy"\
                        datepicker-options="$parent.options"\
                        ng-init="$parent.ngModel = $parent.ngModel"\
                        is-open="isOpen"\
                        \
                        ng-enter="$parent.save()"\
                        ng-change="$parent.change()"/>\
                \
                <span class="input-group-btn">\
                  <button tabindex="-1" type="button" class="btn btn-sm btn-default" ng-click="isOpen=true"><i class="glyphicon glyphicon-calendar"></i></button>\
                </span>\
            </div>\
        \
        </div>\
    ');
    
    $templateCache.put('a-edit-popover-image.html', '\
            <a target="_blank" href="{{::image}}" uib-popover-template="imagePopoverPath" popover-placement="left" popover-trigger="mouseenter">\
                {{:: text || image}}\
            </a>\
    ');
    
  }]);

angular
    .module('a-edit')
    .directive('aGrid', ['$timeout', '$compile', '$filter', 'AEditHelpers', 'AEditConfig', function($timeout, $compile, $filter, AEditHelpers, AEditConfig) {
    return {
        restrict: 'E',
        require: 'ngModel',
        scope: {
            //require
            ngModel: '=',
            //sub
            options: '=',
            //callbacks
            ngChange: '&',
            onSave: '&'
        },
        link: function (scope, element, attrs, ngModel) {
            var defaultOptions = {
                search: true,
                create: true,
                edit: true,
                orderBy: '-id',
                defaultAttrs: {},
                modalIndex: 0,
                searchDebounce: 200,
                lists: {}
            };
            scope.options = angular.extend(defaultOptions, scope.options);
            AEditConfig.currentOptions = scope.options;

            scope.new_item = {};

            scope.status = "";

            function getFieldOptionsByName(name){
                var resultObject;
                scope.options.fields.some(function(obj){
                    var result = obj.name == name;
                    if(result)
                        resultObject = obj;
                    return result;
                });

                return resultObject;
            }

            scope.save = function(item){
                if(!item)
                    return;

                item.errors || (item.errors = {});

                scope.options.fields.forEach(function(field){
                    //if field empty and required - add to errors, else delete from errors
                    if(field.required && !item[field.name])
                        item.errors[field.name] = true;
                    else if(item.errors[field.name])
                        delete item.errors[field.name];

                    //if password not changed and not new object
                    if(field.type == 'password' && item.id)
                        delete item.errors[field.name];

                    //if password not changed delete field from request data
                    if(field.type == 'password' && !item[field.name])
                        delete item[field.name];
                });

                if(!AEditHelpers.isEmptyObject(item.errors))
                    return;
                    
                console.log('save item', item);

                var upload_item = angular.copy(item);

                var uploaders = Object.keys(upload_item).filter(function(k){ return ~k.indexOf("__uploader") });
                if(uploaders.length){

                    uploaders.forEach(function(key){

                        function sendAll(){
                            var prop_name = key.replace('__uploader','');
                            if(!upload_item[prop_name]){
                                sendItem();
                                return;
                            }

                            upload_item[prop_name.substring(0, prop_name.length - 1) + '_ids'] = upload_item[prop_name].map(function(obj){
                                return obj.id;
                            });
                            delete upload_item[key];
                            delete upload_item[prop_name];
                            sendItem();
                        }

                        if(!upload_item[key].queue.length){
                            sendAll();
                        } else {
                            upload_item[key].onSuccessItem = function(){
                                console.log('onSuccessItem');
                                if(!upload_item[key].queue.length){
                                    sendAll();
                                }
                            };
                        }
                    });
                } else {
                    sendItem();
                }

                function sendItem(){

                    if('id' in upload_item && upload_item.id){
                        var query = AEditHelpers.getResourceQuery(upload_item, 'update');
                        
                        query.then(function(updated_item){
                            console.log(updated_item);
                            angular.extend(item, updated_item);
                            item.is_edit = false;

                            scope.search();
                        });
                    } else {
                        angular.forEach(scope.options.defaultAttrs, function(value, attr){
                            upload_item[attr] = value;
                        });

                        var query = AEditHelpers.getResourceQuery(new scope.options.model(upload_item), 'create');
                        query.then(function(created_item){
                            created_item.is_new = true;

                            scope.ngModel.unshift(created_item);
                            delete scope.new_item;

                            scope.search();
                        });
                    }
                    item.is_edit = false;
                    scope.status = item.name + " saved!";

                    $timeout(function(){
                        scope.status = "";
                    }, 1000);

                    if(scope.onSave)
                        $timeout(scope.onSave);
                }
            };

            scope.deleteConfirm = function(item){
                if(confirm('Do you want delete object "' + item.name + '"?')){
                    var query = AEditHelpers.getResourceQuery(item, 'delete');
                    
                    query.then(function(){
                        var index = scope.ngModel.indexOf(item);
                        scope.ngModel.splice(index, 1);
                    });
                }
            };

            scope.search = function(){
                if(!scope.searchQuery)
                    scope.filtredList = scope.ngModel;
                else
                    scope.filtredList = $filter('filter')(scope.ngModel, scope.searchQuery);

                if(scope.options.orderBy)
                    scope.filtredList = $filter('orderBy')(scope.filtredList, scope.options.orderBy);
            };

            scope.clearSearch = function(){
                scope.searchQuery = '';
                scope.filtredList = scope.ngModel;
            };

            scope.$watchCollection('ngModel', function(list){
                scope.search();
                scope.options.lists['self'] = list;
            });

            var tplSearch =
                '<div class="input-group">' +
                    '<input type="text" class="form-control" ng-model="searchQuery" placeholder="Search" ng-change="search()" ng-model-options="{ debounce: ' + scope.options.searchDebounce + ' }"/>' +
                    '<span class="input-group-btn">' +
                        '<button class="btn btn-default" ng-click="clearSearch()"><i class="glyphicon glyphicon-remove"></i></button>' +
                    '</span>' +
                '</div>';

            var tplHead =
                '<table class="table table-hover bootstrap-table">' +
                '<caption>{{options.caption}}</caption>' +
                '<thead>' +
                '<tr>';

            var tplBodyNewItem =
                '<tbody>' +
                '<tr>';

            var tplBodyItem =
                '<tbody>' +
                '<tr ng-repeat="item in filtredList track by item.id">';


            scope.options.fields.forEach(function(field, index){
                if(field.model && field.list){
                    if(!scope.options.lists[field.list]){
                        scope.options.lists[field.list] = [];

                        AEditHelpers.getResourceQuery(field.model, 'get').then(function(list){
                            scope.options.lists[field.list] = list;
                        });
                    }
                }

                if(field.table_hide)
                    return;

                tplHead += '<th>' + field.label + '</th>';

                if(field.readonly || !scope.options.edit){
                    tplBodyNewItem += '<th scope="row"></th>';
                    tplBodyItem += '<th scope="row">{{item.' + field.name +'}}</th>';
                } else {
                    //for new item row
                    tplBodyNewItem += '<td>';
                    //for regular item row
                    tplBodyItem += '<td ng-dblclick="item.is_edit = !item.is_edit">';

                    function getFieldDirective(is_new) {
                        var item_name = (is_new ? 'new_' : '' ) + 'item';
                        var field_name = field.name != 'self' ? field.name : '';

                        var list_variable;

                        if(field.list && field.list == 'self')
                            list_variable = 'ngModel';
                        else if(field.list)
                            list_variable = 'options.lists.' + field.list;

                        return AEditHelpers.generateDirectiveByConfig(field, {
                            item_name: item_name,
                            field_name: field_name,
                            always_edit: is_new,
                            is_new: is_new,
                            list_variable: list_variable
                        });
                    }

                    tplBodyNewItem += getFieldDirective(true) + '</td>';
                    tplBodyItem += getFieldDirective(false) + '</td>';
                }
            });

            if(scope.options.edit){
                tplHead +=
                    '<th class="controls"></th>';

                tplBodyNewItem +=
                    '<td class="controls">' +
                        '<icon-button type="primary" glyphicon="floppy-disk" ng-click="save(new_item)" size="sm"></icon-button>' +
                    '</td>';

                tplBodyItem +=
                    '<td class="controls">' +
                        '<icon-button ng-show="item.is_edit" type="primary" glyphicon="floppy-disk" ng-click="save(item)"></icon-button>' +
                        '<icon-button ng-hide="item.is_edit" type="warning" glyphicon="pencil" ng-click="item.is_edit = true"></icon-button>' +
                        '<icon-button type="danger" glyphicon="remove" ng-click="deleteConfirm(item)"></icon-button>' +
                    '</td>';
            }

            tplHead +='</tr></thead>';

            tplBodyNewItem +='</tr>';

            tplBodyItem +='</tr></tbody></table>';

            var tplHtml = '';

            if(scope.options.search)
                tplHtml += tplSearch;

            tplHtml += tplHead;

            if(scope.options.create)
                tplHtml += tplBodyNewItem;

            tplHtml += tplBodyItem;

            var template = angular.element(tplHtml);

            var linkFn = $compile(template)(scope);
            element.append(linkFn);
        }
    };
}]);

angular
    .module('a-edit')

    .directive('iconButton', ['$timeout', function($timeout) {
        return {
            restrict: 'E',
            template: '<button type="button" class="btn btn-{{type}} btn-{{size || \'xs\'}}" ng-click="click()">' +
            '<span class="glyphicon glyphicon-{{glyphicon}}" aria-hidden="true"></span>' +
            '</button>',
            scope: {
                type: '@',
                size: '@',
                glyphicon: '@'
            },
            link: function (scope, element) {

            }
        };
    }])

    .directive('ngEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if(event.which === 13) {
                    scope.$apply(function(){
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    })

    .directive('popoverImage', ['$timeout', '$filter', function($timeout, $filter) {
        return {
            restrict: 'E',
            templateUrl: 'a-edit-popover-image.html',
            scope: {
                //require
                ngModel: '=',
                text: '=?'
            },
            link: function (scope, element) {
                scope.text = scope.text || scope.ngModel.name;
                scope.image = scope.ngModel.image_src || scope.ngModel.file || scope.ngModel;

                scope.imagePopoverPath = 'a-edit-image-popover.html';
            }
        };
    }]);

angular
    .module('a-edit')

    .directive('textInput', ['$timeout', '$compile', function($timeout, $compile) {
        function getTemplateByType(type, options){
            var text = '{{$parent.ngModel}}';
            var inputTagBegin = '<input type="text"';
            var inputTagEnd = '';

            if(options && options.modal_link)
                text = '<a a-model-modal="modalModel" on-save="save()" href>' + text + '</a>';
            else if(type == 'textarea'){
                text = '<pre ng-if="$parent.ngModel">{{$parent.ngModel}}</pre>';

                inputTagBegin = '<textarea';
                inputTagEnd = '</textarea>';
            } else if(type == 'password'){
                text = '<small>[password hidden]</small>';

                inputTagBegin = '' +
                    '<a href ng-click="changePassword = true" ng-show="!isNew && !changePassword">Change password</a>' +
                    '<div ng-show="changePassword || isNew"><input type="password"';
                inputTagEnd = '</div>';
            }


            return '' +
            '<div ng-if="!isEdit">' +
                text +
            '</div>' +
            '<div ng-if="isEdit" ng-class="input_class">' +
                inputTagBegin +
                ' class="form-control input-sm" placeholder="{{$parent.placeholder}}"' +
                ' ng-model="$parent.ngModel" ng-enter="$parent.save()"' +
                ' ng-model-options="$parent.ngModelOptions || {}"' +
                ' ng-style="{ \'width\' : $parent.width + \'px\'}">' +
                inputTagEnd +
            '</div>';
        }

        var typeTemplates = {
            'text': $compile(getTemplateByType('text')),
            'password': $compile(getTemplateByType('password')),
            'text_modal_link': $compile(getTemplateByType('text', {modal_link: true})),
            'textarea': $compile(getTemplateByType('textarea'))
        };

        return {
            restrict: 'E',
            scope: {
                //require
                ngModel: '=',
                ngModelOptions: '=?',
                ngModelStr: '=?',
                isNew: '=?',
                isEdit: '=?',
                modalModel: '=?',
                hasError: '=?',
                //callbacks
                ngChange: '&',
                onSave: '&',
                //sub
                placeholder: '@',
                name: '@',
                width: '@',
                required: '@',
                type: '@' //text or textarea
            },
            link: function (scope, element, attrs) {
                scope.type = scope.type || 'text';
                if(attrs.modalModel && scope.type == 'text')
                    scope.type = "text_modal_link";

                var template = typeTemplates[scope.type],
                    templateElement;

                template(scope, function (clonedElement, scope) {
                    templateElement = clonedElement;
                    element.append(templateElement);
                });

                template = null;

                element.on("$destroy", function () {
                    templateElement.remove();
                    templateElement = null;
                });

                scope.$watch('hasError', function(hasError){
                    scope.input_class = hasError ? "has-error" : '';
                });

                scope.save = function(){
                    if(scope.required && !scope.ngModel){
                        scope.input_class = "has-error";
                        return;
                    }

                    scope.input_class = '';
                    if(scope.onSave)
                        $timeout(scope.onSave);
                }
            }
        };
    }])

    .directive('dateInput', ['$timeout', '$filter', function($timeout, $filter) {
        return {
            restrict: 'E',
            templateUrl: 'a-edit-date-input.html',
            scope: {
                //require
                ngModel: '=',
                ngModelStr: '=?',
                ngModelSubStr: '=?',
                isEdit: '=',
                //callbacks
                ngChange: '&',
                onSave: '&',
                //sub
                placeholder: '@',
                name: '@'
            },
            link: function (scope, element) {

                scope.getDayClass = function(obj) {
                    if (obj.mode === 'day') {
                        var day = new Date(obj.date).getDay();
                        if (day == 0 || day == 6)
                            return 'day-off';
                    }
                };

                scope.options = {
                    startingDay: 1,
                    customClass: scope.getDayClass,
                    todayText: '',
                    currentText:'',
                    clearText: '',
                    closeText: 'РЎРѕС…СЂР°РЅРёС‚СЊ',
                    appendToBody: false
                };

                scope.save = function(){
                    if(scope.onSave)
                        $timeout(scope.onSave);
                };

                scope.change = function(){
                    setStr();

                    if(scope.ngChange)
                        $timeout(scope.ngChange);
                };
                function setStr(){
                    if(scope.ngModel){
                        scope.ngModelStr = $filter('amDateFormat')(scope.ngModel, 'D MMM. YYYY');
                        scope.ngModelSubStr = $filter('amDateFormat')(scope.ngModel, 'DD.MM.YYYY');
                    }
                }

                scope.$watch('ngModel', setStr);
            }
        };
    }])

    .directive('selectInput', ['$timeout', '$compile', '$templateCache', 'AEditHelpers', function($timeout, $compile, $templateCache, AEditHelpers) {
        function getTemplateByType(type, options){
            options = options || {};

            var uiSelect = {
                tags: '',
                match: 'selectedName',
                subClasses: ''
            };
            if(type == 'multiselect'){
                uiSelect.tags = 'multiple close-on-select="false" ';
                uiSelect.match = '$item.name || $item.title';
            }
            if(options.adder){
                uiSelect.subClasses = 'btn-group select-adder';
            }

            var template = '' +
                '<div class="select-input-container ' + uiSelect.subClasses + ' {{input_class}}">' +
                    '<span ng-if="!isEdit">{{selectedName}}</span>' +
                    '<input type="hidden" name="{{name}}" ng-bind="ngModel" class="form-control" required />' +

                    '<ui-select ' + uiSelect.tags + ' ng-model="options.value" ng-if="isEdit" ng-click="changer()" class="input-small">' +
                        '<ui-select-match placeholder="">' +
                            '{{' + uiSelect.match + '}}' +
                        '</ui-select-match>' +

                        '<ui-select-choices repeat="item.id as item in $parent.list | filter: $select.search track by $index">' +
                            '<div ng-bind-html="item.name || item.title | highlight: $select.search"></div>' +
                        '</ui-select-choices>' +
                    '</ui-select>';

            if(options.adder){
                template += '' +
                    '<button type="button" class="btn btn-success" ng-click="popover.is_open = true"' +
                        ' uib-popover-template="popover.template_name"' +
                        ' uib-popover-title="Add object"' +
                        ' popover-placement="top"' +
                        ' popover-append-to-body="true"' +
                        ' popover-is-open="popover.is_open"' +
                        ' popover-trigger="none">' +
                            '<span class="glyphicon glyphicon-plus"></span>' +
                    '</button>';
            }

            template += '' +
                '</div>';
            return template;
        }

        var typeTemplates = {
            'select': $compile(getTemplateByType('')),
            'select-adder': $compile(getTemplateByType('', {adder: true})),
            'multiselect': $compile(getTemplateByType('multiselect')),
            'multiselect-adder': $compile(getTemplateByType('multiselect', {adder: true}))
        };

        return {
            restrict: 'E',
            require: 'ngModel',
            scope: {
                //require
                list: '=?',
                ngModel: '=',
                ngModelStr: '=?',
                isEdit: '=?',
                hasError: '=?',

                ngResource: '=?',
                ngResourceFields: '=?',

                refreshListOn: '=?',

                //callbacks
                ngChange: '&',
                onSave: '&',
                //sub
                adder: '=?',
                placeholder: '@',
                name: '@',
                type: '@' //select or multiselect
            },
            link: function (scope, element, attrs, ngModel) {
                scope.options = {
                    value: scope.ngModel
                };

                scope.type = scope.type || 'select';
                if(scope.adder)
                    scope.type += '-adder';

                var template = typeTemplates[scope.type],
                    templateElement;

                template(scope, function (clonedElement, scope) {
                    templateElement = clonedElement;
                    element.append(templateElement);
                });

                template = null;

                element.on("$destroy", function () {
                    templateElement.remove();
                    templateElement = null;
                });

                scope.$watch('hasError', function(hasError){
                    scope.input_class = hasError ? "has-error" : '';
                });

                scope.changer = function() {
                    ngModel.$setViewValue(scope.options.value)
                };

                scope.$watch('ngModel', function(newVal){

                    if(scope.options.value == newVal)
                        return;

                    scope.options.value = newVal;

                    scope.setSelectedName(newVal);
                });

                //TODO: optimize
                scope.$watch(function() {
                    return ngModel.$viewValue;
                }, function(newVal) {
                    scope.ngModel = newVal;
                    scope.setSelectedName(newVal);
                });

                scope.$watch('list', function(){
                    scope.setSelectedName(scope.ngModel);
                });

                function getListByResource(){
                    if(!scope.ngResource)
                        return;

                    AEditHelpers.getResourceQuery(scope.ngResource, 'get').then(function(list){
                        scope.list = list;
                    });
                }

                scope.$watch('ngResource', getListByResource);
                scope.$watch('refreshListOn', getListByResource);

                scope.setSelectedName = function (newVal){
                    if(Array.isArray(newVal)){
                        var names = [];
                        newVal.forEach(function(val){
                            names.push(AEditHelpers.getNameById(scope.list, val));
                        });
                        scope.selectedName = names.join(', ');
                    } else {
                        scope.selectedName = AEditHelpers.getNameById(scope.list, newVal);
                    }

                    scope.ngModelStr = scope.selectedName;
                };

                scope.save = function(){
                    if(scope.onSave)
                        $timeout(scope.onSave);
                };

                if(scope.adder){
                    var popoverTemplate = '' +
                        '<div ng-click="popoverContentClick($event)">';

                    scope.ngResourceFields.forEach(function(field){
                        popoverTemplate += '' +
                            '<div class="form-group col-md-12 row">' +
                                '<div>' +
                                    '<label>' + field.label + '</label>' +
                                '</div>' +
                                '<div>' +
                                    AEditHelpers.generateDirectiveByConfig(field, {
                                        item_name: 'new_object',
                                        lists_container: 'lists',
                                        always_edit: true,
                                        is_new: true
                                        //already_modal: true
                                    }) +
                                '</div>' +
                            '</div>';

                        if(field.model){
                            scope[field.name + '_model'] = field.model;
                        }
                    });

                    popoverTemplate += '' +
                            '<div class="form-group col-md-12 row">' +
                                '<button type="submit" class="btn btn-primary" ng-click="$parent.saveToList(new_object);">Save</button>' +
                            '</div>' +
                        '</div>';

                    scope.popover = {
                        is_open: false,
                        template_name: attrs.ngModel + '-' + attrs.ngResource + '.html'
                    };
                    $templateCache.put(scope.popover.template_name, popoverTemplate);
                }

                scope.saveToList = function(new_object){
                    scope.popover.is_open = false;
                    AEditHelpers.getResourceQuery(new scope.ngResource(new_object), 'create').then(function(object){
                        scope.list.unshift(object);

                        if(angular.isArray(scope.ngModel))
                            scope.ngModel.push(object.id);
                        else
                            scope.ngModel = object.id;
                    });
                }
            }
        };
    }])

    .directive('fileUpload', ['$timeout', '$compile', 'FileUploader', function($timeout, $compile, FileUploader) {

        function getTemplateByType(type){
            var result = '';
            if(type == 'multifile'){
                result +='<ul class="list-unstyled">' +
                            '<li ng-repeat="item in ngModel">';
            }

            result += '<popover-image ng-model="' + (type == 'multifile' ? 'item' : 'ngModel') + '.file" text="' + (type == 'multifile' ? 'item' : 'ngModel') + '.name"></popover-image>';

            if(type == 'multifile'){
                result +=   '</li>' +
                        '</ul>';
            }

            result +=   '<ul ng-if="isEdit" class="list-unstyled">' +
                            '<li ng-repeat="item in uploader.queue">' +
                                '<popover-image ng-model="item.file" text="item.file.name"></popover-image>' +
                                '<a href ng-click="item.remove()"><span class="glyphicon glyphicon-remove"></span></a>' +
                            '</li>' +
                        '</ul>' +
                        '<span ng-if="isEdit && uploader" class="btn btn-sm btn-default btn-file">' +
                            'Р—Р°РіСЂСѓР·РёС‚СЊ' +
                            '<input type="file" nv-file-select uploader="uploader" ' + (type == 'multifile' ? 'multiple': '') + ' />' +
                        '</span>';

            return result;
        }

        var typeTemplates = {
            'file': $compile(getTemplateByType('file')),
            'multifile': $compile(getTemplateByType('multifile'))
        };

        return {
            restrict: 'E',
            require: 'ngModel',
            scope: {
                ngModel: '=',
                isEdit: '=?',
                uploader: '=',
                //callbacks
                ngChange: '&',
                onSave: '&',
                //sub
                inputName: '@',
                url: '@',
                type: '@'
            },
            link: function (scope, element, attrs, ngModel) {

                var template = typeTemplates[scope.type || 'file'],
                    templateElement;

                template(scope, function (clonedElement, scope) {
                    templateElement = clonedElement;
                    element.append(templateElement);
                });

                template = null;

                element.on("$destroy", function () {
                    templateElement.remove();
                    templateElement = null;
                });

                function initUploader(){
                    scope.uploader = new FileUploader();
                    scope.uploader.url = scope.url;
                    scope.uploader.alias = scope.inputName;
                    scope.uploader.autoUpload = true;
                    scope.uploader.removeAfterUpload = true;

                    scope.uploader.onAfterAddingFile = function(item){
                        setImageSrc(item);
                    };
                    scope.uploader.onSuccessItem = function(item, response){
                        if(!scope.ngModel)
                            scope.ngModel = [];

                        scope.ngModel.push(response);
                        console.log(scope.ngModel);
                    };
                }

                if(scope.isEdit)
                    initUploader();

                function setImageSrc (item){
                    var reader = new FileReader();

                    reader.onload = (function(theFile) {
                        return function(e) {
                            item.image_src = e.target.result;
                            scope.$apply();
                        };
                    })(item._file);

                    reader.readAsDataURL(item._file);
                }

                scope.save = function(){
                    if(scope.onSave)
                        $timeout(scope.onSave);
                };

                scope.$watch('ngModel', function(newVal){
                    if(!newVal && scope.isEdit)
                        initUploader();
                });
                scope.$watch('isEdit', function(newVal){
                    if(newVal)
                        initUploader();
                })
            }
        };
    }]);

angular
    .module('a-edit')

    .directive('aModelModal', ['$timeout', '$log', '$cacheFactory', 'AEditHelpers', 'AEditConfig', '$uibModal', function($timeout, $log, $cacheFactory, AEditHelpers, AEditConfig, $uibModal) {
        var cache = $cacheFactory('aModal.Templates');

        return {
            restrict: 'A',
            scope: {
                //require
                aModelModal: '=',
                isEdit: '=?',
                options: '=?',
                //callbacks
                onSave: '&'
            },
            link: function (scope, element, attrs) {

                var model_name = attrs.aModelModal;
                scope.options = scope.options || AEditConfig.currentOptions;

                element.on("click", function () {
                    var template = cache.get(model_name) || '';
                    if(!template){
                        template +=
                            '<div class="modal-header">' +
                                '<button ng-click="cancel()" class="close pull-right"><span>&times;</span></button>' +
                                '<h3 class="modal-title">Awesome modal!</h3>' +
                            '</div>' +
                            '<div class="modal-body">' +
                                '<button type="button" class="btn btn-warning btn-sm pull-right" ng-click="object.is_edit = !object.is_edit">' +
                                    '<span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>' +
                                '</button>' +
                                '<dl class="dl-horizontal">';
                        
                        scope.options.fields.forEach(function(field){
                            template += '<dt>' + field.label + '</dt>';
                            template += '<dd>' + AEditHelpers.generateDirectiveByConfig(field, {
                                item_name: 'object',
                                lists_container: 'lists',
                                already_modal: true
                            }) + '</dd>';
                        });
                        
                        template +=
                                '</dl>' +
                            '</div>' +
                            '<div class="modal-footer">' +
                                '<button class="btn btn-primary" type="button" ng-click="ok()">OK</button>' +
                            '</div>';
                            
                        cache.put(model_name, template);
                    }

                    var modalInstance = $uibModal.open({
                        animation: true,
                        template: template,
                        resolve: {
                            data: function () {
                                return {
                                    object: angular.copy(scope.aModelModal),
                                    lists: scope.options.lists,
                                    isEdit: scope.isEdit
                                };
                            }
                        },
                        controller: ['$scope', '$uibModalInstance', 'data', function($scope, $uibModalInstance, data) {
                            angular.extend($scope, data);

                            AEditHelpers.getResourceQuery($scope.object, 'show').then(function(object){
                                angular.extend($scope.object, object);
                                $scope.object.is_edit = data.isEdit;
                                console.log('modal controller', $scope.object);
                            });
                            
                            $scope.ok = function () {
                                $scope.object.is_edit = false;
                                $uibModalInstance.close($scope.object);
                            };
                            $scope.cancel = function () {
                                $uibModalInstance.dismiss('cancel');
                            };
                        }],
                        size: 'lg'
                    });

                    modalInstance.result.then(function (object) {
                        angular.extend(scope.aModelModal, object);
                        
                        if(scope.onSave)
                            $timeout(scope.onSave);
                    }, function () {
                        $log.info('Modal dismissed at: ' + new Date());
                    });
                });

                scope.save = function(){
                    if(scope.onSave)
                        $timeout(scope.onSave);
                }
            }
        };
    }]);

/**
 * Created by jonybang on 04.07.15.
 */
angular.module('a-edit')
    .factory('AEditConfig', [function() {
       this.templates_path = 'templates/';
       
       return this;
    }]);

/**
 * Created by jonybang on 04.07.15.
 */
angular.module('a-edit')
    .factory('AEditHelpers', [function() {
        var service = {
            //config:
            //  html_attributes
            //  lists_container
            //  list_variable
            //  item_name
            //  field_name
            //  always_edit
            generateDirectiveByConfig: function(field, config){
                var output = '';
                var directive = '';

                switch(field.type){
                    case 'select':
                    case 'multiselect':
                        directive = 'select-input';
                        break;
                    case 'date':
                        directive = 'date-input';
                        break;
                    case 'file':
                    case 'multifile':
                        directive = 'file-upload';
                        break;
                    default:
                        directive = 'text-input';
                        break;
                }

                output += '<' + directive + ' ';

                output += 'type="' + (field.type || '') + '" ' +
                    'input-name="' + (field.input_name || '') + '" ';

                if(field.width)
                    output += 'width="' + field.width + '" ';

                if(field.required)
                    output += 'required="true" ';

                if(field.url)
                    output += 'url="' + field.url + '" ';

                if(field.model)
                    output += 'ng-resource="' + field.name + '_model" ';

                if(config.list_variable)
                    output += 'list="' + config.list_variable + '" ';
                else if(config.lists_container)
                    output += 'list="' + config.lists_container + '.' + field.list + '" ';

                var item_name = angular.isUndefined(config.item_name) ? 'item' : config.item_name;
                var field_name = angular.isUndefined(config.field_name) ? field.name : config.field_name;
                var item_field = item_name + (field.name != 'self' ? '.' : '') + field_name;

                var is_edit;
                if(field.readonly)
                    is_edit = 'false';
                else if(config.always_edit)
                    is_edit = 'true';
                else
                    is_edit = item_name + '.is_edit';
                    
                output += 'ng-model="' + item_field + '" ' +
                    'on-save="save(' + item_name + ')" ' +
                    'has-error="' + item_name + '.errors.' + field_name + '" ' +
                    'ng-model-str="' + item_name + '.' +  field_name + '_str" ' +
                    'ng-model-sub-str="' + item_name + '.' +  field_name + '_sub_str" ' +
                    'is-edit="' + is_edit + '" '+
                    'is-new="' + (config.is_new ? 'true': 'false') + '" '+
                    'placeholder="' + ((config.always_edit ? field.new_placeholder : field.placeholder) || '') + '" ';

                if(field.type == 'file' || field.type == 'multifile')
                    output += 'uploader="' + item_name + '.' + field_name + '__uploader" ';

                if(field.modal && !config.already_modal && field.modal == 'self')
                    output += 'modal-model="' + item_name + '" ';

                output += '></' + directive + '>';

                return output;
            },
            getResourceQuery: function(obj, action){
                
                var possibleFunctions;
                switch(action){
                    case 'get':
                        possibleFunctions = ['query', 'get'];
                        break;
                    case 'show':
                        possibleFunctions = ['$get'];
                        break;
                    case 'create':
                        possibleFunctions = ['$save', 'create'];
                        break;
                    case 'update':
                        possibleFunctions = ['$update', 'update'];
                        break;
                    case 'delete':
                        possibleFunctions = ['$delete', 'delete'];
                        break;
                }
                
                var query;
                possibleFunctions.some(function(functionName){
                    if(obj[functionName])
                        query = obj[functionName]();
                    
                    return obj[functionName];
                });
                
                if(!query){
                    console.error('Undefined model resource! Override getResourceQuery function in AEditHelpers service for define custom resource function.')
                }
                return query.$promise || query;
            },
            isEmptyObject: function(obj) {
                for(var prop in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                        return false;
                    }
                }
                return true;
            },
            getNameById: function (list, val){
                var resultName = '';

                if(!list || !list.length)
                    return resultName;

                list.some(function(obj){
                    var result = obj.id == val;
                    if(result)
                        resultName = obj.name || obj.title;
                    return result;
                });
                return resultName;
            }
        };

        return service;
    }]);

angular
    .module('app', ['ngResource', 'ui.bootstrap', 'a-edit', 'ui.router', 'ui.router.tabs', 'wiz.markdown', 'dndLists'])
    .config(['$urlRouterProvider', '$stateProvider', '$locationProvider', '$httpProvider', 'AppPaths',
        function($urlRouterProvider, $stateProvider, $locationProvider, $httpProvider, AppPaths) {

            $stateProvider
                .state('app', {
                    url: '/admin',
                    controller: 'AppController as app',
                    templateUrl: AppPaths.app_tpls + 'index.html',
                    abstract: true
                })
                .state('app.page', {
                    url: '/page/:pageId',
                    controller: 'DashboardController',
                    templateUrl: AppPaths.dashboard_tpls + 'index.html'
                })
                .state('app.dashboard', {
                    url: '',
                    controller: 'DashboardController',
                    templateUrl: AppPaths.dashboard_tpls + 'index.html'
                })
                .state('app.pages', {
                    url: '/pages',
                    controller: 'PagesController',
                    templateUrl: AppPaths.pages_tpls + 'index.html'
                })
                .state('app.dictionary', {
                    url: '/dictionary',
                    controller: 'DictionaryController',
                    templateUrl: AppPaths.dictionary_tpls + 'index.html'
                })
                .state('app.settings', {
                    url: '/settings',
                    controller: 'SettingsController',
                    templateUrl: AppPaths.settings_tpls + 'index.html'
                })
                .state('app.logs', {
                    url: '/logs',
                    controller: 'LogsController',
                    templateUrl: AppPaths.logs_tpls + 'index.html'
                })
                .state('app.tags', {
                    url: '/tags',
                    controller: 'TagsController',
                    templateUrl: AppPaths.tags_tpls + 'index.html'
                })
                .state('app.templates', {
                    url: '/templates',
                    controller: 'TemplatesController',
                    templateUrl: AppPaths.templates_tpls + 'index.html'
                })
                .state('app.sub_fields', {
                    url: '/sub_fields',
                    controller: 'SubFieldsController',
                    templateUrl: AppPaths.sub_fields_tpls + 'index.html'
                })
                .state('app.users', {
                    url: '/users',
                    controller: 'UserController',
                    templateUrl: AppPaths.users_tpls + 'index.html'
                });
            $locationProvider.html5Mode(true).hashPrefix('!');
            $urlRouterProvider.otherwise("/admin");
        }])
    .run(['$rootScope', 'AppData', function($rootScope, AppData){

        function setDefaultSettings(){
            $rootScope.cur_user = AppData.cur_user;
        }
        if(AppData.cur_user.$promise)
            AppData.cur_user.$promise.then(setDefaultSettings);
        else
            setDefaultSettings();

        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options){
            AppData.reload();
        });
    }]);
angular.module('app')
    .controller('AppController', ['$scope', '$http', 'AppPaths', 'AppData', 'Pages', function($scope, $http, AppPaths, AppData, Pages) {
        var self = this;

        self.menuList = [
            {
                heading: 'Dashboard',
                route:   'app.dashboard'
            },
            {
                heading: 'Pages',
                route:   'app.pages'
            },
            {
                heading: 'Dictionary',
                route:   'app.dictionary'
            },
            {
                heading: 'Settings',
                route:   'app.settings'
            },
            {
                heading: 'Logs',
                route:   'app.logs'
            },
            {
                heading: 'Tags',
                route:   'app.tags'
            },
            {
                heading: 'Templates',
                route:   'app.templates'
            },
            {
                heading: 'SubFields',
                route:   'app.sub_fields'
            },
            {
                heading: 'Users',
                route:   'app.users'
            },
            {
                heading: 'Accounts',
                route:   'app.accounts',
                disable: true
            }
        ];

        self.refreshPagesTree = function(){
            self.pages_tree = Pages.query({tree_mode: true});
        };

        self.refreshPagesTree();


        self.activeTab = 'pages-tree';

        self.tabs = [{title:'Pages Tree', name: 'pages-tree'}, {title: 'Database Manage', name:'db-manage'}];
    }]);
angular
    .module('app')
    .directive('sfText', ['$timeout', 'AppPaths', function($timeout, AppPaths) {
        return {
            restrict: 'E',
            templateUrl: AppPaths.app + 'directives/sf-text.html',
            scope: {
                /* SubFieldValues resource */
                ngModel: '=',
                pageResource: '=?',
                templateResource: '=?'
            },
            link: function (scope, element) {

            }
        };
    }]);
angular
    .module('app')
    .directive('subFieldsList', ['$timeout', '$compile', 'AppPaths', 'SubFieldsValues', function($timeout, $compile, AppPaths, SubFieldsValues) {
        return {
            restrict: 'E',
            scope: {
                ngModel: '=',
                pageResource: '=?',
                templateResource: '=?',
                api: '=?'
            },
            link: function (scope, element) {
                var sub_fields_values_names = [];

                function init(){
                    var tplHtml = '';
                    scope.resources = {};
                    sub_fields_values_names = [];

                    scope.ngModel.forEach(function(sub_field){
                        scope.resources[sub_field.name] = sub_field;
                        var sub_field_value_name = sub_field.name + '_value';

                        if(scope.pageResource && scope.pageResource.id)
                             SubFieldsValues.query({sub_field_id: sub_field.id, page_id: scope.pageResource.id}).$promise.then(function(result){
                                 scope.resources[sub_field_value_name] = result[0] || new SubFieldsValues({sub_field_id: sub_field.id});
                             });
                        else
                            scope.resources[sub_field_value_name] = new SubFieldsValues({sub_field_id: sub_field.id});

                        sub_fields_values_names.push(sub_field_value_name);

                        var directive = sub_field.sub_field_type.directive;
                        tplHtml += '<label>' + (sub_field.title || sub_field.name) + '</label>';
                        tplHtml += '<' + directive + ' ng-model="resources.' + sub_field_value_name + '" ' +
                            'page-resource="pageResource" template-resource="templateResource" ' +
                            'sub-field-resource="resources.' + sub_field.name + '"></' + directive + '>';
                        tplHtml += '<div><small>' + (sub_field.description || '') + '</small></div>';
                    });

                    var template = angular.element(tplHtml);

                    var linkFn = $compile(template)(scope);
                    element.html(linkFn);
                }

                function checkForInit(){
                    if(!scope.ngModel || (scope.pageResource && scope.pageResource.$promise && !scope.pageResource.$promise.$$state.status))
                        return;

                    init();
                }
                scope.$watchCollection('ngModel', checkForInit);
                scope.$watchCollection('pageResource', checkForInit);

                if(scope.api){
                    scope.api.saveSubFieldsValues = function(pageResource){
                        sub_fields_values_names.forEach(function(sf_val_name){
                            var subFieldValueResource = scope.resources[sf_val_name];
                            subFieldValueResource.page_id = pageResource.id;

                            if(subFieldValueResource.id)
                                subFieldValueResource.$update();
                            else
                                subFieldValueResource.$save();
                        });

                        init();
                    }
                }
            }
        };
    }]);
angular.module('app')
    .service('AppData', ['$http', function($http){
        var self = this;

        var data_variables = {
            'cur_user': '/admin/api/cur_user',
            'site_settings': '/admin/api/site_settings_dictionary'
        };

        self.reload = function(){
            angular.forEach(data_variables, function(url, var_name){
                self[var_name] = {};
                self[var_name].$promise = $http.get(url).then(function(response){
                    angular.extend(self[var_name], response.data);
                    self[var_name].$promise = null;
                    return self[var_name];
                });
            });
        };

        self.reload();

        return self;
    }]);
var app = angular.module('app');

var defaultOptions = {
    'update': { method: 'PUT' }
};

app.factory('Settings', ['$resource', function($resource) {
    return $resource('admin/api/settings/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Pages', ['$resource', function($resource) {
    return $resource('admin/api/pages/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Templates', ['$resource', function($resource) {
    return $resource('admin/api/templates/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Logs', ['$resource', function($resource) {
    return $resource('admin/api/logs/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Users', ['$resource', function($resource) {
    return $resource('admin/api/users/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Tags', ['$resource', function($resource) {
    return $resource('admin/api/tags/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Templates', ['$resource', function($resource) {
    return $resource('admin/api/templates/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('SubFieldsTypes', ['$resource', function($resource) {
    return $resource('admin/api/sub_fields_types/:id', { id: '@id' }, defaultOptions);
}]);
app.factory('SubFieldsValues', ['$resource', function($resource) {
    return $resource('admin/api/sub_fields_values/:id', { id: '@id' }, defaultOptions);
}]);
app.factory('SubFields', ['$resource', function($resource) {
    return $resource('admin/api/sub_fields/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('ControllerActions', ['$resource', function($resource) {
    return $resource('admin/api/controller_actions/:id', { id: '@id' }, defaultOptions);
}]);

app.factory('Dictionaries', ['$resource', function($resource) {
    return $resource('admin/api/dictionaries/:id', { id: '@id' }, defaultOptions);
}]);
app.factory('DictionariesWords', ['$resource', function($resource) {
    return $resource('admin/api/dictionaries_words/:id', { id: '@id' }, defaultOptions);
}]);
var app_path = '/assets/js/admin-app/';
angular.module('app')
    .constant('AppPaths', {
            app:            app_path,
            app_tpls:       app_path + 'templates/',
            modules:        app_path + 'modules/',
            dashboard_tpls: app_path + 'modules/dashboard/templates/',
            settings_tpls:  app_path + 'modules/settings/templates/',
            pages_tpls:     app_path + 'modules/pages/templates/',
            logs_tpls:      app_path + 'modules/logs/templates/',
            users_tpls:     app_path + 'modules/users/templates/',
            tags_tpls:      app_path + 'modules/tags/templates/',
            templates_tpls: app_path + 'modules/templates/templates/',
            sub_fields_tpls: app_path + 'modules/sub-fields/templates/',
            dictionary_tpls: app_path + 'modules/dictionary/templates/'
    });
angular.module('app')
    .controller('DashboardController', ['$scope', '$state', '$http', '$uibModal', 'AppPaths', 'AppData', 'Pages', 'Templates', 'Users', 'Tags', 'SubFields', 'ControllerActions',
        function($scope, $state, $http, $uibModal, AppPaths, AppData, Pages, Templates, Users, Tags, SubFields, ControllerActions) {
        var defaultPage = new Pages();

        if($state.params.pageId){
            $scope.page = Pages.get({id: $state.params.pageId});
            $scope.page.id = $state.params.pageId;
        } else {
            defaultPage.is_menu_hide = true;
            defaultPage.tags_ids = [];
            defaultPage.controller_actions_ids = [];

            $scope.page = angular.copy(defaultPage);
        }

        //Get current user and set his id as author id
        function setCurUserAuthorId(){
            defaultPage.author_id = AppData.cur_user.id;
            angular.extend($scope.page, defaultPage);
        }
        if(AppData.cur_user.$promise)
            AppData.cur_user.$promise.then(setCurUserAuthorId);
        else
            setCurUserAuthorId();

        var site_settings = {};
        //Get site settings and set default values to page object
        function setDefaultSettings(){
            site_settings = AppData.site_settings;
            defaultPage.template_id =  site_settings.default_template_id;
            angular.extend($scope.page, defaultPage);
        }
        if(AppData.site_settings.$promise)
            AppData.site_settings.$promise.then(setDefaultSettings);
        else
            setDefaultSettings();

        //Translate title to english and paste to alias field if defined yandex_translate_api_key site setting
        //if not: just insert replace spaces to dashes and get lowercase title for set alias
        var last_translate = '';
        $scope.$watch('page.title', function(title){
            if(!title)
                return;

            if((!$scope.page.alias || $scope.page.alias == last_translate) && site_settings.yandex_translate_api_key){
                $http.get(
                    'https://translate.yandex.net/api/v1.5/tr.json/translate' +
                    '?key=' + site_settings.yandex_translate_api_key +
                    '&text=' + title +
                    '&lang=en')
                    .then(function(result){
                        last_translate = result.data.text[0].replace(/\s+/g, '-').toLowerCase();
                        $scope.page.alias = last_translate;
                    });
            } else {
                $scope.page.alias = title.replace(/\s+/g, '-').toLowerCase();
            }
        });

        function getSubFields(){
            SubFields.query({'template_id': $scope.page.template_id}).$promise.then(function(data){
                $scope.sub_fields = data;
            });
        }

        $scope.$watch('page.template_id', function(template_id){
            if(!template_id)
                return;

            getSubFields();

            ControllerActions.query({'template_id': template_id}).$promise.then(function(data){
                $scope.page.controller_actions_ids = data.map(function(action){return action.id});
            });
        });
        $scope.subFieldsApi = {};

        //Models for select inputs
        $scope.models = {
            templates: Templates,
            pages: Pages,
            users: Users,
            tags: Tags,
            controller_actions: ControllerActions
        };
        //Fields for adder functional at select inputs
        $scope.fields = {
            templates: [
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'path',
                    label: 'Path'
                }
            ],
            pages: [
                {
                    name: 'title',
                    label: 'Title'
                },
                {
                    name: 'template_id',
                    label: 'Template',
                    type: 'select',
                    model: Templates,
                    list: 'templates'
                }
            ],
            users: [
                {
                    name: 'name',
                    label: 'Name'
                },
                {
                    name: 'email',
                    label: 'Email'
                },
                {
                    name: 'password',
                    label: 'Password',
                    type: 'password'
                }
            ],
            tags: [
                {
                    name: 'name',
                    label: 'Name'
                }
            ],
            controller_actions: [
                {
                    name: 'name',
                    label: 'Name'
                }
            ]
        };

        //Validate for require and save page
        $scope.savePage = function(){
            $scope.hasErrors = {};
            var required = ['title', 'template_id'];
            required.forEach(function(reqField){
                if(!$scope.page[reqField])
                    $scope.hasErrors[reqField] = true;
                else
                    delete $scope.hasErrors[reqField];
            });

            if(!_.isEmpty($scope.hasErrors))
                return;

            var is_new = $scope.page.id ? false : true;

            var page_query;
            if(is_new)
                page_query = $scope.page.$save();
            else
                page_query = $scope.page.$update();

            page_query.then(function(result_page){
                $scope.subFieldsApi.saveSubFieldsValues(result_page);

                if(is_new)
                    $scope.page = angular.copy(defaultPage);
                else
                    $scope.page = result_page;

                $scope.alert = 'Page saved!';

                $scope.app.refreshPagesTree();
            })
        };

        $scope.closeAlert = function(){
            $scope.alert = ''
        };

        $scope.addSubField = function(){
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: AppPaths.dashboard_tpls + 'addSubFieldModal.html',
                controller: ['$scope', 'subField', 'SubFieldsTypes', function($scope, subField, SubFieldsTypes){
                    $scope.subField = subField;

                    $scope.models = {
                        SubFields: SubFields,
                        SubFieldsTypes: SubFieldsTypes
                    };
                    $scope.fields = {
                        sub_field_type: [
                            {
                                name: 'name',
                                label: 'Name'
                            },
                            {
                                name: 'directive',
                                label: 'Directive'
                            }
                        ]
                    };
                    $scope.ok = function () {

                        $scope.hasErrors = {};

                        var required;
                        if($scope.mode == 'create')
                            required = ['name', 'sub_field_type_id'];
                        else if($scope.mode == 'select')
                            required = ['id'];

                        required.forEach(function(reqField){
                            if(!$scope.subField[reqField])
                                $scope.hasErrors[reqField] = true;
                            else
                                delete $scope.hasErrors[reqField];
                        });

                        if(!_.isEmpty($scope.hasErrors))
                            return;


                        if($scope.mode == 'select')
                            $scope.subField = $scope.subField.$get();

                        $scope.$close($scope.subField);
                    };

                    $scope.cancel = function () {
                        $scope.$dismiss(false);
                    };
                }],
                size: 'md',
                resolve: {
                    subField: function () {
                        return new SubFields();
                    }
                }
            });

            modalInstance.result.then(function (subField) {
                if(subField.templates_ids)
                    subField.templates_ids.push($scope.page.template_id);
                else
                    subField.templates_ids = [$scope.page.template_id];

                if(subField.id)
                    subField.$update();
                else
                    subField.$save();

                getSubFields();
            }, function () {
                //$log.info('Modal dismissed at: ' + new Date());
            });
        }
    }]);

angular.module('app')
    .controller('LogsController', ['$scope', 'Logs', function($scope, Logs) {
        $scope.logs = Logs.query();

        $scope.aGridOptions = {
            caption: '',
            create: false,
            edit: false,
            orderBy: '-id',
            model: Logs,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'action',
                    modal: 'self',
                    label: 'Action',
                    new_placeholder: 'New Action',
                    required: true
                },
                {
                    name: 'user_id',
                    label: 'User'
                },
                {
                    name: 'logable_name',
                    label: 'TableName'
                },
                {
                    name: 'description',
                    label: 'Description'
                }
            ]
        };
    }]);

angular.module('app')
    .controller('DictionaryController', ['$scope', 'Dictionaries', 'DictionariesWords', function($scope, Dictionaries, DictionariesWords) {
        $scope.dictionaries = Dictionaries.query();

        $scope.aGridDictionariesOptions = {
            caption: '',
            orderBy: '-id',
            model: Dictionaries,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'name',
                    modal: 'self',
                    label: 'Name',
                    new_placeholder: 'New Dictionary',
                    required: true
                }
            ]
        };

        $scope.dictionaries_words = DictionariesWords.query();

        $scope.aGridDictionariesWordsOptions = {
            caption: '',
            orderBy: '-id',
            model: DictionariesWords,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'name',
                    modal: 'self',
                    label: 'Name',
                    new_placeholder: 'New Dictionary Word',
                    required: true
                },
                {
                    name: 'value',
                    label: 'Value'
                },
                {
                    name: 'dictionary_id',
                    label: 'Dictionary',
                    type: 'select',
                    list: 'dictionaries',
                    required: true
                }
            ],
            lists: {
                dictionaries: $scope.dictionaries
            }
        };
    }]);

angular.module('app')
    .controller('PagesController', ['$scope', 'Pages', 'Templates', 'Users', function($scope, Pages, Templates, Users) {
        $scope.pages = Pages.query();

        $scope.aGridOptions = {
            caption: '',
            orderBy: '-id',
            model: Pages,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'title',
                    modal: 'self',
                    label: 'Title',
                    new_placeholder: 'New page',
                    required: true
                },
                {
                    name: 'alias',
                    label: 'Alias'
                },
                {
                    name: 'sub_title',
                    label: 'SubTitle'
                },
                {
                    name: 'parent_page_id',
                    label: 'Parent page',
                    type: 'select',
                    list: 'self'
                },
                {
                    name: 'template_id',
                    label: 'Template',
                    type: 'select',
                    model: Templates,
                    list: 'templates',
                    required: true
                },
                {
                    name: 'description',
                    label: 'Description',
                    table_hide: true
                },
                {
                    name: 'author_id',
                    label: 'Author',
                    type: 'select',
                    model: Users,
                    list: 'users',
                    table_hide: true
                },
                {
                    name: 'menu_title',
                    label: 'MenuTitle',
                    table_hide: true
                },
                {
                    name: 'menu_index',
                    label: 'Menu Index',
                    table_hide: true
                },
                {
                    name: 'is_menu_hide',
                    label: 'Is hide from menu',
                    table_hide: true
                },
                {
                    name: 'is_published',
                    label: 'Is published',
                    table_hide: true
                },
                {
                    name: 'is_abstract',
                    label: 'Is abstract page',
                    table_hide: true
                },
                {
                    name: 'content',
                    label: 'Content',
                    type: 'textarea',
                    table_hide: true
                }
            ]
        };
    }]);

angular.module('app')
    .controller('SettingsController', ['$scope', 'Settings', function($scope, Settings) {
        $scope.settings = Settings.query();

        $scope.aGridOptions = {
            caption: 'All settings available in templates.',
            orderBy: '-id',
            model: Settings,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'name',
                    modal: 'self',
                    label: 'Name',
                    new_placeholder: 'New Setting',
                    required: true
                },
                {
                    name: 'value',
                    label: 'Value',
                    required: true
                },
                {
                    name: 'title',
                    label: 'Title'
                },
                {
                    name: 'description',
                    label: 'Description'
                }
            ]
        };
    }]);

angular.module('app')
    .controller('SubFieldsController', ['$scope', 'SubFields', 'SubFieldsTypes', 'Templates', function($scope, SubFields, SubFieldsTypes, Templates) {
        $scope.sub_fields_types = SubFieldsTypes.query();

        $scope.aGridSubFieldsTypesOptions = {
            caption: '',
            orderBy: '-id',
            model: SubFieldsTypes,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'name',
                    modal: 'self',
                    label: 'Name',
                    new_placeholder: 'New Sub Field Type',
                    required: true
                },
                {
                    name: 'directive',
                    label: 'Angular directive name'
                }
            ]
        };

        $scope.sub_fields = SubFields.query();

        $scope.aGridSubFieldsOptions = {
            caption: '',
            orderBy: '-id',
            model: SubFields,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'name',
                    modal: 'self',
                    label: 'Name',
                    new_placeholder: 'New Sub Field',
                    required: true
                },
                {
                    name: 'title',
                    label: 'Title'
                },
                {
                    name: 'description',
                    label: 'Description',
                    type: 'textarea'
                },
                {
                    name: 'config',
                    label: 'Config',
                    type: 'textarea'
                },
                {
                    name: 'sub_field_type_id',
                    label: 'Sub field type',
                    type: 'select',
                    list: 'sub_fields_types'
                },
                {
                    name: 'templates_ids',
                    label: 'Templates',
                    type: 'multiselect',
                    model: Templates,
                    list: 'templates',
                    table_hide: true
                }
            ],
            lists: {
                sub_fields_types: $scope.sub_fields_types
            }
        };
    }]);

angular.module('app')
    .controller('TagsController', ['$scope', 'Tags', function($scope, Tags) {
        $scope.tags = Tags.query();

        $scope.aGridOptions = {
            caption: '',
            orderBy: '-id',
            model: Tags,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'name',
                    modal: 'self',
                    label: 'Name',
                    new_placeholder: 'New Tag',
                    required: true
                }
            ]
        };
    }]);

angular.module('app')
    .controller('TemplatesController', ['$scope', 'Templates', 'SubFields', 'ControllerActions', function($scope, Templates, SubFields, ControllerActions) {
        $scope.templates = Templates.query();

        $scope.aGridOptions = {
            caption: 'You must to add blade template file on address /resources/views/templates/example.bade.php(path:"example") before/after add row to DB!',
            orderBy: '-id',
            model: Templates,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'name',
                    modal: 'self',
                    label: 'Name',
                    new_placeholder: 'New Template',
                    required: true
                },
                {
                    name: 'path',
                    label: 'Path',
                    required: true
                },
                {
                    name: 'description',
                    label: 'Description',
                    type: 'textarea'
                },
                {
                    name: 'sub_fields_ids',
                    label: 'Sub fields',
                    type: 'multiselect',
                    model: SubFields,
                    list: 'sub_fields',
                    table_hide: true
                },
                {
                    name: 'controller_actions_ids',
                    label: 'Controller actions',
                    type: 'multiselect',
                    model: ControllerActions,
                    list: 'controller_actions',
                    table_hide: true
                }
            ]
        };
    }]);

angular.module('app')
    .controller('UserController', ['$scope', 'Users', function($scope, Users) {
        $scope.users = Users.query();

        $scope.aGridOptions = {
            caption: '',
            create: true,
            edit: true,
            orderBy: '-id',
            model: Users,
            fields: [
                {
                    name: 'id',
                    label: '#',
                    readonly: true
                },
                {
                    name: 'name',
                    modal: 'self',
                    label: 'Name',
                    new_placeholder: 'New User',
                    required: true
                },
                {
                    name: 'email',
                    label: 'E-mail',
                    required: true
                },
                {
                    name: 'password',
                    type: 'password',
                    label: 'Password',
                    required: true
                }
            ]
        };
    }]);
