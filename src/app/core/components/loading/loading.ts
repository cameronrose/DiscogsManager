import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "dc-loading",
  templateUrl: "./loading.html",
  styleUrls: ["./loading.css"]
})
export class LoadingComponent implements OnInit {
  @Input() loading: boolean = false;
  @Input() color: string;
  
  ngOnInit(){
  }
  // @Output() onLoading = new EventEmitter<boolean>();
}
