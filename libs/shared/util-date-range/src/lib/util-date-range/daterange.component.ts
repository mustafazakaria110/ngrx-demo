
import { CommonModule, DOCUMENT } from "@angular/common";
import { Component, Inject, Input, OnInit} from "@angular/core";
import { BaseFilterCellComponent, FilterService } from "@progress/kendo-angular-grid";
import { FormsModule } from "@angular/forms";
import { LOCALE_CONFIG, LocaleService, NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import dayjs, { Dayjs } from "dayjs";
import { Moment } from "moment";
import moment from "moment";
import { Store } from "@ngrx/store";
import * as DateRangeActions from '@icode-tfs-ngrx-demo/util-date-range'

@Component({
  selector: 'app-daterange',
  standalone: true,
  imports: [ CommonModule,  FormsModule, NgxDaterangepickerMd ],
  providers:[
    LocaleService,
    {
      provide: LOCALE_CONFIG,
      useValue: {
        format: 'DD/MM/YYYY',
        applyLabel: 'OK',
        cancelLabel: 'Cancel',
        separator: ' - ',
      }
    }
  ],
  templateUrl: './daterange.component.html',
  styleUrls: ['./daterange.component.scss']
})

export class CustomDaterangeComponent extends BaseFilterCellComponent {

  rangeDate!: { startDate: Moment, endDate: Moment };
  fromDateInp!: { startDate: Moment, endDate: Moment };
  toDateInp!: { startDate: Moment, endDate: Moment };
  ranges: any = {
    // 'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    // 'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'Today': [moment(), moment()],
    'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    'This Week': [moment().startOf('isoWeek'), moment().endOf('isoWeek')],
    'Last Week': [moment(new Date()).subtract(1, "week").startOf("isoWeek"), moment(new Date()).subtract(1, "week").endOf("isoWeek"),],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment(new Date()).subtract(1, "month").startOf("month"), moment(new Date()).subtract(1, "month").endOf("month"),],
    'This Year': [moment().startOf('year'), moment().endOf('year')],
    "Last Year": [moment(new Date()).subtract(1, "year").startOf("year"), moment(new Date()).subtract(1, "year").endOf("year"),],
    'Custom Range': 'customRangeDirection()'
  };

  minDateOption: Dayjs = dayjs("1900-01-01", "YYYY-MM-DD")
  maxDateOption: Dayjs = dayjs(dayjs(), "YYYY-MM-DD").add(10, "years");

  options: any = {
    'opens': 'center',
    'format': 'DD/MM/YYYY',
    "minYear": 1900,
    "maxYear": 2200,
    'direction': 'ltr', // could be rtl
    'weekLabel': 'W',
    'separator': ' - ', // default is ' - '
    'cancelLabel': 'Cancel', // detault is 'Cancel'`
    'applyLabel': 'OK', // detault is 'Apply'
    'clearLabel': 'Clear', // detault is 'Clear'
    'customRangeLabel': 'Custom Range',
    'daysOfWeek': moment.weekdaysMin(),
    'monthNames': moment.monthsShort(),
    'firstDay': 1,// first day is monday
    'showRangeLabelOnInput': true,
    'customRangeDirection': true,
    'startDate': moment(),
    'endDate': moment()
  };

  @Input()
  public override filter: any = null;

  @Input()
  public defaultValue: any;

  @Input()
  public field!: string;
  public selectedValue: any;
  constructor(filterService: FilterService,
    @Inject(DOCUMENT) private document: Document , private store : Store) {
    super(filterService);
  }
  public removeAction = () => {
    this.filter = this.removeFilter(this.field);
    return this.filter;
  }
  public filterRange(event: any): void {
    this.store.dispatch(DateRangeActions.filterRange({data : { 
      filter :this.filter, 
      event : event , 
      defaultValue : this.defaultValue , 
      removeFilter : this.removeAction,
      selectedValue : this.selectedValue
    }}));
  }
  rangeDatePosition(event : MouseEvent) {
    this.store.dispatch(DateRangeActions.openDateRangePopup({event : event}))
  }
}
