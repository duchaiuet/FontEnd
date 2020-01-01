import {Component, OnInit} from '@angular/core';
import {RegisterApiService} from '../../services/api/register-api.service';
import {PdfService} from '../../services/pdf.service';


@Component({
    selector: 'app-student-schedule',
    templateUrl: './student-schedule.component.html',
    styleUrls: ['./student-schedule.component.css']
})
export class StudentScheduleComponent implements OnInit {

    listOfData = [];
    yourSchedule = [];

    constructor(private pdf: PdfService, private registerApi: RegisterApiService) {

    }

    ngOnInit() {
        this.getSchedule();
    }

    getSchedule() {
        let schedule = [];
        let yourSchedule = [];
        this.registerApi.getListCanRegister('').then((res: any) => {
           this.listOfData = res.data;
           console.log(res.data)
        });
        this.getMySchedule();

    }

    getMySchedule() {
        this.registerApi.getListMyRegister('').then((res: any) => {
            if (res.success == true) {
                this.yourSchedule = res.schedules;
            }
        });
    }

    register(index) {
        console.log(index);
        this.registerApi.registerSchedule({schedule_id: this.listOfData[index].schedule_id}).then((value: any) => {
            confirm(value.message);
            if (value.success == true) {
                this.listOfData[index].status = true;
                this.listOfData[index].no_of_student++;
                this.getMySchedule();
            }
        });


    }

    deleteShift(index) {
        console.log(index);

        let schedule_id = this.yourSchedule[index].schedule.id;
        this.registerApi.deleteSchedule(schedule_id).then((val: any) => {
            if (val.success == true) {
                confirm(val.message);
                this.listOfData.forEach(value => {
                    if (value.schedule_id == schedule_id) {
                        value.status = false;
                        value.no_of_student--;
                    }
                });
                this.yourSchedule.splice(index, 1);
            } else {
                confirm(val.message);
            }
        });

    }



}
