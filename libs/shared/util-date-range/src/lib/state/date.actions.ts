import { createAction, props} from '@ngrx/store';
import { CompositeFilterDescriptor } from '@progress/kendo-data-query';
import { TimePeriod } from 'ngx-daterangepicker-material/daterangepicker.component';


export interface DateRangeState {
  filterDate : TimePeriod | null ;
  openEvent: MouseEvent | null;
}
export interface DateRangeFilterData {
  defaultValue : any ;
  field ?: string ;
  selectedValue?: any ;
  event : TimePeriod | null;
  filter: CompositeFilterDescriptor | any;
  removeFilter : any
}


export const openDateRangePopup = createAction(
  '[Date Event] Open Date Range Popup',
  props<{ event: MouseEvent }>()
);

export const openedSuccess = createAction('[Date Event] Opended Success');

export const filterRange = createAction(
  '[Date Event] Filter Range',
  props<{ data : DateRangeFilterData}>()
);

export const filteredSuccess = createAction(
  '[Date Event] Filtered Success' ,
);
