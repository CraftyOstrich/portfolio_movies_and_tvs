"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MoviesDetailComponent = (function () {
    function MoviesDetailComponent(_route, _moviesService) {
        this._route = _route;
        this._moviesService = _moviesService;
        this.link = '/movie/';
    }
    MoviesDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._route.snapshot.params['id'];
        this._moviesService.getMovie(this.link, id).subscribe(function (movie) { return _this.movie = movie; });
    };
    return MoviesDetailComponent;
}());
MoviesDetailComponent = __decorate([
    core_1.Component({
        selector: 'app-movies-detail',
        templateUrl: 'item-detail.component.html',
        styleUrls: ['item-detail.component.scss']
    })
], MoviesDetailComponent);
exports.MoviesDetailComponent = MoviesDetailComponent;
