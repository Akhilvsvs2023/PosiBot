"use strict";
(self["webpackChunkweb_speech_angular"] = self["webpackChunkweb_speech_angular"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _web_speech_web_speech_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-speech/web-speech.component */ 5938);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);




const routes = [
    {
        path: '',
        component: _web_speech_web_speech_component__WEBPACK_IMPORTED_MODULE_0__.WebSpeechComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: ''
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_modal_help_modal_help_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/modal-help/modal-help.component */ 4186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);







class AppComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openHelp() {
        this.dialog.open(_shared_components_modal_help_modal_help_component__WEBPACK_IMPORTED_MODULE_0__.ModalHelpComponent);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["wsa-root"]], decls: 9, vars: 0, consts: [["color", "primary"], [1, "fill-space"], ["mat-icon-button", "", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "mat-toolbar", 0)(2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Voice-Driven Web Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_5_listener() { return ctx.openHelp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "help");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_6__.MatToolbar], styles: [".fill-space[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maWxsLXNwYWNlIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4iXX0= */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _web_speech_web_speech_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./web-speech/web-speech.module */ 6213);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tooltip */ 6896);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);







 // Import MatTableModule


class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _web_speech_web_speech_module__WEBPACK_IMPORTED_MODULE_6__.WebSpeechModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        _web_speech_web_speech_module__WEBPACK_IMPORTED_MODULE_6__.WebSpeechModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_9__.MatTooltipModule] }); })();


/***/ }),

/***/ 4186:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/modal-help/modal-help.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalHelpComponent": () => (/* binding */ ModalHelpComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 1484);



class ModalHelpComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModalHelpComponent.ɵfac = function ModalHelpComponent_Factory(t) { return new (t || ModalHelpComponent)(); };
ModalHelpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalHelpComponent, selectors: [["wsa-modal-help"]], decls: 8, vars: 0, consts: [[1, "mat-typography"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""]], template: function ModalHelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-content", 0)(1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome to POSIBOT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Data persisting through voice recognisation. As a stepping stone for the further developement of product we are introducing a chat bot which captures name and date of birth of a particular user. Now as this chat bot is under development, here is how we persist data. My name is \"YOUR_NAME\" my dob is \"YOUR_DOB\" ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions", 1)(6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Ok");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogContent, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogActions], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n  display: table;\n  margin-bottom: 15px;\n\n}\n\ntable[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border: 1px solid grey;\n}\n\ncaption[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLWhlbHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJtb2RhbC1oZWxwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbiAgZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbn1cblxudGFibGUsIHRkLCB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGdyZXk7XG59XG5cbmNhcHRpb24ge1xuICBmb250LXNpemU6IDE1cHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ 793:
/*!****************************************************!*\
  !*** ./src/app/shared/material/material.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sidenav */ 6643);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ 6517);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 1484);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);












class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule], exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButtonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_3__.MatCardModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormFieldModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.MatIconModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbarModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelectModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_9__.MatListModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_10__.MatSidenavModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule] }); })();


/***/ }),

/***/ 1296:
/*!*******************************************!*\
  !*** ./src/app/shared/model/languages.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultLanguage": () => (/* binding */ defaultLanguage),
/* harmony export */   "languages": () => (/* binding */ languages)
/* harmony export */ });
const languages = ['en-US', 'es-ES'];
const defaultLanguage = languages[0];


/***/ }),

/***/ 1679:
/*!**********************************************!*\
  !*** ./src/app/shared/model/speech-error.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeechError": () => (/* binding */ SpeechError)
/* harmony export */ });
var SpeechError;
(function (SpeechError) {
    SpeechError["NoSpeech"] = "no-speech";
    SpeechError["AudioCapture"] = "audio-capture";
    SpeechError["NotAllowed"] = "not-allowed";
    SpeechError["Unknown"] = "unknown";
})(SpeechError || (SpeechError = {}));


/***/ }),

/***/ 7148:
/*!**********************************************!*\
  !*** ./src/app/shared/model/speech-event.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeechEvent": () => (/* binding */ SpeechEvent)
/* harmony export */ });
var SpeechEvent;
(function (SpeechEvent) {
    SpeechEvent[SpeechEvent["Start"] = 0] = "Start";
    SpeechEvent[SpeechEvent["End"] = 1] = "End";
    SpeechEvent[SpeechEvent["FinalContent"] = 2] = "FinalContent";
    SpeechEvent[SpeechEvent["InterimContent"] = 3] = "InterimContent";
})(SpeechEvent || (SpeechEvent = {}));


/***/ }),

/***/ 3733:
/*!***********************************************************!*\
  !*** ./src/app/shared/services/actions/action-context.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionContext": () => (/* binding */ ActionContext)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _change_theme_strategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-theme-strategy */ 2822);
/* harmony import */ var _change_title_strategy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-title-strategy */ 3736);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _web_apis_speech_synthesizer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../web-apis/speech-synthesizer.service */ 6488);





class ActionContext {
    constructor(changeThemeStrategy, changeTitleStrategy, titleService, speechSynthesizer) {
        this.changeThemeStrategy = changeThemeStrategy;
        this.changeTitleStrategy = changeTitleStrategy;
        this.titleService = titleService;
        this.speechSynthesizer = speechSynthesizer;
        this.changeTitleStrategy.titleService = titleService;
    }
    processMessage(message, language) {
        const msg = message.toLowerCase();
        const hasChangedStrategy = this.hasChangedStrategy(msg, language);
        let isFinishSignal = false;
        if (!hasChangedStrategy) {
            isFinishSignal = this.isFinishSignal(msg, language);
        }
        if (!hasChangedStrategy && !isFinishSignal) {
            this.runAction(message, language);
        }
    }
    runAction(input, language) {
        if (this.currentStrategy) {
            this.currentStrategy.runAction(input, language);
        }
    }
    setStrategy(strategy) {
        this.currentStrategy = strategy;
    }
    hasChangedStrategy(message, language) {
        let strategy;
        if (message === this.changeThemeStrategy.getStartSignal(language)) {
            strategy = this.changeThemeStrategy;
        }
        if (message === this.changeTitleStrategy.getStartSignal(language)) {
            strategy = this.changeTitleStrategy;
        }
        if (strategy) {
            this.setStrategy(strategy);
            this.speechSynthesizer.speak(strategy.getInitialResponse(language), language);
            return true;
        }
        return false;
    }
    isFinishSignal(message, language) {
        if (message === this.changeThemeStrategy.getEndSignal(language) ||
            message === this.changeTitleStrategy.getEndSignal(language)) {
            if (this.currentStrategy) {
                this.speechSynthesizer.speak(this.currentStrategy.getFinishResponse(language), language);
            }
            this.setStrategy(undefined);
            return true;
        }
        return false;
    }
}
ActionContext.ɵfac = function ActionContext_Factory(t) { return new (t || ActionContext)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_change_theme_strategy__WEBPACK_IMPORTED_MODULE_1__.ChangeThemeStrategy), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_change_title_strategy__WEBPACK_IMPORTED_MODULE_2__.ChangeTitleStrategy), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_web_apis_speech_synthesizer_service__WEBPACK_IMPORTED_MODULE_4__.SpeechSynthesizerService)); };
ActionContext.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ActionContext, factory: ActionContext.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 440:
/*!************************************************************!*\
  !*** ./src/app/shared/services/actions/action-strategy.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionStrategy": () => (/* binding */ ActionStrategy)
/* harmony export */ });
class ActionStrategy {
    constructor() {
        this.mapStartSignal = new Map();
        this.mapEndSignal = new Map();
        this.mapInitResponse = new Map();
        this.mapFinishResponse = new Map();
        this.mapActionDone = new Map();
        this.mapFinishResponse.set('en-US', 'Your action has been completed.');
        this.mapFinishResponse.set('es-ES', 'La accion ha sido finalizada.');
    }
    getStartSignal(language) {
        return this.mapStartSignal.get(language) || '';
    }
    getEndSignal(language) {
        return this.mapEndSignal.get(language) || '';
    }
    getInitialResponse(language) {
        return this.mapInitResponse.get(language) || '';
    }
    getFinishResponse(language) {
        return this.mapFinishResponse.get(language) || '';
    }
}


/***/ }),

/***/ 2822:
/*!******************************************************************!*\
  !*** ./src/app/shared/services/actions/change-theme-strategy.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeThemeStrategy": () => (/* binding */ ChangeThemeStrategy)
/* harmony export */ });
/* harmony import */ var _action_strategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-strategy */ 440);
/* harmony import */ var _style_manager_style_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../style-manager/style-manager */ 2706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _web_apis_speech_synthesizer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web-apis/speech-synthesizer.service */ 6488);




class ChangeThemeStrategy extends _action_strategy__WEBPACK_IMPORTED_MODULE_0__.ActionStrategy {
    constructor(speechSynthesizer) {
        super();
        this.speechSynthesizer = speechSynthesizer;
        this.mapThemes = new Map();
        this.styleManager = new _style_manager_style_manager__WEBPACK_IMPORTED_MODULE_1__.StyleManager();
        this.mapStartSignal.set('en-US', 'perform change theme');
        this.mapStartSignal.set('es-ES', 'iniciar cambio de tema');
        this.mapEndSignal.set('en-US', 'finish change theme');
        this.mapEndSignal.set('es-ES', 'finalizar cambio de tema');
        this.mapInitResponse.set('en-US', 'Please, tell me your theme name.');
        this.mapInitResponse.set('es-ES', 'Por favor, mencione el nombre de tema.');
        this.mapActionDone.set('en-US', 'Changing Theme of the Application to');
        this.mapActionDone.set('es-ES', 'Cambiando el tema de la Aplicación a');
        this.mapThemes.set('en-US', [
            {
                keyword: 'deep purple',
                href: 'deeppurple-amber.css',
            },
            {
                keyword: 'indigo',
                href: 'indigo-pink.css',
            },
            {
                keyword: 'pink',
                href: 'pink-bluegrey.css',
            },
            {
                keyword: 'purple',
                href: 'purple-green.css',
            },
        ]);
        this.mapThemes.set('es-ES', [
            {
                keyword: 'púrpura',
                href: 'deeppurple-amber.css',
            },
            {
                keyword: 'azul',
                href: 'indigo-pink.css',
            },
            {
                keyword: 'rosa',
                href: 'pink-bluegrey.css',
            },
            {
                keyword: 'verde',
                href: 'purple-green.css',
            },
        ]);
    }
    runAction(input, language) {
        const themes = this.mapThemes.get(language) || [];
        const theme = themes.find((th) => {
            return input.toLocaleLowerCase() === th.keyword;
        });
        if (theme) {
            this.styleManager.removeStyle('theme');
            this.styleManager.setStyle('theme', `assets/theme/${theme.href}`);
            this.speechSynthesizer.speak(`${this.mapActionDone.get(language)}: ${theme.keyword}`, language);
        }
    }
}
ChangeThemeStrategy.ɵfac = function ChangeThemeStrategy_Factory(t) { return new (t || ChangeThemeStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_web_apis_speech_synthesizer_service__WEBPACK_IMPORTED_MODULE_3__.SpeechSynthesizerService)); };
ChangeThemeStrategy.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ChangeThemeStrategy, factory: ChangeThemeStrategy.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 3736:
/*!******************************************************************!*\
  !*** ./src/app/shared/services/actions/change-title-strategy.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangeTitleStrategy": () => (/* binding */ ChangeTitleStrategy)
/* harmony export */ });
/* harmony import */ var _action_strategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-strategy */ 440);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _web_apis_speech_synthesizer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../web-apis/speech-synthesizer.service */ 6488);



class ChangeTitleStrategy extends _action_strategy__WEBPACK_IMPORTED_MODULE_0__.ActionStrategy {
    constructor(speechSynthesizer) {
        super();
        this.speechSynthesizer = speechSynthesizer;
        this.mapStartSignal.set('en-US', 'perform change title');
        this.mapStartSignal.set('es-ES', 'iniciar cambio de título');
        this.mapEndSignal.set('en-US', 'finish change title');
        this.mapEndSignal.set('es-ES', 'finalizar cambio de título');
        this.mapInitResponse.set('en-US', 'Please, tell me the new title');
        this.mapInitResponse.set('es-ES', 'Por favor, mencione el nuevo título');
        this.mapActionDone.set('en-US', 'Changing title of the Application to');
        this.mapActionDone.set('es-ES', 'Cambiando el título de la Aplicación a');
    }
    set titleService(title) {
        this.title = title;
    }
    runAction(input, language) {
        this.title?.setTitle(input);
        this.speechSynthesizer.speak(`${this.mapActionDone.get(language)}: ${input}`, language);
    }
}
ChangeTitleStrategy.ɵfac = function ChangeTitleStrategy_Factory(t) { return new (t || ChangeTitleStrategy)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_web_apis_speech_synthesizer_service__WEBPACK_IMPORTED_MODULE_2__.SpeechSynthesizerService)); };
ChangeTitleStrategy.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ChangeTitleStrategy, factory: ChangeTitleStrategy.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2076:
/*!***********************************************************************!*\
  !*** ./src/app/shared/services/web-apis/speech-recognizer.service.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeechRecognizerService": () => (/* binding */ SpeechRecognizerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2378);
/* harmony import */ var _model_speech_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/speech-error */ 1679);
/* harmony import */ var _model_speech_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../model/speech-event */ 7148);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class SpeechRecognizerService {
    constructor(ngZone) {
        this.ngZone = ngZone;
        this.isListening = false;
    }
    initialize(language) {
        if ('webkitSpeechRecognition' in window) {
            this.recognition = new webkitSpeechRecognition();
            this.recognition.continuous = true;
            this.recognition.interimResults = true;
            this.setLanguage(language);
            return true;
        }
        return false;
    }
    setLanguage(language) {
        this.language = language;
        this.recognition.lang = language;
    }
    start() {
        if (!this.recognition) {
            return;
        }
        this.recognition.start();
        this.isListening = true;
    }
    onStart() {
        if (!this.recognition) {
            this.initialize(this.language);
        }
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
            this.recognition.onstart = () => {
                this.ngZone.run(() => {
                    observer.next({
                        event: _model_speech_event__WEBPACK_IMPORTED_MODULE_1__.SpeechEvent.Start
                    });
                });
            };
        });
    }
    onEnd() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
            this.recognition.onend = () => {
                this.ngZone.run(() => {
                    observer.next({
                        event: _model_speech_event__WEBPACK_IMPORTED_MODULE_1__.SpeechEvent.End
                    });
                    this.isListening = false;
                });
            };
        });
    }
    onResult() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
            this.recognition.onresult = (event) => {
                let interimContent = '';
                let finalContent = '';
                for (let i = event.resultIndex; i < event.results.length; ++i) {
                    if (event.results[i].isFinal) {
                        finalContent += event.results[i][0].transcript;
                        this.ngZone.run(() => {
                            observer.next({
                                event: _model_speech_event__WEBPACK_IMPORTED_MODULE_1__.SpeechEvent.FinalContent,
                                content: finalContent
                            });
                        });
                    }
                    else {
                        interimContent += event.results[i][0].transcript;
                        // console.log('interim transcript', event, interimContent);
                        this.ngZone.run(() => {
                            observer.next({
                                event: _model_speech_event__WEBPACK_IMPORTED_MODULE_1__.SpeechEvent.InterimContent,
                                content: interimContent
                            });
                        });
                    }
                }
            };
        });
    }
    onError() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
            this.recognition.onerror = (event) => {
                // tslint:disable-next-line:no-any
                const eventError = event.error;
                console.log('error', eventError);
                let error;
                switch (eventError) {
                    case 'no-speech':
                        error = _model_speech_error__WEBPACK_IMPORTED_MODULE_2__.SpeechError.NoSpeech;
                        break;
                    case 'audio-capture':
                        error = _model_speech_error__WEBPACK_IMPORTED_MODULE_2__.SpeechError.AudioCapture;
                        break;
                    case 'not-allowed':
                        error = _model_speech_error__WEBPACK_IMPORTED_MODULE_2__.SpeechError.NotAllowed;
                        break;
                    default:
                        error = _model_speech_error__WEBPACK_IMPORTED_MODULE_2__.SpeechError.Unknown;
                        break;
                }
                this.ngZone.run(() => {
                    observer.next({
                        error
                    });
                });
            };
        });
    }
    stop() {
        this.recognition.stop();
    }
}
SpeechRecognizerService.ɵfac = function SpeechRecognizerService_Factory(t) { return new (t || SpeechRecognizerService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone)); };
SpeechRecognizerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: SpeechRecognizerService, factory: SpeechRecognizerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 6488:
/*!************************************************************************!*\
  !*** ./src/app/shared/services/web-apis/speech-synthesizer.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeechSynthesizerService": () => (/* binding */ SpeechSynthesizerService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SpeechSynthesizerService {
    constructor() {
        this.initSynthesis();
    }
    initSynthesis() {
        this.speechSynthesizer = new SpeechSynthesisUtterance();
        this.speechSynthesizer.volume = 1;
        this.speechSynthesizer.rate = 1;
        this.speechSynthesizer.pitch = 0.2;
    }
    speak(message, language) {
        this.speechSynthesizer.lang = language;
        this.speechSynthesizer.text = message;
        speechSynthesis.speak(this.speechSynthesizer);
    }
}
SpeechSynthesizerService.ɵfac = function SpeechSynthesizerService_Factory(t) { return new (t || SpeechSynthesizerService)(); };
SpeechSynthesizerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpeechSynthesizerService, factory: SpeechSynthesizerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material/material.module */ 793);
/* harmony import */ var _components_modal_help_modal_help_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/modal-help/modal-help.component */ 4186);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);




class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule, _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_modal_help_modal_help_component__WEBPACK_IMPORTED_MODULE_3__.ModalHelpComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule], exports: [_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        _components_modal_help_modal_help_component__WEBPACK_IMPORTED_MODULE_3__.ModalHelpComponent] }); })();


/***/ }),

/***/ 2706:
/*!*******************************************************!*\
  !*** ./src/app/shared/style-manager/style-manager.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyleManager": () => (/* binding */ StyleManager)
/* harmony export */ });
/**
 * Class for managing stylesheets. Stylesheets are loaded into named slots so that they can be
 * removed or changed later.
 */
class StyleManager {
    /**
     * Set the stylesheet with the specified key.
     */
    setStyle(key, href) {
        getLinkElementForKey(key).setAttribute('href', href);
    }
    /**
     * Remove the stylesheet with the specified key.
     */
    removeStyle(key) {
        const existingLinkElement = getExistingLinkElementByKey(key);
        if (existingLinkElement) {
            document.head.removeChild(existingLinkElement);
        }
    }
}
function getLinkElementForKey(key) {
    return getExistingLinkElementByKey(key) || createLinkElementWithKey(key);
}
function getExistingLinkElementByKey(key) {
    return document.head.querySelector(`link[rel="stylesheet"].${getClassNameForKey(key)}`);
}
function createLinkElementWithKey(key) {
    const linkEl = document.createElement('link');
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.classList.add(getClassNameForKey(key));
    document.head.appendChild(linkEl);
    return linkEl;
}
function getClassNameForKey(key) {
    return `style-manager-${key}`;
}


/***/ }),

/***/ 5938:
/*!****************************************************!*\
  !*** ./src/app/web-speech/web-speech.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebSpeechComponent": () => (/* binding */ WebSpeechComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 8623);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _shared_model_languages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/model/languages */ 1296);
/* harmony import */ var _shared_model_speech_error__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/model/speech-error */ 1679);
/* harmony import */ var _shared_model_speech_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/model/speech-event */ 7148);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_services_web_apis_speech_recognizer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/services/web-apis/speech-recognizer.service */ 2076);
/* harmony import */ var _shared_services_actions_action_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/services/actions/action-context */ 3733);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 5074);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 7822);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 7371);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 9121);























function WebSpeechComponent_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const errorMessage_r15 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](errorMessage_r15);
  }
}

function WebSpeechComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebSpeechComponent_mat_option_8_Template_mat_option_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
      const mode_r16 = restoredCtx.$implicit;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r17.selectMode(mode_r16));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const mode_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", mode_r16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", mode_r16, " ");
  }
}

function WebSpeechComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebSpeechComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r19.stop());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "mic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}

function WebSpeechComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebSpeechComponent_ng_template_12_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r21.start());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "mic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}

function WebSpeechComponent_section_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section")(1, "mat-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 1, ctx_r5.transcript$));
  }
}

function WebSpeechComponent_th_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " SL ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function WebSpeechComponent_td_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r23.sl, " ");
  }
}

function WebSpeechComponent_th_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function WebSpeechComponent_td_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r24.name, " ");
  }
}

function WebSpeechComponent_th_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Date of Birth ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}

function WebSpeechComponent_td_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const element_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r25.dob, " ");
  }
}

function WebSpeechComponent_tr_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 29);
  }
}

function WebSpeechComponent_tr_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 30);
  }
}

const _c0 = function () {
  return [2, 5, 10, 20];
};

class WebSpeechComponent {
  constructor(speechRecognizer, actionContext, http, cdr) {
    this.speechRecognizer = speechRecognizer;
    this.actionContext = actionContext;
    this.http = http;
    this.cdr = cdr;
    this.languages = _shared_model_languages__WEBPACK_IMPORTED_MODULE_1__.languages;
    this.currentLanguage = _shared_model_languages__WEBPACK_IMPORTED_MODULE_1__.defaultLanguage;
    this.modes = ['Speak', 'Search'];
    this.modeSelect = 'Speak';
    this.defaultError$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.displayedColumns = ['sl', 'name', 'dob'];
    this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableDataSource(); // Use MatTableDataSource for pagination

    this.pageSize = 5;
    this.currentPage = 0;
    this.totalSize = 0;
  }

  ngOnInit() {
    this.getDetails();
    const webSpeechReady = this.speechRecognizer.initialize(this.currentLanguage);

    if (webSpeechReady) {
      this.initRecognition();
    } else {
      this.errorMessage$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)('Your Browser is not supported. Please try Google Chrome.');
    }
  }

  start() {
    if (this.speechRecognizer.isListening) {
      this.stop();
      return;
    }

    this.defaultError$.next(undefined);
    this.speechRecognizer.start();
  }

  stop() {
    this.totalTranscript = undefined;
    this.speechRecognizer.stop();
  }

  selectMode(mode) {
    if (this.speechRecognizer.isListening) {
      this.stop();
    }

    this.speechRecognizer.setLanguage(this.currentLanguage);
    this.modeSelect = mode;
  }

  getDetails() {
    this.http.get("http://localhost:8089/client/getClientDetails").subscribe(x => {
      this.totalTranscript = undefined;
      this.dataSource.data = x;
      this.dataSource.paginator = this.paginator;
      this.array = this.dataSource.data;
      this.totalSize = this.array.length;
      this.cdr.detectChanges();
      console.log(this.dataSource);
    });
  }

  onPaginateChange(event) {
    if (this.currentPage !== event.pageIndex) {
      console.log(event.pageIndex);
      this.currentPage = event.pageIndex;
      this.pageSize = event.pageSize;
    }
  }

  reset() {
    this.totalTranscript = '';
  }

  postMessage() {
    if (this.modeSelect === 'Speak') {
      this.http.post("http://localhost:8089/client/saveClientDetails", this.totalTranscript, {
        responseType: 'text'
      }).subscribe(x => {
        console.log(x);

        if (x === "Data saved successfully.") {
          this.totalTranscript = undefined;
        }

        this.getDetails();
      });
    } else {
      this.http.post("http://localhost:8089/client/fetchClientDetails", this.totalTranscript).subscribe(x => {
        this.totalTranscript = undefined;
        this.dataSource.data = x;
        this.dataSource.paginator = this.paginator;
        this.array = this.dataSource.data;
        this.totalSize = this.array.length;
        this.cdr.detectChanges();
        console.log(this.dataSource);
      });
    }
  }

  initRecognition() {
    this.transcript$ = this.speechRecognizer.onResult().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)(notification => {
      this.processNotification(notification);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(notification => notification.content || ''));
    this.listening$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this.speechRecognizer.onStart(), this.speechRecognizer.onEnd()).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(notification => notification.event === _shared_model_speech_event__WEBPACK_IMPORTED_MODULE_8__.SpeechEvent.Start));
    this.errorMessage$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.merge)(this.speechRecognizer.onError(), this.defaultError$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(data => {
      if (data === undefined) {
        return '';
      }

      if (typeof data === 'string') {
        return data;
      }

      let message;

      switch (data.error) {
        case _shared_model_speech_error__WEBPACK_IMPORTED_MODULE_9__.SpeechError.NotAllowed:
          message = `Cannot run the demo.
            Your browser is not authorized to access your microphone.
            Verify that your browser has access to your microphone and try again.`;
          break;

        case _shared_model_speech_error__WEBPACK_IMPORTED_MODULE_9__.SpeechError.NoSpeech:
          message = `No speech has been detected. Please try again.`;
          break;

        case _shared_model_speech_error__WEBPACK_IMPORTED_MODULE_9__.SpeechError.AudioCapture:
          message = `Microphone is not available. Plese verify the connection of your microphone and try again.`;
          break;

        default:
          message = '';
          break;
      }

      return message;
    }));
  }

  processNotification(notification) {
    if (notification.event === _shared_model_speech_event__WEBPACK_IMPORTED_MODULE_8__.SpeechEvent.FinalContent) {
      const message = notification.content?.trim() || '';
      this.actionContext.processMessage(message, this.currentLanguage); // this.actionContext.runAction(message, this.currentLanguage);

      this.totalTranscript = this.totalTranscript ? `${this.totalTranscript}\n${message}` : notification.content; //s this.postMessage()
    }
  }

}

WebSpeechComponent.ɵfac = function WebSpeechComponent_Factory(t) {
  return new (t || WebSpeechComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_web_apis_speech_recognizer_service__WEBPACK_IMPORTED_MODULE_10__.SpeechRecognizerService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_actions_action_context__WEBPACK_IMPORTED_MODULE_11__.ActionContext), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef));
};

WebSpeechComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: WebSpeechComponent,
  selectors: [["wsa-web-speech"]],
  viewQuery: function WebSpeechComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    }
  },
  decls: 44,
  vars: 22,
  consts: [["class", "notification", 4, "ngIf"], [3, "value", "valueChange"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["mat-fab", "", 3, "click", 4, "ngIf", "ngIfElse"], ["mic", ""], [4, "ngIf"], [1, "speech-result-width"], ["matInput", "", "placeholder", "Speech Input Result", "rows", "15", "disabled", "true", 3, "value"], ["mat-fab", "", "matTooltip", "Send data", 2, "border-radius", "0", "width", "100px", "height", "50px", "margin-bottom", "10px", "margin-right", "10px", 3, "click"], ["mat-fab", "", "color", "warn", "matTooltip", "Reset speech", 2, "border-radius", "0", "width", "100px", "height", "50px", 3, "click"], [1, "container", "mt-5"], [1, "text-center"], ["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "sl"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["matColumnDef", "dob"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["aria-label", "Select page of periodic elements", 3, "pageSize", "pageSizeOptions", "showFirstLastButtons", "length", "pageIndex", "page"], ["paginator", ""], [1, "notification"], [3, "value", "click"], ["mat-fab", "", 3, "click"], [1, "soundwave"], [1, "notification", "mat-elevation-z4"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]],
  template: function WebSpeechComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WebSpeechComponent_mat_card_1_Template, 2, 1, "mat-card", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section")(4, "mat-form-field")(5, "mat-label");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Select your mode");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-select", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function WebSpeechComponent_Template_mat_select_valueChange_7_listener($event) {
        return ctx.modeSelect = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WebSpeechComponent_mat_option_8_Template, 2, 2, "mat-option", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WebSpeechComponent_button_10_Template, 3, 0, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, WebSpeechComponent_ng_template_12_Template, 3, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WebSpeechComponent_section_14_Template, 4, 3, "section", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section")(17, "mat-form-field", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "textarea", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section")(20, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebSpeechComponent_Template_button_click_20_listener() {
        return ctx.postMessage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "send");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WebSpeechComponent_Template_button_click_23_listener() {
        return ctx.reset();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "cancel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section")(27, "div", 10)(28, "h2", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Client Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "table", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](31, 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, WebSpeechComponent_th_32_Template, 2, 0, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, WebSpeechComponent_td_33_Template, 2, 1, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](34, 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, WebSpeechComponent_th_35_Template, 2, 0, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, WebSpeechComponent_td_36_Template, 2, 1, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](37, 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, WebSpeechComponent_th_38_Template, 2, 0, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, WebSpeechComponent_td_39_Template, 2, 1, "td", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, WebSpeechComponent_tr_40_Template, 1, 0, "tr", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, WebSpeechComponent_tr_41_Template, 1, 0, "tr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-paginator", 20, 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("page", function WebSpeechComponent_Template_mat_paginator_page_42_listener($event) {
        return ctx.onPaginateChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }

    if (rf & 2) {
      const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 15, ctx.errorMessage$));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.modeSelect);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.modes);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 17, ctx.listening$))("ngIfElse", _r3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 19, ctx.transcript$));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.totalTranscript || "");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx.pageSize)("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0))("showFirstLastButtons", true)("length", ctx.totalSize)("pageIndex", ctx.currentPage);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatRow, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_13__.MatPaginator, _angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
  styles: [".speech-result-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  text-align: justify;\n  text-align-last: center;\n}\n\nsection[_ngcontent-%COMP%] {\n  padding: 15px;\n  text-align: center;\n}\n\n.mat-input-element[_ngcontent-%COMP%]:disabled {\n  color: rgba(0, 0, 0, 0.9);\n}\n\n.notification[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.soundwave[_ngcontent-%COMP%] {\n  animation: soundwave 0.7s infinite;\n}\n\n@keyframes soundwave {\n  from {\n    opacity: 0.5;\n    color: #ffffff;\n  }\n  20% {\n    color: #ffffff;\n    opacity: 0.6;\n  }\n  35% {\n    color: #ffffff;\n    opacity: 0.9;\n  }\n  45% {\n    color: #ffffff;\n    opacity: 1;\n  }\n  55% {\n    color: #ffffff;\n    opacity: 0.9;\n  }\n  to {\n    color: #ffffff;\n    opacity: 0.5;\n  }\n}\n\n\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  background-color: #f5f5f5; \n  font-weight: bold;\n  padding: 10px;\n  text-align: center;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  padding: 1px; \n}\n\n.mat-paginator[_ngcontent-%COMP%] {\n  margin-top: 20px; \n}\n\n\n\n.mat-paginator[_ngcontent-%COMP%]   .mat-button[_ngcontent-%COMP%] {\n  min-width: 40px; \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYi1zcGVlY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0VBQ1o7RUFDQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGNBQWM7SUFDZCxZQUFZO0VBQ2Q7QUFDRjs7QUFFQSxzQkFBc0I7O0FBQ3RCO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UseUJBQXlCLEVBQUUscUNBQXFDO0VBQ2hFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWSxFQUFFLDRCQUE0QjtBQUM1Qzs7QUFFQTtFQUNFLGdCQUFnQixFQUFFLDBCQUEwQjtBQUM5Qzs7QUFFQSw4Q0FBOEM7O0FBQzlDO0VBQ0UsZUFBZSxFQUFFLHdDQUF3QztBQUMzRCIsImZpbGUiOiJ3ZWItc3BlZWNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BlZWNoLXJlc3VsdC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ZXh0YXJlYSB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHRleHQtYWxpZ24tbGFzdDogY2VudGVyO1xufVxuXG5zZWN0aW9uIHtcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LWlucHV0LWVsZW1lbnQ6ZGlzYWJsZWQge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjkpO1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnNvdW5kd2F2ZSB7XG4gIGFuaW1hdGlvbjogc291bmR3YXZlIDAuN3MgaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgc291bmR3YXZlIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIDIwJSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG4gIDM1JSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgb3BhY2l0eTogMC45O1xuICB9XG4gIDQ1JSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICA1NSUge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIG9wYWNpdHk6IDAuOTtcbiAgfVxuICB0byB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgb3BhY2l0eTogMC41O1xuICB9XG59XG5cbi8qIGFwcC5jb21wb25lbnQuY3NzICovXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7IC8qIExpZ2h0IGdyYXkgYmFja2dyb3VuZCBmb3IgaGVhZGVyICovXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYXQtY2VsbCB7XG4gIHBhZGRpbmc6IDFweDsgLyogUGFkZGluZyBmb3IgdGFibGUgY2VsbHMgKi9cbn1cblxuLm1hdC1wYWdpbmF0b3Ige1xuICBtYXJnaW4tdG9wOiAyMHB4OyAvKiBTcGFjZSBhYm92ZSBwYWdpbmF0b3IgKi9cbn1cblxuLyogT3B0aW9uYWw6IFN0eWxlIGZvciB0aGUgcGFnaW5hdG9yIGJ1dHRvbnMgKi9cbi5tYXQtcGFnaW5hdG9yIC5tYXQtYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA0MHB4OyAvKiBNaW5pbXVtIHdpZHRoIGZvciBwYWdpbmF0b3IgYnV0dG9ucyAqL1xufSJdfQ== */"],
  changeDetection: 0
});

/***/ }),

/***/ 6213:
/*!*************************************************!*\
  !*** ./src/app/web-speech/web-speech.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebSpeechModule": () => (/* binding */ WebSpeechModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _web_speech_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./web-speech.component */ 5938);
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/material/material.module */ 793);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/paginator */ 6060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



 // Import MatTableModule


class WebSpeechModule {
}
WebSpeechModule.ɵfac = function WebSpeechModule_Factory(t) { return new (t || WebSpeechModule)(); };
WebSpeechModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: WebSpeechModule });
WebSpeechModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginatorModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WebSpeechModule, { declarations: [_web_speech_component__WEBPACK_IMPORTED_MODULE_5__.WebSpeechComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _shared_material_material_module__WEBPACK_IMPORTED_MODULE_2__.MaterialModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_3__.MatTableModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_4__.MatPaginatorModule] }); })();


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map