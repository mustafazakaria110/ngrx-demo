import { Injectable } from "@angular/core";
import { FilterService } from "@progress/kendo-angular-grid";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as DateRangeActions from "./date.actions";
import { mergeMap, of } from "rxjs";

@Injectable()
export class DateRangeEffect {
    clearDate$: any;
    filterRange$: any;
    constructor(private actions$: Actions, private filterService: FilterService) {
        this.clearDate$ = createEffect(() =>
            this.actions$.pipe(
                ofType(DateRangeActions.openDateRangePopup),
                mergeMap((action) => {
                    var event = action.event;
                    var a = event.pageX;
                    var x = event.clientX - event.offsetX;
                    var z = window.innerWidth - x;

                    var ay = event.pageY;
                    var xy = event.clientY - event.offsetY;
                    var zy = window.innerHeight - xy;

                    setTimeout(function () {
                        var mddp = (document.getElementsByClassName("md-drppicker")) as HTMLCollectionOf<HTMLElement>;
                        if (mddp) {
                            var cnt = mddp.length;
                            if (a <= 700) {
                                for (let index = 0; index < cnt; index++) {
                                    mddp[index].style.left = x + "px";
                                }
                            }
                            else if (a > 700) {
                                var inpFilter = (document.getElementsByClassName("input-filter")) as HTMLCollectionOf<HTMLElement>;
                                for (let index = 0; index < cnt; index++) {
                                    mddp[index].style.left = "auto";
                                    mddp[index].style.right = z - inpFilter[0].clientWidth + "px";
                                }
                            }

                            if (ay <= 400) {
                                for (let index = 0; index < cnt; index++) {
                                    mddp[index].style.top = xy + 13 + "px";
                                }
                            }
                            else if (ay > 200) {
                                var inpFilter = (document.getElementsByClassName("input-filter")) as HTMLCollectionOf<HTMLElement>;
                                for (let index = 0; index < cnt; index++) {
                                    mddp[index].style.top = "auto";
                                    mddp[index].style.bottom = zy - inpFilter[0].clientHeight + "px";
                                }
                            }
                        }
                    }, 10);
                    return of(DateRangeActions.openedSuccess());
                }
                )
            ));


        this.filterRange$ = createEffect(() =>
            this.actions$.pipe(
                ofType(DateRangeActions.filterRange),
                mergeMap((action) => {

                    var selectedValue = action.data.selectedValue;
                    
                    if (!event || !action.data.defaultValue)
                        return of();
                    selectedValue = event;
                    if ((action.data.event?.startDate === null && action.data.event?.endDate === null) || !event)
                        selectedValue = action.data.defaultValue;
                    var filter = action.data.removeFilter();
                    
                    var filters = [] as any;
                    if (selectedValue.startDate) {
                        filters.push({
                            field: action.data.field,
                            operator: "gte",
                            value: selectedValue.startDate,
                        });
                    }
                    if (selectedValue.endDate) {
                        filters.push({
                            field: action.data.field,
                            operator: "lte",
                            value: selectedValue.endDate
                        });
                    }
                    const root = filter || {
                        logic: "and",
                        filters: [],
                    };
                    if (filters.length) {
                        root.filters.push(...filters);
                    }
                    this.filterService.filter(root);
                    return of(DateRangeActions.filteredSuccess());
                }
                )
            ));
    }
}