import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AccReqComponent } from '../../modals/acc-req/acc-req.component';
import { RejectRequestComponent } from '../../modals/reject-request/reject-request.component';

@Component({
    selector: 'app-review-request',
    templateUrl: './review-request.component.html',
    styleUrls: [ './review-request.component.scss' ],
})
export class ReviewRequestComponent implements OnInit {
    constructor(private modalService: NgbModal) {}

    open() {
        const modalRef = this.modalService.open(AccReqComponent, { centered: true });
        modalRef.componentInstance.name = 'World';
    }
    openRejRequest() {
        const modalRef = this.modalService.open(RejectRequestComponent, {
            size: 'lg',
            windowClass: 'big-modal',
            centered: true,
        });
        modalRef.componentInstance.name = 'World';
    }
    ngOnInit(): void {}
}
