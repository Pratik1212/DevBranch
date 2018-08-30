import { Component, OnInit, ViewChildren, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
// import { FormsModule } from '@angular/forms';
import { UserService } from '../../_services';
import { FormBuilder, FormGroup, Validator, Validators, FormControlName } from '@angular/forms';
import { Router } from '@angular/router';
import { GenericValidator } from '../../_shared/generic-validator';
import { Observable, Subscription, fromEvent, merge, of } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit, AfterViewInit, OnDestroy {
  // @ViewChild('fileInput') fileInput;
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];
  userDetailsForm: FormGroup;
  submitted = false;

  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService) {

    // Defines all of the validation messages for the form.
    // These could instead be retrieved from a file or database.
    this.validationMessages = {
      firstName: {
        required: 'First name is required.',
        minlength: 'First name must be at least three characters.',
        maxlength: 'First name cannot exceed 50 characters.'
      },
      lastName: {
        required: 'Last code is required.'
      }
    };

    // Define an instance of the validator for use with this form,
    // passing in this form's set of validation messages.
    this.genericValidator = new GenericValidator(this.validationMessages);
  }
  ngOnDestroy(): void {
    // this.sub.unsubscribe();
  }

  ngAfterViewInit(): void {
    // Watch for the blur event from any input element on the form.
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    // Merge the blur event observable with the valueChanges observable
    merge(this.userDetailsForm.valueChanges, ...controlBlurs).pipe(
      debounceTime(800)
    ).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.userDetailsForm);
    });
  }

  ngOnInit() {
    this.userDetailsForm = this.formBuilder.group({
      firstName: ['', Validators.required, Validators.pattern("^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$")],
      middleName: [''],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      height: ['', Validators.required],
      maritalStatus: ['', Validators.required],
      cast: ['', Validators.required],
      subCast: ['', Validators.required],
      addrPermenentCity: ['', Validators.required],
      addrCurrentCity: ['', Validators.required],
      addrPermenentState: ['', Validators.required],
      addrCurrentState: ['', Validators.required],
      addrPermenentZip: ['', Validators.required],
      addrCurrentZip: ['', Validators.required],
      mobileNo: ['', Validators.required],
      addrCurrentStreet: ['', Validators.required],
      addrPermenentStreet: ['', Validators.required],
      education: ['', Validators.required],
      isSalaried: ['', Validators.required],
      jobDetails: ['', Validators.required],
      income: ['', Validators.required],
      incomeType: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.userDetailsForm.controls; }

  onSaveUserDetails() {
    // tslint:disable-next-line:no-debugger
    debugger;
    this.submitted = true;
    // stop here if form is invalid
    if (this.userDetailsForm.invalid) {
      return;
    }
  }

  upload() {
    // let fileBrowser = this.fileInput.nativeElement;
    // if (fileBrowser.files && fileBrowser.files[0]) {
    //   const formData = new FormData();
    //   formData.append("image", fileBrowser.files[0]);
    //   this.userService.upload(formData, 1, 1).subscribe(res => {
    //     // do stuff w/my uploaded file
    //     return '';
    //   });
    // }
  }
}

