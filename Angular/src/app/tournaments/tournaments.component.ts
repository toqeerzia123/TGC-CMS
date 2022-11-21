import { Component, Injector } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import {
  PagedListingComponentBase,
  PagedRequestDto
} from '@shared/paged-listing-component-base';
import {
  PostDto,
  PostDtoPagedResultDto,
  PostServiceProxy,
} from '@shared/service-proxies/service-proxies';
import { TournamentCreateComponent } from './tournament-create/tournament-create.component';
import { TournamentEditComponent } from './tournament-edit/tournament-edit.component';

class PagedPostResultRequestDto extends PagedRequestDto {
  keyword: string;

}

@Component({
  templateUrl: './tournaments.component.html',
  animations: [appModuleAnimation()]
})
export class TournamentsComponent extends PagedListingComponentBase<any> {
  tournaments: PostDto [] = [];
  keyword = '';

  constructor(
    injector: Injector,
    private _service: PostServiceProxy,
    private _modalService: BsModalService
  ) {
    super(injector);
  }

  list(
    request: PagedPostResultRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    request.keyword = this.keyword;
    this._service
      .getAll(request.keyword,true,2,request.skipCount,request.maxResultCount)
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: PostDtoPagedResultDto) => {
        this.tournaments = result.items;
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
    this.showCreateOrEditDialog();
  }

  editRole(role: any): void {
    this.showCreateOrEditDialog(role.id);
  }

  showCreateOrEditDialog(id?: number): void {
    let createOrEditRoleDialog: BsModalRef;
    if (!id) {
      createOrEditRoleDialog = this._modalService.show(
        TournamentCreateComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditRoleDialog = this._modalService.show(
        TournamentEditComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
          },
        }
      );
    }

    createOrEditRoleDialog.content.onSave.subscribe(() => {
      this.refresh();
    });
  }
}
