import { createReducer, on } from "@ngrx/store";
import { DicomNode } from "../models/dicomnode";
import { GetDicomNodesFail, GetDicomNodesSuccess } from "./dicomnode.action";

export interface DicomNodeState {
    dicomNodes: any[]
    selectedDicomNode: DicomNode | null
}

export const initialState: DicomNodeState = {
    dicomNodes: [],
    selectedDicomNode: null,
};
export const DicomNodeReducer = createReducer(
    initialState,
    on(GetDicomNodesSuccess, (state, { dicomNodes }) => {
        console.log(dicomNodes)
        return {
            ...state,
            dicomNodes: dicomNodes
        };
    }),

    on(GetDicomNodesFail, (state) => {
        return {
            ...state,
            dicomNodes: []
        }
    })
)