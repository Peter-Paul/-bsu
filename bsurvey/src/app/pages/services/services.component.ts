import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.css"],
})
export class ServicesComponent implements OnInit {
  services = [
    {
      id: "service1",
      name: "Land Surveying",
      image: "assets/gallery/surveying.jpg",
      about: `Surveyors measure just about anything on the land, in the sky or on the ocean bed. 
      They even measure polar ice-caps. Land surveyors work in the office and in the field – from suits to boots.
      In the office, surveyors then use sophisticated software, such as auto-cad to draft plans and map the onsite measurements. 
      Surveyors work on a diverse variety of projects from land subdivision and mining exploration, to tunnel building and major construction, which means no two days are the same. 
      They are experts in determining land size and measurement.
       They also give advice and provide information to guide the work of engineers, architects and developers`,
    },
    {
      id: "service2",
      name: "Property Valuation",
      image: "assets/gallery/valuation.jpg",
      about: `If you want a survey which provides information on the state of the property and its value on the open market you need to arrange a valuation report from a valuation surveyor registered with the Royal Institution of Chartered Surveyors or the local institutions associated with the profession.
       This won't automatically include a valuation, but you can ask the surveyor to provide one. 
       The valuation from a full survey will be more accurate than the lender's valuation because it looks at value on the open market and it will provide you with a better tool with which to negotiate on price`,
    },
    {
      id: "service3",
      name: "Building Surveying",
      image: "assets/gallery/construction.jpg",
      about:
        "For a very detailed analysis of the structure of the property and advice on dealing with possible structural defects you need to commission the more expensive building survey.",
    },
    {
      name: "Technological Building",
      id: "service4",
      image: "assets/gallery/technological.jpg",
      about: `One of the major responsibilities of our construction manager is ensuring that a project is being completed in accordance with safety codes.
       He or she will need to make sure that the construction project is not violating any city ordinances.
        The lawyer may need to obtain a permit so that the construction manager can continue to pursue his or her construction project. 
        A construction manager plays an important role in ensuring that construction projects go smoothly from start to finish.
         He or she will need to manage a group of construction workers and ensure that they are operating equipment in a safe manner. You should enjoy working on construction sites if you are thinking about becoming a construction manager.
          It is also essential that you understand how to keep a construction project under budget at all times. `,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
