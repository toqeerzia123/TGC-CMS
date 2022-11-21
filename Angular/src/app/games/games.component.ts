import { Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { PostDto, PostDtoPagedResultDto, PostServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
import { GameCreateComponent } from './game-create/game-create.component';
import { GameEditComponent } from './game-edit/game-edit.component';

class PagedPostResultRequestDto extends PagedRequestDto {
  keyword: string;

}

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  animations: [appModuleAnimation()]
})

export class GamesComponent extends PagedListingComponentBase<any> {
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
      .getAll(request.keyword,true,3,request.skipCount,request.maxResultCount)
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
        GameCreateComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditRoleDialog = this._modalService.show(
        GameEditComponent,
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

