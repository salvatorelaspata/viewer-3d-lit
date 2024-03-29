import * as THREE from 'three'
import { LitElement, html, css } from 'lit'
import { customElement, property, query } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'
import { applyTextureOnMesh, use3DViewer } from './hook/use3DViewer.js'


@customElement('viewer-3d-lit')
export class Viewer3d extends LitElement {
  // the path is local or remote
  // if texture is not defined, a default texture is applied (generateTexture)
  @property({ type: String })
  object = ''
  @property({ type: String })
  texture = ''
  @property({ type: String })
  background = ''

  // React - useRef
  @query('#viewer')
  mount: HTMLDivElement | undefined

  @query('#loader')
  loader: HTMLCanvasElement | undefined

  // React - useState
  @property({ type: Object, state: true })
  scene: { obj: unknown; hdrEquirect: unknown; texture: unknown } = {
    obj: null,
    hdrEquirect: null,
    texture: null,
  }

  @property({ type: Boolean, state: true })
  isLoaded = false

  constructor () {
    super()
  }

  override firstUpdated () {

    
    import('viewer-3d-lit-loader/dist/viewer-3d-lit-loader.js');
    const loader = document.createElement('viewer-3d-lit-loader') as HTMLCanvasElement & { color: string }
    loader.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    loader.width = document.body.clientWidth;
    loader.height = window.innerHeight;
    this.loader && this.loader.appendChild(loader)

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
      })
      this.scene = { obj, hdrEquirect, texture }
      this.isLoaded = true
    }
    aUse()
  }

  _getExtension (path: string) {
    const _path = path.split('?')[0] // remove query string
    const extension = _path.split('.').pop()?.toLocaleLowerCase()
    if (extension === 'obj') return 'obj'
    if (extension === 'fbx') return 'fbx'
    if (extension === 'json') return 'json'
    if (extension === 'usdz') return 'usdz'
    else throw new Error('Extension not supported')
  }

  onClickViewer (e: MouseEvent) {
    e.stopPropagation()
    const { obj, hdrEquirect, texture } = this.scene
    this.dispatchEvent(
      new CustomEvent('viewer-click', {
        bubbles: true,
        detail: applyTextureOnMesh(
          obj as THREE.Object3D,
          hdrEquirect as THREE.Texture,
          texture as THREE.Texture
        ),
      })
    )
  }

  override render () {
    console.log('isLoaded', this.isLoaded)
    return html`<div id="viewer" class=${classMap({ hidden: !this.isLoaded })}
        @click=${this.onClickViewer}></div>
        <div id="loader" class=${classMap({ hidden: this.isLoaded })}></div>`
  }

  static override styles = css`
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
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'viewer-3d-lit': Viewer3d
  }
}

// customElements.define('viewer-3d-lit', Viewer3d)
