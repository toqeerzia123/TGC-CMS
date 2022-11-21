import { Component, Injector, OnInit } from '@angular/core';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { PostDto, PostDtoPagedResultDto, PostServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
import { AnnouncementCreateComponent } from './announcement-create/announcement-create.component';
import { AnnouncementEditComponent } from './announcement-edit/announcement-edit.component';

class PagedPostResultRequestDto extends PagedRequestDto {
  keyword: string;

}

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html'
})

export class AnnouncementsComponent extends PagedListingComponentBase<any> {
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
      .getAll(request.keyword,true,4,request.skipCount,request.maxResultCount)
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
        AnnouncementCreateComponent,
        {
          class: 'modal-lg',
        }
      );
    } else {
      createOrEditRoleDialog = this._modalService.show(
        AnnouncementEditComponent,
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


