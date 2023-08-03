import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IssueStatus} from "../model/issue-status.model";

@Component({
    selector: 'app-status-block',
    templateUrl: './status-block.component.html',
    styleUrls: ['./status-block.component.scss']
})
export class StatusBlockComponent {
    @Input() issueStatus: IssueStatus | null = null;
    @Input() statusName: string = 'No name';
    @Input() issues: string[] = [];
    @Output() dragEventEmitter = new EventEmitter<[string, IssueStatus]>();

    drag($event: DragEvent, issue: string) {
        if (this.issueStatus)
            this.dragEventEmitter.emit([issue, this.issueStatus]);
    }
}
