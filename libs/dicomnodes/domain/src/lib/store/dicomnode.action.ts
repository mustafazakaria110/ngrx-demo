import { createAction, props } from '@ngrx/store';
import { DicomNode } from '../models/dicomnode';

export const GetDicomNodes = createAction('[Dicom Nodes] Get Dicom Nodes');

export const GetDicomNodesSuccess = createAction(
    '[Dicom Nodes] Get Dicom Nodes Success',
    props<{ dicomNodes: DicomNode[] }>()
);

export const GetDicomNodesFail = createAction(
    '[Dicom Nodes] Get Dicom Nodes Failed'
);