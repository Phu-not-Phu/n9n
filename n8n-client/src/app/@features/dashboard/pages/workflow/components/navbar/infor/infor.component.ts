import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, lastValueFrom } from 'rxjs';
import { Workflow } from '../../../models/workflow.model';

@Component({
  selector: 'app-infor',
  templateUrl: './infor.component.html',
  styleUrls: ['./infor.component.scss'],
})
export class InforComponent {
  constructor(private store: Store<{ workflow: Workflow }>) {}

  currentWorkflow!: Workflow | null;
}
