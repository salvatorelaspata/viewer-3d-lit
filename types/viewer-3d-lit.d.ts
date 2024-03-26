import { LitElement } from 'lit';
export declare class Viewer3d extends LitElement {
    object: string;
    texture: string;
    background: string;
    mount: HTMLDivElement | undefined;
    loader: HTMLCanvasElement | undefined;
    scene: {
        obj: unknown;
        hdrEquirect: unknown;
        texture: unknown;
    };
    isLoaded: boolean;
    firstUpdated(): void;
    _getExtension(path: string): "json" | "obj" | "fbx" | "usdz";
    onClickViewer(e: MouseEvent): void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'viewer-3d-lit': Viewer3d;
    }
}
//# sourceMappingURL=viewer-3d-lit.d.ts.map