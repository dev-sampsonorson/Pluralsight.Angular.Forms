import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { UserSettings } from '../data/user-settings';

import * as _ from 'lodash';
import { DataService } from '../data/data.service';
import { ThrowStmt } from '@angular/compiler';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-user-settings-form',
    templateUrl: './user-settings-form.component.html',
    styleUrls: ['./user-settings-form.component.css']
})
export class UserSettingsFormComponent implements OnInit {

    userSettings: UserSettings;
    originalUserSettings: UserSettings;
    postError = false;
    postErrorMessage = '';
    subscriptionTypes: Observable<string[]>;

    singleModel = "On";
    startDate: Date;
    startTime: Date;
    userRating = 0;
    maxRating = 10;

    constructor(private dataService: DataService) { //private cdr: ChangeDetectorRef
        this.originalUserSettings = {
            name: null,
            emailOffers: null,
            interfaceStyle: null,
            subscriptionType: null,
            notes: null
        };
        this.userSettings = _.cloneDeep(this.originalUserSettings);

    }

    ngOnInit(): void {
        this.subscriptionTypes = this.dataService.getSubscriptionTypes();
        this.startDate = new Date();
        this.startTime = new Date();
    }

    onHttpError(errorResponse: any) {
        console.log('error: ', errorResponse);
        this.postError = true;
        this.postErrorMessage = errorResponse.error.errorMessage;
    }

    onSubmit(form: NgForm) {
        console.log('in onSubmit: ', form.value);

        /* if (form.valid) {
            this.dataService.postUserSettingsForm(this.userSettings).subscribe(
                result => console.log('success: ', result),
                error => this.onHttpError(error)
            );
        } else {
            this.postError = true;
            this.postErrorMessage = "Please fix the above errors";
        } */
    }

    onBlur(field: NgModel) {
        // this.cdr.detectChanges();
        // console.log(typeof input);
        // console.log(input.className);

        console.log('in onBlur: ', field.valid);
    }
}
