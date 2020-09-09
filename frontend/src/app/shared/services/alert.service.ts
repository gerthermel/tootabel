import { Component, Input, ViewEncapsulation, OnInit, Injectable } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-modal-content',
	template: `
		<div class="modal-header">
			<h4 class="modal-title" id="modal-basic-title">
				<fa-icon [icon]="['fas', 'check']" ></fa-icon>
				{{title}}
			</h4>
		</div>
		<div class="modal-body">
			{{msg}}
		</div>
		<div class="modal-footer">
			<button type="button" class="btn" data-dismiss="modal" (click)="activeModal.close('Close click')">Close</button>
		</div>
	`,
	styles:[`
	.modal-backdrop.show{
		opacity:0.5 !important;
	}
	.custom-alert-modal {
		color: #666666;
	}
	
	.custom-alert-modal  {
		border: none;
	}
	.custom-alert-modal .modal-footer button {
		background-color: white;
		color: white;
		border: none;
		border-radius: 68px;
		min-width: 200px;
		font-weight: 700;
	}
	
	.custom-alert-modal .modal-header {
		font-size: 30px;
		font-weight: bold;
	}
	
	.custom-alert-modal  .modal-footer {
		color: white;
	}
	
	
	.custom-alert-modal .modal-header,
	.custom-alert-modal .modal-body,
	.custom-alert-modal .modal-footer
		{
		text-align: center;
		display: block;
		border: none;
	}
	
	.error_modal  .modal-header,
	.error_modal  .modal-footer button
		{
		color: #ff6060;
	}
	
	.error_modal  .modal-footer button {
		border: solid 2px #ff5f5f !important;
	}
	
	.success_modal  .modal-header,
	.success_modal  .modal-footer button
	{
		color: #3db879;
	}
	
	.success_modal  .modal-footer button {
		border: solid 2px #3db879;
	}
	
	.neutral_modal  .modal-header,
	.neutral_modal  .modal-footer button
		{
		color: #b75051;
	}
	
	.neutral_modal  .modal-footer button {
		border: solid 2px #b75051;
	}

	.fade,
	.btn{
		transition: none;
	}
	`],
	encapsulation: ViewEncapsulation.None,
})

export class alertModalContent {
	@Input() msg;
	@Input() title;
	isError = false;
	isAlert = false;
	isSuccess = false;
	constructor(
		public activeModal: NgbActiveModal,
	){
    
  }
}

@Injectable({
	providedIn: 'root'
})

export class AlertService{
	public modalComp: any = alertModalContent;
	constructor( 
		private modalService: NgbModal,
	){
	}

	success(msg:string){
		const modalRef = this.modalService.open(this.modalComp, {windowClass: 'custom-alert-modal success_modal'});
		modalRef.componentInstance.msg = msg;
		modalRef.componentInstance.title = 'Success';
		modalRef.componentInstance.isSuccess = true;
	}
	
	error(msg:string){
		const modalRef = this.modalService.open(this.modalComp, {windowClass: 'custom-alert-modal error_modal'});
		modalRef.componentInstance.msg = msg;
		modalRef.componentInstance.title = 'Oops...';
		modalRef.componentInstance.isError = true;
	}
	
	alert(msg:string){
		const modalRef = this.modalService.open(this.modalComp, {windowClass: 'custom-alert-modal neutral_modal'});
		modalRef.componentInstance.msg = msg;
		modalRef.componentInstance.title = 'Notification';
		modalRef.componentInstance.isAlert = true;
	}
}
