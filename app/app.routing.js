"use strict";
var router_1 = require('@angular/router');
var inicio_component_1 = require('./inicio.component');
var nosotros_component_1 = require('./nosotros.component');
var contactenos_component_1 = require('./contactenos.component');
var APP_ROUTES = [
    { path: 'inicio', component: inicio_component_1.InicioComponent },
    { path: 'nosotros', component: nosotros_component_1.NosotrosComponent },
    { path: 'contactenos', component: contactenos_component_1.ContactenosComponent }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map