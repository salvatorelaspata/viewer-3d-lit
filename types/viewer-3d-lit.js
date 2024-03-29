var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { applyTextureOnMesh, use3DViewer } from './hook/use3DViewer.js';
let Viewer3d = class Viewer3d extends LitElement {
    constructor() {
        super();
        // the path is local or remote
        // if texture is not defined, a default texture is applied (generateTexture)
        this.object = '';
        this.texture = '';
        this.background = '';
        // React - useState
        this.scene = {
            obj: null,
            hdrEquirect: null,
            texture: null,
        };
        this.isLoaded = false;
    }
    firstUpdated() {
        import('viewer-3d-lit-loader/dist/viewer-3d-lit-loader.js');
        const loader = document.createElement('viewer-3d-lit-loader');
        loader.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
        loader.width = document.body.clientWidth;
        loader.height = window.innerHeight;
        this.loader && this.loader.appendChild(loader);
        const aUse = async () => {
            const { obj, hdrEquirect, texture } = await use3DViewer(this.mount, {
                object: {
                    path: this.object,
                    fileName: '',
                    type: this._getExtension(this.object),
                },
                texture: {
                    path: this.texture,
                    fileName: '',
                },
                background: {
                    path: this.background,
                    fileName: '',
                },
            });
            this.scene = { obj, hdrEquirect, texture };
            this.isLoaded = true;
        };
        aUse();
    }
    _getExtension(path) {
        var _a;
        const _path = path.split('?')[0]; // remove query string
        const extension = (_a = _path.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase();
        if (extension === 'obj')
            return 'obj';
        if (extension === 'fbx')
            return 'fbx';
        if (extension === 'json')
            return 'json';
        if (extension === 'usdz')
            return 'usdz';
        else
            throw new Error('Extension not supported');
    }
    onClickViewer(e) {
        e.stopPropagation();
        const { obj, hdrEquirect, texture } = this.scene;
        this.dispatchEvent(new CustomEvent('viewer-click', {
            bubbles: true,
            detail: applyTextureOnMesh(obj, hdrEquirect, texture),
        }));
    }
    render() {
        console.log('isLoaded', this.isLoaded);
        return html `<div id="viewer" class=${classMap({ hidden: !this.isLoaded })}
        @click=${this.onClickViewer}></div>
        <div id="loader" class=${classMap({ hidden: this.isLoaded })}></div>`;
    }
};
Viewer3d.styles = css `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    :host {
      width: 100vw;
      height: 100vh;
      margin: 0 auto;
    }
    .hidden {
      display: none;
    }
    .bg-loader {
      position: relative;
      background-color: #000;
      width: 100wv;
      height: 100vh;
      z-index: 999;
    }
    .loader {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 2rem;
      color: red;
    }
    .noselect {
      -webkit-touch-callout: none; /* iOS Safari */
      -webkit-user-select: none; /* Safari */
      -khtml-user-select: none; /* Konqueror HTML */
      -moz-user-select: none; /* Old versions of Firefox */
      -ms-user-select: none; /* Internet Explorer/Edge */
      user-select: none; /* Non-prefixed version, currently
                            supported by Chrome, Edge, Opera and Firefox */
    }

    @media (prefers-color-scheme: light) {
    }
  `;
__decorate([
    property({ type: String })
], Viewer3d.prototype, "object", void 0);
__decorate([
    property({ type: String })
], Viewer3d.prototype, "texture", void 0);
__decorate([
    property({ type: String })
], Viewer3d.prototype, "background", void 0);
__decorate([
    query('#viewer')
], Viewer3d.prototype, "mount", void 0);
__decorate([
    query('#loader')
], Viewer3d.prototype, "loader", void 0);
__decorate([
    property({ type: Object, state: true })
], Viewer3d.prototype, "scene", void 0);
__decorate([
    property({ type: Boolean, state: true })
], Viewer3d.prototype, "isLoaded", void 0);
Viewer3d = __decorate([
    customElement('viewer-3d-lit')
], Viewer3d);
export { Viewer3d };
// customElements.define('viewer-3d-lit', Viewer3d)
