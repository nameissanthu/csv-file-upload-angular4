import { Component, OnInit, ViewChild } from '@angular/core';



@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent implements OnInit {
  public csvRecords: any[] = [];
  constructor() { }

  ngOnInit() {
  }
  
  
    @ViewChild('fileImportInput') fileImportInput: any;
  
  
    fileChangeListener($event: any): void {
  
      var text = [];
      var files = $event.srcElement.files;
  
      if (this.isCSVFile(files[0])) {
  
        var input = $event.target;
        var reader = new FileReader();
        reader.readAsText(input.files[0]);
  
        reader.onload = (data) => {
          let csvData = reader.result;
          let csvRecordsArray = csvData.split(/\r\n|\n/);
  
          let headersRow = this.getHeaderArray(csvRecordsArray);
  
          this.csvRecords = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
          alert(JSON.stringify(this.csvRecords))
        }
  
        reader.onerror = function() {
          alert('Unable to read ' + input.files[0]);
        };
  
      } else {
        alert("Please import valid .csv file.");
        this.fileReset();
      }
    }
  
    getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
      var dataArr = []
  
      for (let i = 1; i < csvRecordsArray.length; i++) {
        let data = csvRecordsArray[i].split(',');
  
        // FOR EACH ROW IN CSV FILE IF THE NUMBER OF COLUMNS
        // ARE SAME AS NUMBER OF HEADER COLUMNS THEN PARSE THE DATA
        if (data.length == headerLength) {
  
          var csvRecord: CSVRecord = new CSVRecord();
  
          csvRecord.name = data[0].trim();
          csvRecord.orderNumber = data[1].trim();
          csvRecord.orderDate = data[2].trim();
          csvRecord.totalQuantity = data[3].trim();
          csvRecord.amount = data[4].trim();
          csvRecord.shippingAddress = data[5].trim();
          csvRecord.billingAddress = data[6].trim();
  
          dataArr.push(csvRecord);
        }
      }
      return dataArr;
    }
  
    // CHECK IF FILE IS A VALID CSV FILE
    isCSVFile(file: any) {
      return file.name.endsWith(".csv");
    }
  
    // GET CSV FILE HEADER COLUMNS
    getHeaderArray(csvRecordsArr: any) {
      let headers = csvRecordsArr[0].split(',');
      let headerArray = [];
      for (let j = 0; j < headers.length; j++) {
        headerArray.push(headers[j]);
      }
      return headerArray;
    }
  
    fileReset() {
      this.fileImportInput.nativeElement.value = "";
      this.csvRecords = [];
    }
  
  }
  
  export class CSVRecord{
  
    public name: any;
    public orderNumber: any;
    public orderDate: any;
    public totalQuantity: any;
    public amount: any;
    public shippingAddress: any;
    public billingAddress:any;


}
