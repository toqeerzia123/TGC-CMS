import { Component, Injector } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import {
  PagedListingComponentBase,
  PagedRequestDto
} from '@shared/paged-listing-component-base';
import {
  PostServiceProxy,
} from '@shared/service-proxies/service-proxies';

class PagedRolesRequestDto extends PagedRequestDto {
  keyword: string;
}

@Component({
  templateUrl: './tournaments.component.html',
  animations: [appModuleAnimation()]
})
export class TournamentsComponent extends PagedListingComponentBase<any> {
  roles: [] = [];
  keyword = '';

  constructor(
    injector: Injector,
    private _service: PostServiceProxy,
    private _modalService: BsModalService
  ) {
    super(injector);
  }

  list(
    request: PagedRolesRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    request.keyword = this.keyword;
debugger;

this._service
.getAllPostsByCategory(undefined,undefined,2,undefined,undefined)
.subscribe(
  res => {

  },
  error => {

  }
)

    this._service
      .getAllPostsByCategory("",true,2,0,1000)
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: any) => {
        this.roles = result;
        this.showPaging(result, pageNumber);
      });
  }

  delete(role: any): void {
    abp.message.confirm(
      this.l('RoleDeleteWarningMessage', role.displayName),
      undefined,
      (result: boolean) => {
        if (result) {
          this._service
            .delete(role.id)
            .pipe(
              finalize(() => {
                abp.notify.success(this.l('SuccessfullyDeleted'));
                this.refresh();
              })
            )
            .subscribe(() => {});
        }
      }
    );
  }

  createRole(): void {
    this.showCreateOrEditRoleDialog();
  }

  editRole(role: any): void {
    this.showCreateOrEditRoleDialog(role.id);
  }

  showCreateOrEditRoleDialog(id?: number): void {
    let createOrEditRoleDialog: BsModalRef;
    if (!id) {
      // createOrEditRoleDialog = this._modalService.show(
      //   CreateRoleDialogComponent,
      //   {
      //     class: 'modal-lg',
      //   }
      // );
    } else {
      // createOrEditRoleDialog = this._modalService.show(
      //   EditRoleDialogComponent,
      //   {
      //     class: 'modal-lg',
      //     initialState: {
      //       id: id,
      //     },
      //   }
      // );
    }

    createOrEditRoleDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }
}
