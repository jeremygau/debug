import vtkRenderer from '@kitware/vtk.js/Rendering/Core/Renderer';
import vtkFullScreenRenderWindow from '@kitware/vtk.js/Rendering/Misc/FullScreenRenderWindow';
import vtkRenderWindowInteractor from "@kitware/vtk.js/Rendering/Core/RenderWindowInteractor";


export class VtkViewer {

    initialized = false;
    fullScreenRenderer!: vtkFullScreenRenderWindow;
    renderer!: vtkRenderer;
    interactor!: vtkRenderWindowInteractor;


    constructor() {
    }
}