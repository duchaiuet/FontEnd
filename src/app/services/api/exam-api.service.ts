import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ExamApiService {
    url: string;

    constructor(private  http: HttpClient) {
        this.url = 'http://192.168.0.101:5000/api/exams';
    }

    creatExam(data): Promise<any> {
        return this.http.post(this.url, data).toPromise().then().catch();
    }

    getExam(examName): Promise<any> {
        let params = new HttpParams().set('exam', examName);
        return this.http.get(this.url, {params}).toPromise().then().catch();
    }

    editExam(data: any): Promise<any> {
        return this.http.put(this.url +"/"+ data.id, data).toPromise().then().catch();
    }

    deleteExam(id): Promise<any> {
        return this.http.delete(this.url +"/"+ id).toPromise().then().catch();
    }
}

