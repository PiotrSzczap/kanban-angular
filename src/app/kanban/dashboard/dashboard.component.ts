import {Component} from '@angular/core';
import {IssueStatus} from "../model/issue-status.model";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

    issueStatuses: IssueStatus[] = [
        {
            statusName: "To do",
            issues: [
                "1",
                "2",
                "3"
            ]
        },
        {
            statusName: "Ready",
            issues: [
                "4",
                "5",
                "6"
            ]
        },
        {
            statusName: "In progress",
            issues: [
                "7",
                "8",
                "9"
            ]
        },
    ];
    div1Array: number[] = [1, 2, 3, 4, 5, 6, 7];
    div2Array: number[] = [0, 9, 8];

    draggedElement: string | null = null;
    draggedSource: IssueStatus | null = null;

    drag(data: [string, IssueStatus]) {
        this.draggedElement = data[0];
        this.draggedSource = data[1];
        console.log("drag");
    }

    drop($event: DragEvent, issueStatus: IssueStatus) {
        if (this.draggedElement && this.draggedSource) {
            let index = this.draggedSource.issues.indexOf(this.draggedElement);
            this.draggedSource.issues.splice(index, 1);
            issueStatus.issues.push(this.draggedElement);
            this.draggedElement = null;
            this.draggedSource = null;
        }
    }

    dragover($event: DragEvent) {
        $event.preventDefault();
    }
}
