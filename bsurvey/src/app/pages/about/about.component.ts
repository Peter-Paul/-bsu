import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  people = [
    {
      name: "Baggya Paul",
      image: "assets/gallery/ceo.JPG",
      position: "Founder and head of the valuation department",
      number: "callto:+256772362547",
      email: "mailto:baggyarossi@buildingsurveyuganda.com",
    },
    {
      name: "Nassiwa Brendah",
      image: "assets/gallery/brendah.JPG",
      position: "Head of the survey department",
      number: "callto:+256785968918",
      email: "mailto:kasumbaamos@buildingsurveyuganda.com",
    },
    {
      name: "Kasumba Amos",
      image: "assets/gallery/amos.JPG",
      position: "Incharge of all administrative duties",
      number: "callto:+256785968918",
      email: "mailto:kasumbaamos@buildingsurveyuganda.com",
    },
  ];
  values = [
    {
      image: "assets/gallery/ER_Transparency_yellow.png",
      name: "Trust",
      detail:
        "Our Clientele can confide in us knowing that we shall always hold their interests at heart.",
    },
    {
      image: "assets/gallery/efficiency2.png",
      name: "Efficiency",
      detail: "We value ours' and our clientele’s time and monies.",
    },
    {
      image: "assets/gallery/Notification-icon-Commons-logo.svg.png",
      name: "Simplicity",
      detail:
        "Our work is never done till it is understood and appreciated by the client.",
    },
    {
      image: "assets/gallery/team+building+3.png",
      name: "Team Work",
      detail:
        "We are “We” and we never work alone. (Strongly denounce the I, She, He Syndrome).",
    },
  ];
  constructor() {}

  ngOnInit() {}
}
