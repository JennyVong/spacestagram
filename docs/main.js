(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jennyvong/Desktop/spacestagram/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "ISnN":
/*!********************************************************!*\
  !*** ./src/app/liked-photos/liked-photos.component.ts ***!
  \********************************************************/
/*! exports provided: LikedPhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikedPhotosComponent", function() { return LikedPhotosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-masonry */ "EygD");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");






function LikedPhotosComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Liked images will show up here, go like some photos! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LikedPhotosComponent_ngx_masonry_4_div_1_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LikedPhotosComponent_ngx_masonry_4_div_1_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LikedPhotosComponent_ngx_masonry_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LikedPhotosComponent_ngx_masonry_4_div_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const photo_r4 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.like(photo_r4.liked, photo_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LikedPhotosComponent_ngx_masonry_4_div_1_mat_icon_5_Template, 2, 0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LikedPhotosComponent_ngx_masonry_4_div_1_mat_icon_6_Template, 2, 0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Brought to you by NASA's Rover Photos API");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const photo_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("alt", "", photo_r4.rover.name, " caught by ", photo_r4.camera.full_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", photo_r4.img_src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", photo_r4.liked ? "unlike image" : "like image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !photo_r4.liked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", photo_r4.liked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", photo_r4.rover.name, " - ", photo_r4.camera.full_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](photo_r4.earth_date);
} }
function LikedPhotosComponent_ngx_masonry_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-masonry", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LikedPhotosComponent_ngx_masonry_4_div_1_Template, 14, 9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.display);
} }
function LikedPhotosComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LikedPhotosComponent_button_6_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.increaseLimit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Show More Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class LikedPhotosComponent {
    constructor(dataService) {
        this.dataService = dataService;
        this.likedPhotos = [];
        this.photos = [];
        this.display = [];
        this.limit = 20;
    }
    ngOnInit() {
        const liked = localStorage.getItem('likedPhotos');
        if (liked) {
            this.likedPhotos = JSON.parse(liked);
        }
        const allPhotos = localStorage.getItem('photos');
        if (allPhotos) {
            this.photos = JSON.parse(allPhotos);
        }
        this.display = this.likedPhotos.slice(0, this.limit);
    }
    increaseLimit() {
        this.limit += 20;
        this.display = this.likedPhotos.slice(0, this.limit);
    }
    like(photo, id) {
        // check if photo has been initialized before - if not, create value
        if (photo) {
            photo = !photo;
        }
        else {
            photo = true;
        }
        // find photo in photos array to assign liked property value
        this.photos.find(photo => photo.id == id).liked = photo;
        // save in local storage as a database
        localStorage.setItem('photos', JSON.stringify(this.photos));
        // save array of liked photos into local storage
        if (photo == true) {
            this.likedPhotos.push(this.photos.find(photo => photo.id == id));
        }
        else {
            this.likedPhotos.splice(this.likedPhotos.findIndex(photo => photo.id == id), 1);
        }
        this.display = this.likedPhotos;
        localStorage.setItem('likedPhotos', JSON.stringify(this.likedPhotos));
        // pass data to liked-photos component
        const liked = localStorage.getItem('likedPhotos');
        if (liked) {
            this.dataService.setArray(this.likedPhotos);
        }
        else {
            this.dataService.setArray([]);
        }
    }
}
LikedPhotosComponent.ɵfac = function LikedPhotosComponent_Factory(t) { return new (t || LikedPhotosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
LikedPhotosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LikedPhotosComponent, selectors: [["app-liked-photos"]], decls: 7, vars: 3, consts: [[1, "liked-photos"], [1, "title"], ["class", "no-photos", 4, "ngIf"], ["class", "liked-photos-container", 4, "ngIf"], [1, "button-container"], ["aria-label", "show more images", "class", "show-more", 3, "click", 4, "ngIf"], [1, "no-photos"], [1, "liked-photos-container"], ["ngxMasonryItem", "", "class", "liked-photos-col", 4, "ngFor", "ngForOf"], ["ngxMasonryItem", "", 1, "liked-photos-col"], [1, "liked-photo"], ["aria-label", "click to zoom in", 1, "liked-image", 3, "src", "alt"], ["mat-icon-button", "", 3, "click"], ["class", "star", 4, "ngIf"], [1, "liked-description"], [1, "details"], [1, "date"], [1, "source"], [1, "star"], ["aria-label", "show more images", 1, "show-more", 3, "click"], [1, "arrow"]], template: function LikedPhotosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Liked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LikedPhotosComponent_span_3_Template, 2, 0, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LikedPhotosComponent_ngx_masonry_4_Template, 2, 1, "ngx-masonry", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LikedPhotosComponent_button_6_Template, 4, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.display.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.display.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.limit < ctx.likedPhotos.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ngx_masonry__WEBPACK_IMPORTED_MODULE_3__["NgxMasonryComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_masonry__WEBPACK_IMPORTED_MODULE_3__["NgxMasonryDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: [".liked-photos[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n.liked-photos[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: #FFF;\n  display: flex;\n  justify-content: center;\n  font-weight: 700;\n}\n.liked-photos[_ngcontent-%COMP%]   .no-photos[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  color: #96BF46;\n}\n.liked-photos-container[_ngcontent-%COMP%] {\n  width: 90vw;\n  margin-left: 70px;\n}\n.liked-photos-col[_ngcontent-%COMP%] {\n  width: 15%;\n  padding: 0 10px;\n}\n.liked-photos-col[_ngcontent-%COMP%]   .liked-photo[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  border-radius: 10px;\n  width: 100%;\n}\n.liked-photos-col[_ngcontent-%COMP%]   .liked-photo[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: right;\n}\n.liked-photos-col[_ngcontent-%COMP%]   .liked-photo[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-color: transparent;\n  box-shadow: none;\n  border: none;\n}\n.liked-photos-col[_ngcontent-%COMP%]   .liked-photo[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n  color: #96BF46;\n}\n.liked-photos-col[_ngcontent-%COMP%]   .liked-photo[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.liked-photos-col[_ngcontent-%COMP%]   .liked-photo[_ngcontent-%COMP%]   .liked-image[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n.liked-photos-col[_ngcontent-%COMP%]   .liked-photo[_ngcontent-%COMP%]   .liked-description[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  padding: 0 0 20px 10px;\n}\n.liked-photos-col[_ngcontent-%COMP%]   .liked-photo[_ngcontent-%COMP%]   .liked-description[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.liked-photos-col[_ngcontent-%COMP%]   .liked-photo[_ngcontent-%COMP%]   .liked-description[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n.liked-photos-col[_ngcontent-%COMP%]   .liked-photo[_ngcontent-%COMP%]   .liked-description[_ngcontent-%COMP%]   .source[_ngcontent-%COMP%] {\n  color: gray;\n  font-size: 12px;\n}\n@media screen and (max-width: 1920px) {\n  .liked-photos-container[_ngcontent-%COMP%] {\n    margin-left: 45px;\n  }\n  .liked-photos-col[_ngcontent-%COMP%] {\n    width: 18%;\n  }\n}\n@media screen and (max-width: 1350px) {\n  .liked-photos-container[_ngcontent-%COMP%] {\n    margin-left: 50px;\n  }\n  .liked-photos-col[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n@media screen and (max-width: 600px) {\n  .liked-photos-container[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .liked-photos-col[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.liked-photos[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 50px;\n}\n.liked-photos[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  background-color: transparent;\n  color: #FFF;\n  box-shadow: none;\n  border: none;\n  font-size: 14px;\n  font-weight: 700;\n  color: #96BF46;\n}\n.liked-photos[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.liked-photos[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: #96BF46;\n  font-weight: 700;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpa2VkLXBob3Rvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBQUo7QUFHRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQURKO0FBSUU7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUZKO0FBSUk7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFGTjtBQUlNO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBRlI7QUFJUTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFGVjtBQUtRO0VBQ0UsY0FBQTtBQUhWO0FBS1U7RUFDRSxlQUFBO0FBSFo7QUFRTTtFQUNFLG1CQUFBO0FBTlI7QUFTTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFQUjtBQVNRO0VBQ0UsZ0JBQUE7QUFQVjtBQVVRO0VBQ0UsaUJBQUE7QUFSVjtBQVdRO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFUVjtBQWVFO0VBQ0U7SUFDRSxpQkFBQTtFQWJKO0VBZ0JFO0lBQ0UsVUFBQTtFQWRKO0FBQ0Y7QUFpQkU7RUFDRTtJQUNFLGlCQUFBO0VBZko7RUFrQkU7SUFDRSxVQUFBO0VBaEJKO0FBQ0Y7QUFtQkU7RUFDRTtJQUNFLFNBQUE7RUFqQko7RUFvQkU7SUFDRSxXQUFBO0VBbEJKO0FBQ0Y7QUFxQkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQW5CSjtBQXFCSTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFuQk47QUFxQk07RUFDRSxlQUFBO0FBbkJSO0FBc0JNO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQXBCUiIsImZpbGUiOiJsaWtlZC1waG90b3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlrZWQtcGhvdG9zIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuXG4gIC50aXRsZSB7XG4gICAgY29sb3I6ICNGRkY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5cbiAgLm5vLXBob3RvcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogIzk2QkY0NjtcbiAgfVxuXG4gICYtY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTB2dztcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcbiAgfVxuXG4gICYtY29sIHtcbiAgICB3aWR0aDogMTUlO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcblxuICAgIC5saWtlZC1waG90byB7XG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhciB7XG4gICAgICAgICAgY29sb3I6ICM5NkJGNDY7XG5cbiAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmxpa2VkLWltYWdlIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIH1cblxuICAgICAgLmxpa2VkLWRlc2NyaXB0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAyMHB4IDEwcHg7XG5cbiAgICAgICAgLmRldGFpbHMge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0ZSB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc291cmNlIHtcbiAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTIwcHgpIHtcbiAgICAmLWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW4tbGVmdDogNDVweDtcbiAgICB9XG5cbiAgICAmLWNvbCB7XG4gICAgICB3aWR0aDogMTglO1xuICAgIH1cbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzNTBweCkge1xuICAgICYtY29udGFpbmVyIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIH1cblxuICAgICYtY29sIHtcbiAgICAgIHdpZHRoOiAzMCU7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAmLWNvbnRhaW5lciB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgJi1jb2wge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLmJ1dHRvbi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG5cbiAgICAuc2hvdy1tb3JlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBjb2xvcjogIzk2QkY0NjtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgLmFycm93IHtcbiAgICAgICAgY29sb3I6ICM5NkJGNDY7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LikedPhotosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-liked-photos',
                templateUrl: './liked-photos.component.html',
                styleUrls: ['./liked-photos.component.scss']
            }]
    }], function () { return [{ type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "R7Hv":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class DataService {
    constructor() {
        this.likedPhotos = [];
        this.photos = [];
        this.searchText = "";
    }
    setArray(liked) {
        this.likedPhotos = liked;
    }
    getArray() {
        return this.likedPhotos;
    }
    setPhotos(all) {
        this.photos = all;
    }
    getPhotos() {
        return this.photos;
    }
    setSearch(search) {
        this.searchText = search;
    }
    getSearch() {
        return this.searchText;
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data.service */ "R7Hv");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








const _c0 = function (a0) { return { "selected": a0 }; };
function AppComponent_div_22_list_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "list-item", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_22_list_item_1_Template_list_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r4 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.selectItem(i_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const camera_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, i_r4 === ctx_r2.selectedIndex));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", camera_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", camera_r3, " ");
} }
function AppComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_22_list_item_1_Template, 2, 5, "list-item", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.cameras);
} }
const _c1 = function () { return ["/"]; };
const _c2 = function () { return { searchText: "" }; };
const _c3 = function () { return ["/liked-photos"]; };
const _c4 = function () { return { input: "" }; };
class AppComponent {
    constructor(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.searchText = "";
        this.cameras = [
            "Front Hazard Avoidance Camera",
            "Rear Hazard Avoidance Camera",
            "Mast Camera",
            "Chemistry and Camera Complex",
            "Mars Hand Lens Imager",
            "Mars Descent Imager",
            "Navigation Camera",
            "Panoramic Camera",
            "Miniature Thermal Emission Spectrometer (Mini-TES)"
        ];
        this.listHidden = true;
        this.selectedIndex = -1;
        this.filteredList = [];
        this.likedPhotos = [];
    }
    ngOnInit() {
        this.filteredList = this.cameras;
    }
    selectItem(ind) {
        this.searchText = this.filteredList[ind] || this.searchText;
        this.listHidden = true;
        this.selectedIndex = ind;
    }
    // navigate through the list of items
    onKeyPress(event) {
        if (!this.listHidden) {
            if (event.key === 'Escape') {
                this.selectedIndex = -1;
                this.toggleListDisplay(0);
            }
            else if (event.key === 'Enter') {
                this.toggleListDisplay(0);
            }
            else if (event.key === 'ArrowDown') {
                this.listHidden = false;
                this.selectedIndex = (this.selectedIndex + 1) % this.filteredList.length;
                if (this.filteredList.length > 0 && !this.listHidden) {
                    document.getElementsByTagName('list-item')[this.selectedIndex].scrollIntoView();
                }
            }
            else if (event.key === 'ArrowUp') {
                this.listHidden = false;
                if (this.selectedIndex <= 0) {
                    this.selectedIndex = this.filteredList.length;
                }
                this.selectedIndex = (this.selectedIndex - 1) % this.filteredList.length;
                if (this.filteredList.length > 0 && !this.listHidden) {
                    document.getElementsByTagName('list-item')[this.selectedIndex].scrollIntoView();
                }
            }
        }
    }
    toggleListDisplay(sender) {
        if (sender === 1) {
            this.listHidden = false;
        }
        else {
            // helps to select item by clicking
            setTimeout(() => {
                this.selectItem(this.selectedIndex);
                this.listHidden = true;
                this.router.navigate([''], { queryParams: { searchText: this.searchText } });
                this.dataService.setSearch(this.searchText);
            }, 500);
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 28, vars: 19, consts: [[1, "navbar"], [1, "menu"], ["mat-icon-button", "", "aria-label", "open menu", 1, "menu-trigger-button", 3, "matMenuTriggerFor"], [1, "menu-icon"], [1, "menu-options"], ["menu", "matMenu"], ["mat-menu-item", "", 1, "heading"], ["aria-label", "Home", 1, "link", 3, "routerLink", "queryParams"], ["mat-menu-item", "", 1, "liked-link"], ["aria-label", "Liked images", 1, "link", 3, "routerLink", "queryParams"], [1, "heading"], ["aria-label", "Home", 3, "routerLink", "queryParams"], ["src", "../assets/logo.svg", 1, "logo"], [1, "search"], ["aria-label", "Search camera", "placeholder", "Search camera", 1, "search-input", 3, "ngModel", "ngModelChange", "keyup", "blur", "focus"], [1, "search-icon"], ["class", "search-options", 4, "ngIf"], [1, "liked-link"], ["aria-label", "liked images", 1, "link", 3, "routerLink", "queryParams"], [1, "star"], [1, "search-options"], ["class", "option", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "option", 3, "ngClass", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-menu", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "nav", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "nav", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Liked");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nav", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_19_listener($event) { return ctx.searchText = $event; })("keyup", function AppComponent_Template_input_keyup_19_listener($event) { return ctx.onKeyPress($event); })("blur", function AppComponent_Template_input_blur_19_listener() { return ctx.toggleListDisplay(0); })("focus", function AppComponent_Template_input_focus_19_listener() { return ctx.toggleListDisplay(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AppComponent_div_22_Template, 2, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "nav", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "account_circle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "router-outlet");
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.listHidden);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c3))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c4));
    } }, directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_3__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: [".navbar[_ngcontent-%COMP%] {\n  display: flex;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: #000;\n  width: 100%;\n  min-height: 70px;\n  z-index: 1;\n}\n.navbar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  display: none;\n}\n.navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  padding-top: 10px;\n}\n.navbar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-end;\n  width: 100%;\n  position: relative;\n  margin-right: 30px;\n}\n.navbar[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  width: 300px;\n  min-height: 30px;\n  border-radius: 20px;\n  background-color: #000;\n  border: 2px solid gray;\n  padding-left: 45px;\n  font-size: 16px;\n  color: #fff;\n}\n.navbar[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: #96BF46;\n}\n.navbar[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 23px;\n  right: 310px;\n  color: gray;\n}\n.navbar[_ngcontent-%COMP%]   .search-options[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 55px;\n  text-align: center;\n  background-color: #000;\n  max-width: 340px;\n  max-height: 200px;\n  overflow-y: auto;\n  z-index: 1;\n  border-radius: 10px;\n}\n.navbar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  background-color: #96BF46;\n}\n.navbar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   list-item[_ngcontent-%COMP%] {\n  display: block;\n  padding: 10px;\n}\n.navbar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]   list-item[_ngcontent-%COMP%]:hover {\n  background-color: #1A3A53;\n  cursor: pointer;\n}\n.navbar[_ngcontent-%COMP%]   .liked-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding-right: 30px;\n}\n.navbar[_ngcontent-%COMP%]   .liked-link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.navbar[_ngcontent-%COMP%]   .liked-link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n  color: #96BF46;\n  font-size: 36px;\n}\n@media screen and (max-width: 600px) {\n  .navbar[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n  }\n  .navbar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    padding-left: 20px;\n  }\n  .navbar[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   .menu-trigger-button[_ngcontent-%COMP%] {\n    background-color: transparent;\n    border: none;\n  }\n  .navbar[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .navbar[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n    margin-right: 20px;\n  }\n  .navbar[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n    width: 200px;\n  }\n  .navbar[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n    right: 210px;\n  }\n  .navbar[_ngcontent-%COMP%]   .search-options[_ngcontent-%COMP%] {\n    max-width: 240px;\n  }\n  .navbar[_ngcontent-%COMP%]   .liked-link[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n  .mat-menu-item {\n  background-color: #000;\n}\n  .mat-menu-item a {\n  text-decoration: none;\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUFDRjtBQUNFO0VBQ0UsYUFBQTtBQUNKO0FBRUU7RUFDQyxrQkFBQTtFQUNBLGlCQUFBO0FBQUg7QUFHRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQURKO0FBR0k7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRE47QUFHTTtFQUNFLGdCQUFBO0FBRFI7QUFLSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBSE47QUFNSTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFKTjtBQU9JO0VBQ0UseUJBQUE7QUFMTjtBQVFJO0VBQ0UsY0FBQTtFQUNBLGFBQUE7QUFOTjtBQVFNO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBTlI7QUFXRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFUSjtBQVdJO0VBQ0UscUJBQUE7QUFUTjtBQVdNO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFUVjtBQWNFO0VBN0ZGO0lBOEZJLGFBQUE7SUFDQSw4QkFBQTtFQVhGO0VBYUU7SUFDRSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxrQkFBQTtFQVhKO0VBYUk7SUFDRSw2QkFBQTtJQUNBLFlBQUE7RUFYTjtFQWVFO0lBQ0UsYUFBQTtFQWJKO0VBZ0JFO0lBQ0Usa0JBQUE7RUFkSjtFQWdCSTtJQUNFLFlBQUE7RUFkTjtFQWlCSTtJQUNFLFlBQUE7RUFmTjtFQWtCSTtJQUNFLGdCQUFBO0VBaEJOO0VBb0JFO0lBQ0UsYUFBQTtFQWxCSjtBQUNGO0FBc0JBO0VBQ0Usc0JBQUE7QUFuQkY7QUFxQkU7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0FBbkJKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDcwcHg7XG4gIHotaW5kZXg6IDE7XG5cbiAgLm1lbnUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAubG9nbyB7XG4gICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxuXG4gIC5zZWFyY2gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICBcbiAgICAmLWlucHV0IHtcbiAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyYXk7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDQ1cHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBjb2xvcjogI2ZmZjtcblxuICAgICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6ICM5NkJGNDY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1pY29uIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvdHRvbTogMjNweDtcbiAgICAgIHJpZ2h0OiAzMTBweDtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cblxuICAgICYtb3B0aW9ucyB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDU1cHg7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgICAgbWF4LXdpZHRoOiAzNDBweDtcbiAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cblxuICAgIC5zZWxlY3RlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTZCRjQ2O1xuICAgIH1cblxuICAgIGxpc3QtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUEzQTUzO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmxpa2VkLWxpbmsge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG5cbiAgICAubGluayB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAgIC5zdGFyIHtcbiAgICAgICAgICBjb2xvcjogIzk2QkY0NjtcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIC5tZW51IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBcbiAgICAgIC5tZW51LXRyaWdnZXItYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubG9nbyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5zZWFyY2gge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgXG4gICAgICAmLWlucHV0IHtcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgfVxuXG4gICAgICAmLWljb24ge1xuICAgICAgICByaWdodDogMjEwcHg7XG4gICAgICB9XG5cbiAgICAgICYtb3B0aW9ucyB7XG4gICAgICAgIG1heC13aWR0aDogMjQwcHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmxpa2VkLWxpbmsge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH0gXG59XG5cbjo6bmctZGVlcCAubWF0LW1lbnUtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG4gIFxuICBhIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _rover_photos_rover_photos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rover-photos/rover-photos.component */ "lcXL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./filter.pipe */ "i6q1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _liked_photos_liked_photos_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./liked-photos/liked-photos.component */ "ISnN");
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-masonry */ "EygD");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            ngx_masonry__WEBPACK_IMPORTED_MODULE_13__["NgxMasonryModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _rover_photos_rover_photos_component__WEBPACK_IMPORTED_MODULE_4__["RoverPhotosComponent"],
        _filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"],
        _liked_photos_liked_photos_component__WEBPACK_IMPORTED_MODULE_12__["LikedPhotosComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        ngx_masonry__WEBPACK_IMPORTED_MODULE_13__["NgxMasonryModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _rover_photos_rover_photos_component__WEBPACK_IMPORTED_MODULE_4__["RoverPhotosComponent"],
                    _filter_pipe__WEBPACK_IMPORTED_MODULE_10__["FilterPipe"],
                    _liked_photos_liked_photos_component__WEBPACK_IMPORTED_MODULE_12__["LikedPhotosComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    ngx_masonry__WEBPACK_IMPORTED_MODULE_13__["NgxMasonryModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "i6q1":
/*!********************************!*\
  !*** ./src/app/filter.pipe.ts ***!
  \********************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FilterPipe {
    transform(items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        searchText = searchText.toLocaleLowerCase();
        return items.filter((item) => {
            return item.camera.full_name.toLocaleLowerCase().includes(searchText);
        });
    }
}
FilterPipe.ɵfac = function FilterPipe_Factory(t) { return new (t || FilterPipe)(); };
FilterPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "filter", type: FilterPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'filter'
            }]
    }], null, null); })();


/***/ }),

/***/ "iHOx":
/*!****************************************!*\
  !*** ./src/app/nasa-photos.service.ts ***!
  \****************************************/
/*! exports provided: NasaPhotosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NasaPhotosService", function() { return NasaPhotosService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class NasaPhotosService {
    constructor(http) {
        this.http = http;
        this.roverUrl = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=FzT7HtQ9YKkH70Iho7HgyCklTpE8y6XYJVDv7O3Y';
    }
    getPhotos() {
        const photos = this.http.get(this.roverUrl);
        console.log(photos);
        return photos;
    }
}
NasaPhotosService.ɵfac = function NasaPhotosService_Factory(t) { return new (t || NasaPhotosService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
NasaPhotosService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NasaPhotosService, factory: NasaPhotosService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NasaPhotosService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "lcXL":
/*!********************************************************!*\
  !*** ./src/app/rover-photos/rover-photos.component.ts ***!
  \********************************************************/
/*! exports provided: RoverPhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoverPhotosComponent", function() { return RoverPhotosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nasa_photos_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nasa-photos.service */ "iHOx");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-masonry */ "EygD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../filter.pipe */ "i6q1");










function RoverPhotosComponent_div_6_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star_border");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoverPhotosComponent_div_6_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "star");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RoverPhotosComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoverPhotosComponent_div_6_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const photo_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.view(photo_r2.img_src); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoverPhotosComponent_div_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const photo_r2 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.like(photo_r2.liked, photo_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RoverPhotosComponent_div_6_mat_icon_5_Template, 2, 0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RoverPhotosComponent_div_6_mat_icon_6_Template, 2, 0, "mat-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Brought to you by NASA's Rover Photos API");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const photo_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("alt", "", photo_r2.rover.name, " caught by ", photo_r2.camera.full_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", photo_r2.img_src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", photo_r2.liked ? "unlike image" : "like image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !photo_r2.liked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", photo_r2.liked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", photo_r2.rover.name, " - ", photo_r2.camera.full_name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](photo_r2.earth_date);
} }
function RoverPhotosComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoverPhotosComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.increaseLimit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Show More Images");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class RoverPhotosComponent {
    constructor(nasaPhotoService, activatedRoute, dataService) {
        this.nasaPhotoService = nasaPhotoService;
        this.activatedRoute = activatedRoute;
        this.dataService = dataService;
        this.photos = [];
        this.display = [];
        this.limit = 20;
        this.searchText = "";
        this.likedPhotos = [];
        this.activatedRoute.queryParams.subscribe((params) => {
            this.searchText = params.searchText;
        });
    }
    ngOnInit() {
        this.getPhotos();
    }
    hideloader() {
        const loader = document.getElementById("loading-container");
        if (loader) {
            loader.style.display = 'none';
        }
    }
    view(photo) {
        window.open(photo, "_blank");
    }
    like(photo, id) {
        // check if photo has been initialized before - if not, create value
        if (photo) {
            photo = !photo;
        }
        else {
            photo = true;
        }
        // find photo in photos array to assign liked property value
        this.photos.find(photo => photo.id == id).liked = photo;
        // save in local storage as a database
        localStorage.setItem('photos', JSON.stringify(this.photos));
        // save array of liked photos into local storage
        if (photo == true) {
            this.likedPhotos.push(this.photos.find(photo => photo.id == id));
        }
        else {
            this.likedPhotos.splice(this.likedPhotos.findIndex(photo => photo.id == id), 1);
        }
        localStorage.setItem('likedPhotos', JSON.stringify(this.likedPhotos));
        //this.router.navigate(['/liked-photos'], {queryParams: {likedPhotos: this.likedPhotos}});
        // pass data to liked-photos component - both liked photos and all photos
        const changedPhotos = localStorage.getItem('photos');
        if (changedPhotos) {
            this.dataService.setPhotos(JSON.parse(changedPhotos));
        }
        const liked = localStorage.getItem('likedPhotos');
        if (liked) {
            this.dataService.setArray(JSON.parse(liked));
        }
        else {
            this.dataService.setArray([]);
        }
    }
    increaseLimit() {
        this.limit += 20;
        this.display = this.photos.slice(0, this.limit);
    }
    getPhotos() {
        this.nasaPhotoService.getPhotos().subscribe(res => {
            if (res) {
                this.hideloader();
            }
            this.photo = res;
            this.photos = this.photo.photos;
            // check if existing local storage exists for photos - if not, create one
            const savedPhotos = localStorage.getItem('photos');
            if (!savedPhotos) {
                localStorage.setItem('photos', JSON.stringify(this.photos));
            }
            else {
                // assign photos array to existing local storage
                this.photos = JSON.parse(savedPhotos);
                this.dataService.setPhotos(this.photos);
            }
            // set up photos to display based on limit of 20
            this.display = this.photos.slice(0, this.limit);
            // set up liked photos array with past data
            this.photos.filter((photo) => {
                if (photo.liked == true) {
                    this.likedPhotos.push(photo);
                }
            });
            localStorage.setItem('likedPhotos', JSON.stringify(this.likedPhotos));
            this.dataService.setArray(this.likedPhotos);
        });
    }
}
RoverPhotosComponent.ɵfac = function RoverPhotosComponent_Factory(t) { return new (t || RoverPhotosComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_nasa_photos_service__WEBPACK_IMPORTED_MODULE_1__["NasaPhotosService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
RoverPhotosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoverPhotosComponent, selectors: [["app-rover-photos"]], inputs: { searchText: "searchText", likedPhotos: "likedPhotos" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_nasa_photos_service__WEBPACK_IMPORTED_MODULE_1__["NasaPhotosService"]])], decls: 10, vars: 5, consts: [[1, "rover-photos"], ["id", "loading-container"], ["src", "../../assets/logo.svg", 1, "logo"], [1, "progress"], [1, "progress-value"], [1, "rover-photos-container"], ["ngxMasonryItem", "", "class", "rover-photos-col", 4, "ngFor", "ngForOf"], [1, "show-more-container"], ["class", "show-more", "aria-label", "show more images", 3, "click", 4, "ngIf"], ["ngxMasonryItem", "", 1, "rover-photos-col"], [1, "rover-photo"], ["aria-label", "zoom in", 1, "rover-image", 3, "alt", "src", "click"], [1, "button-container"], ["mat-icon-button", "", 3, "click"], ["class", "star", 4, "ngIf"], [1, "rover-description"], [1, "details"], [1, "date"], [1, "source"], [1, "star"], ["aria-label", "show more images", 1, "show-more", 3, "click"], [1, "arrow"]], template: function RoverPhotosComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ngx-masonry", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RoverPhotosComponent_div_6_Template, 14, 9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "filter");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RoverPhotosComponent_button_9_Template, 4, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 2, ctx.display, ctx.searchText));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.limit < ctx.photos.length && !ctx.searchText);
    } }, directives: [ngx_masonry__WEBPACK_IMPORTED_MODULE_4__["NgxMasonryComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_masonry__WEBPACK_IMPORTED_MODULE_4__["NgxMasonryDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], pipes: [_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["FilterPipe"]], styles: [".rover-photos[_ngcontent-%COMP%] {\n  padding-top: 100px;\n}\n.rover-photos[_ngcontent-%COMP%]   #loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 200px;\n}\n.rover-photos[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  justify-content: center;\n  display: flex;\n  flex-direction: row;\n  max-width: 40%;\n  padding-bottom: 20px;\n}\n.rover-photos[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  justify-content: flex-start;\n  border-radius: 100px;\n  align-items: center;\n  position: relative;\n  padding: 0 5px;\n  display: flex;\n  height: 20px;\n  width: 40%;\n}\n.rover-photos[_ngcontent-%COMP%]   .progress-value[_ngcontent-%COMP%] {\n  animation: load 1s normal forwards;\n  box-shadow: 0 10px 40px -10px #fff;\n  border-radius: 100px;\n  background: rgba(150, 191, 70, 0.6);\n  height: 10px;\n  width: 0;\n}\n@keyframes load {\n  0% {\n    width: 0;\n  }\n  100% {\n    width: 100%;\n  }\n}\n.rover-photos-container[_ngcontent-%COMP%] {\n  width: 90vw;\n  margin-left: 70px;\n}\n.rover-photos-container[_ngcontent-%COMP%]   .rover-photos-col[_ngcontent-%COMP%] {\n  width: 15%;\n  padding: 0 10px;\n}\n.rover-photos-container[_ngcontent-%COMP%]   .rover-photos-col[_ngcontent-%COMP%]   .rover-photo[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  border-radius: 10px;\n  width: 100%;\n}\n.rover-photos-container[_ngcontent-%COMP%]   .rover-photos-col[_ngcontent-%COMP%]   .rover-photo[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: right;\n}\n.rover-photos-container[_ngcontent-%COMP%]   .rover-photos-col[_ngcontent-%COMP%]   .rover-photo[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  background-color: transparent;\n  box-shadow: none;\n  border: none;\n}\n.rover-photos-container[_ngcontent-%COMP%]   .rover-photos-col[_ngcontent-%COMP%]   .rover-photo[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%] {\n  color: #96BF46;\n  font-size: 30px;\n}\n.rover-photos-container[_ngcontent-%COMP%]   .rover-photos-col[_ngcontent-%COMP%]   .rover-photo[_ngcontent-%COMP%]   .button-container[_ngcontent-%COMP%]   .star[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.rover-photos-container[_ngcontent-%COMP%]   .rover-photos-col[_ngcontent-%COMP%]   .rover-photo[_ngcontent-%COMP%]   .rover-image[_ngcontent-%COMP%] {\n  border-radius: 20px;\n}\n.rover-photos-container[_ngcontent-%COMP%]   .rover-photos-col[_ngcontent-%COMP%]   .rover-photo[_ngcontent-%COMP%]   .rover-image[_ngcontent-%COMP%]:hover {\n  cursor: zoom-in;\n}\n.rover-photos-container[_ngcontent-%COMP%]   .rover-photos-col[_ngcontent-%COMP%]   .rover-photo[_ngcontent-%COMP%]   .rover-description[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  padding: 0 0 20px 10px;\n}\n.rover-photos-container[_ngcontent-%COMP%]   .rover-photos-col[_ngcontent-%COMP%]   .rover-photo[_ngcontent-%COMP%]   .rover-description[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n.rover-photos-container[_ngcontent-%COMP%]   .rover-photos-col[_ngcontent-%COMP%]   .rover-photo[_ngcontent-%COMP%]   .rover-description[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n.rover-photos-container[_ngcontent-%COMP%]   .rover-photos-col[_ngcontent-%COMP%]   .rover-photo[_ngcontent-%COMP%]   .rover-description[_ngcontent-%COMP%]   .source[_ngcontent-%COMP%] {\n  color: gray;\n  font-size: 12px;\n}\n@media screen and (max-width: 1920px) {\n  .rover-photos-container[_ngcontent-%COMP%] {\n    margin-left: 45px;\n  }\n  .rover-photos-container[_ngcontent-%COMP%]   .rover-photos-col[_ngcontent-%COMP%] {\n    width: 18%;\n  }\n}\n@media screen and (max-width: 1350px) {\n  .rover-photos-container[_ngcontent-%COMP%] {\n    margin-left: 50px;\n  }\n  .rover-photos-container[_ngcontent-%COMP%]   .rover-photos-col[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n}\n@media screen and (max-width: 600px) {\n  .rover-photos-container[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n  .rover-photos-container[_ngcontent-%COMP%]   .rover-photos-col[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.rover-photos[_ngcontent-%COMP%]   .show-more-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding-bottom: 50px;\n}\n.rover-photos[_ngcontent-%COMP%]   .show-more-container[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  background-color: transparent;\n  color: #FFF;\n  box-shadow: none;\n  border: none;\n  font-size: 14px;\n  font-weight: 700;\n  color: #96BF46;\n}\n.rover-photos[_ngcontent-%COMP%]   .show-more-container[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.rover-photos[_ngcontent-%COMP%]   .show-more-container[_ngcontent-%COMP%]   .show-more[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  color: #96BF46;\n  font-weight: 700;\n  font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JvdmVyLXBob3Rvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUVFO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUdFO0VBQ0Usb0NBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFESjtBQUlFO0VBQ0Usa0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtBQUZKO0FBS0U7RUFDRTtJQUFLLFFBQUE7RUFGUDtFQUdFO0lBQU8sV0FBQTtFQUFUO0FBQ0Y7QUFFRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtBQUFKO0FBRUk7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQUFOO0FBRU07RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFBUjtBQUVRO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQVY7QUFFVTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFBWjtBQUdVO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFEWjtBQUdZO0VBQ0UsZUFBQTtBQURkO0FBTVE7RUFDRSxtQkFBQTtBQUpWO0FBTVU7RUFDRSxlQUFBO0FBSlo7QUFRUTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFOVjtBQVFVO0VBQ0UsZ0JBQUE7QUFOWjtBQVNVO0VBQ0UsaUJBQUE7QUFQWjtBQVVVO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFSWjtBQWNJO0VBbkVGO0lBb0VFLGlCQUFBO0VBWEY7RUFhRTtJQUNFLFVBQUE7RUFYSjtBQUNGO0FBY0k7RUEzRUY7SUE0RUksaUJBQUE7RUFYSjtFQWFJO0lBQ0UsVUFBQTtFQVhOO0FBQ0Y7QUFjSTtFQW5GRjtJQW9GSSxjQUFBO0VBWEo7RUFhSTtJQUNFLFdBQUE7RUFYTjtBQUNGO0FBZUU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQWJKO0FBZUk7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBYk47QUFlTTtFQUNFLGVBQUE7QUFiUjtBQWdCTTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFkUiIsImZpbGUiOiJyb3Zlci1waG90b3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm92ZXItcGhvdG9zIHtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuXG4gICNsb2FkaW5nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDIwMHB4O1xuICB9XG4gIFxuICAubG9nbyB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1heC13aWR0aDogNDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICAucHJvZ3Jlc3Mge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsMC4xKTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMCA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDQwJTtcbiAgfVxuICBcbiAgLnByb2dyZXNzLXZhbHVlIHtcbiAgICBhbmltYXRpb246IGxvYWQgMXMgbm9ybWFsIGZvcndhcmRzO1xuICAgIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IC0xMHB4ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNTAsMTkxLDcwLDAuNik7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGxvYWQge1xuICAgIDAlIHsgd2lkdGg6IDA7IH1cbiAgICAxMDAlIHsgd2lkdGg6IDEwMCU7IH1cbiAgfVxuXG4gICYtY29udGFpbmVyIHtcbiAgICB3aWR0aDogOTB2dztcbiAgICBtYXJnaW4tbGVmdDogNzBweDtcblxuICAgIC5yb3Zlci1waG90b3MtY29sIHtcbiAgICAgIHdpZHRoOiAxNSU7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XG5cbiAgICAgIC5yb3Zlci1waG90byB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGxlZnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgIC5idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogcmlnaHQ7XG5cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zdGFyIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOTZCRjQ2O1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5yb3Zlci1pbWFnZSB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcblxuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiB6b29tLWluO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5yb3Zlci1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBsZWZ0O1xuICAgICAgICAgIHBhZGRpbmc6IDAgMCAyMHB4IDEwcHg7XG5cbiAgICAgICAgICAuZGV0YWlscyB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kYXRlIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zb3VyY2Uge1xuICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkyMHB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG5cbiAgICAucm92ZXItcGhvdG9zLWNvbCB7XG4gICAgICB3aWR0aDogMTglO1xuICAgIH1cbiAgfVxuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTM1MHB4KSB7XG4gICAgICBtYXJnaW4tbGVmdDogNTBweDtcblxuICAgICAgLnJvdmVyLXBob3Rvcy1jb2wge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICBtYXJnaW4tbGVmdDogMDtcblxuICAgICAgLnJvdmVyLXBob3Rvcy1jb2wge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuc2hvdy1tb3JlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcblxuICAgIC5zaG93LW1vcmUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgY29sb3I6ICNGRkY7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGNvbG9yOiAjOTZCRjQ2O1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICAuYXJyb3cge1xuICAgICAgICBjb2xvcjogIzk2QkY0NjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoverPhotosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-rover-photos',
                templateUrl: './rover-photos.component.html',
                providers: [_nasa_photos_service__WEBPACK_IMPORTED_MODULE_1__["NasaPhotosService"]],
                styleUrls: ['./rover-photos.component.scss']
            }]
    }], function () { return [{ type: _nasa_photos_service__WEBPACK_IMPORTED_MODULE_1__["NasaPhotosService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, { searchText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], likedPhotos: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _liked_photos_liked_photos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./liked-photos/liked-photos.component */ "ISnN");
/* harmony import */ var _rover_photos_rover_photos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rover-photos/rover-photos.component */ "lcXL");






const routes = [
    { path: 'liked-photos', component: _liked_photos_liked_photos_component__WEBPACK_IMPORTED_MODULE_2__["LikedPhotosComponent"] },
    { path: '', component: _rover_photos_rover_photos_component__WEBPACK_IMPORTED_MODULE_3__["RoverPhotosComponent"], }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map