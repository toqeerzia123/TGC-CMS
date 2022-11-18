import { Component, Injector } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import {
  PagedListingComponentBase,
  PagedRequestDto
} from '@shared/paged-listing-component-base';
import {
  RoleServiceProxy,
  RoleDto,
  RoleDtoPagedResultDto
} from '@shared/service-proxies/service-proxies';

class PagedRolesRequestDto extends PagedRequestDto {
  keyword: string;
}

@Component({
  templateUrl: './tournaments.component.html',
  animations: [appModuleAnimation()]
})
export class TournamentsComponent extends PagedListingComponentBase<RoleDto> {
  roles: RoleDto[] = [];
  keyword = '';

  constructor(
    injector: Injector,
    private _rolesService: RoleServiceProxy,
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

    this._rolesService
      .getAll(request.keyword, request.skipCount, request.maxResultCount)
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: RoleDtoPagedResultDto) => {
        this.roles = result.items;
        this.showPaging(result, pageNumber);
      });
  }

  delete(role: RoleDto): void {
    abp.message.confirm(
      this.l('RoleDeleteWarningMessage', role.displayName),
      undefined,
      (result: boolean) => {
        if (result) {
          this._rolesService
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

  editRole(role: RoleDto): void {
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
