
import { CommonModule, DOCUMENT } from "@angular/common";
import { Component, Inject, Input, OnInit} from "@angular/core";
import { BaseFilterCellComponent, FilterService } from "@progress/kendo-angular-grid";
import { FormsModule } from "@angular/forms";
import { LOCALE_CONFIG, LocaleService, NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import dayjs, { Dayjs } from "dayjs";
import { Moment } from "moment";
import moment from "moment";

@Component({
  selector: 'app-daterange',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgxDaterangepickerMd
  ],
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

export class CustomDaterangeComponent extends BaseFilterCellComponent implements  OnInit{

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
    @Inject(DOCUMENT) private document: Document) {
    super(filterService);
  }

  public filterRange(event: any): void {
    if (!event || !this.defaultValue)
      return;
    this.selectedValue = event;
    if ((event.startDate === null && event.endDate === null) || !event)
      this.selectedValue = this.defaultValue;
    this.filter = this.removeFilter(this.field);
    const filters = [] as any;
    if (this.selectedValue.startDate) {
      filters.push({
        field: this.field,
        operator: "gte",
        value: this.selectedValue.startDate,
      });
    }
    if (this.selectedValue.endDate) {
      filters.push({
        field: this.field,
        operator: "lte",
        value: this.selectedValue.endDate
      });
    }
    const root = this.filter || {
      logic: "and",
      filters: [],
    };
    if (filters.length) {
      root.filters.push(...filters);
    }
    this.filterService.filter(root);
  }

  ngOnInit() {
  }

  rangeDatePosition(event : any) {
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
  }
}
