import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from "rxjs";
import { GetDicomNodesFail, GetDicomNodesSuccess, GetDicomNodes } from "./dicomnode.action";
import { DicomnodeService } from "../Service/dicomnode.service";
import { DicomNode } from "../models/dicomnode";

@Injectable()
export class DicomNodesEffects {
    getDicomNodes$: any;

    constructor(private actions$: Actions, private dicomNodeService: DicomnodeService) {
        this.getDicomNodes$ = createEffect(() =>
            this.actions$.pipe(
                ofType(GetDicomNodes),
                mergeMap(() =>
                    this.dicomNodeService.getDicomNodes().pipe(
                        map((dicomnodes: DicomNode[]) => {
                            return GetDicomNodesSuccess({ dicomNodes: dicomnodes });
                        }),
                        catchError((error) => {
                            alert("api errrrroooooooooooooooor")
                            return of(GetDicomNodesFail()); // Emit loginFail action
                        })
                    )
                )
            )
        );
    }
}