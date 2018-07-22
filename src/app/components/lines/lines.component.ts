import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GtfsEnum } from 'src/app/enums/gtfs.enum';
import { GtfsService } from 'src/app/modules/gtfs/gtfs.service';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.css']
})
export class LinesComponent implements OnInit {

  @Output() showTripEvent = new EventEmitter<any>();

  constructor(private gtfsService: GtfsService) { }

  trips = [];

  ngOnInit() {
    this.trips = this.gtfsService.getTable(GtfsEnum.TRIPS);
  }

  showTrip(trip_id: string): void {
    this.showTripEvent.emit(trip_id);
  }

}
