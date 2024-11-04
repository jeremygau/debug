import {defineStore} from "pinia";
import {VtkViewer} from "@/model/vtkViewer";
import {ref} from "vue";


export const useViewerStore = defineStore('viewer', () => {
    const vtkViewers = ref<VtkViewer>(new VtkViewer());

    return {
        vtkViewers: vtkViewers,
    }
});