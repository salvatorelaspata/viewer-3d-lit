import * as THREE from 'three';
import { Viewer3dType } from '../types/types.js';
export declare const applyTextureOnMesh: (obj: THREE.Object3D, hdrEquirect: THREE.Texture, texture: THREE.Texture) => void;
export declare const use3DViewer: (mount: HTMLDivElement | undefined, modelConfig: Viewer3dType) => Promise<{
    obj: THREE.Group | THREE.Object3D<THREE.Event>;
    hdrEquirect: THREE.DataTexture | THREE.CanvasTexture;
    texture: THREE.Texture | THREE.CanvasTexture;
}>;
