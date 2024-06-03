import { Component, OnInit, ElementRef, EventEmitter, ViewChild, Output } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html'
})
export class MapComponent implements OnInit{
  @ViewChild('svgMap', { static: true })
  svgMap!: ElementRef;
  @Output() countrySelected: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.addEventListeners();
  }

  addEventListeners() {
    const paths = this.svgMap.nativeElement.querySelectorAll('path');
    for (let i = 0; i < paths.length; i++) {
      paths[i].addEventListener('click', this.selectCountry.bind(this, paths[i].id));
    }
  }

  selectCountry(countryCode: string) {
    this.countrySelected.emit(countryCode);
  }
}
