import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';


@Component({
    selector: 'ld-home',
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

    form: FormGroup;

    constructor(private fb: FormBuilder) { }


    ngOnInit(): void {
        this.form = this.fb.group({
            username: [''],
            email: ['', Validators.email],
        });
    }

    submit(){
        console.log(this.form.value);
    }
}
