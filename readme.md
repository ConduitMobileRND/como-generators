# Como generator

> Yeoman generator for Como - lets you quickly set up a project with sensible defaults and best practices.

## Usage

For step-by-step instructions on using Yeoman, see [this tutorial.](http://yeoman.io/codelab/)

Install `yo`, `grunt-cli`, `bower` and `generator-como`:
```
npm install -g grunt-cli bower yo generator-como
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

## Generators

Available generators:

* [angular:controller](#controller)
* [angular:directive](#directive)
* [angular:filter](#filter)
* [angular:service](#service)
* [angular:provider](#service)
* [angular:factory](#service)
* [angular:value](#service)
* [angular:constant](#service)

* [angular:view](#view)

### Controller
Generates a controller in `app/scripts/controllers`.

Example:
```bash
yo como:controller user
```

Produces `app/scripts/controllers/user.js`:
```javascript
angular.module('myMod').controller('UserCtrl', function ($scope) {
  // ...
});
```
### Directive
Generates a directive in `app/scripts/directives`.

Example:
```bash
yo como:directive myDirective
```

Produces `app/scripts/directives/myDirective.js`:
```javascript
angular.module('myMod').directive('myDirective', function () {
  return {
    template: '<div></div>',
    restrict: 'E',
    link: function postLink(scope, element, attrs) {
      element.text('this is the myDirective directive');
    }
  };
});
```

### Filter
Generates a filter in `app/scripts/filters`.

Example:
```bash
yo como:filter myFilter
```

Produces `app/scripts/filters/myFilter.js`:
```javascript
angular.module('myMod').filter('myFilter', function () {
  return function (input) {
    return 'myFilter filter:' + input;
  };
});
```

### View
Generates an HTML view file in `app/views`.

Example:
```bash
yo como:view user
```

Produces `app/views/user.html`:
```html
<p>This is the user view</p>
```

### Service
Generates an AngularJS service.

Example:
```bash
yo como:service myService
```

Produces `app/scripts/services/myService.js`:
```javascript
angular.module('myMod').service('myService', function () {
  // ...
});
```

You can also do `yo como:factory`, `yo como:provider`, `yo como:value`, and `yo como:constant` for other types of services.

### Decorator
Generates an AngularJS service decorator.

Example:
```bash
yo como:decorator serviceName
```

Produces `app/scripts/decorators/serviceNameDecorator.js`:
```javascript
angular.module('myMod').config(function ($provide) {
    $provide.decorator('serviceName', function ($delegate) {
      // ...
      return $delegate;
    });
  });
```
