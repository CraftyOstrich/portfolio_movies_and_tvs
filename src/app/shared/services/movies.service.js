"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/of");
require("rxjs/add/operator/map");
require("rxjs/add/operator/mergeMap");
require("rxjs/add/operator/do");
require("rxjs/add/operator/catch");
var app_config_1 = require("../../app-config");
var MoviesService = (function () {
    function MoviesService(_http) {
        this._http = _http;
    }
    MoviesService.prototype.getMovies = function (link) {
        return this._http.get(this.getRequestUrl(link))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    MoviesService.prototype.getMovie = function (route, id) {
        return this._http.get(this.getRequestUrl(route, id))
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log('All:' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    MoviesService.prototype.handleError = function (error) {
        console.log(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    MoviesService.prototype.getRequestUrl = function (link, id) {
        if (id) {
            return app_config_1.API_CONFIG.Url + link + id + app_config_1.API_CONFIG.Key;
        }
        else
            return app_config_1.API_CONFIG.Url + link + app_config_1.API_CONFIG.Key;
    };
    return MoviesService;
}());
MoviesService = __decorate([
    core_1.Injectable()
], MoviesService);
exports.MoviesService = MoviesService;
