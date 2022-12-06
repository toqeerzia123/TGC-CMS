import { Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { PostCategoryServiceProxy, PostDto, PostDtoPagedResultDto, PostServiceProxy, SliderDto, SliderDtoPagedResultDto, SliderServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
import { SliderCreateComponent } from './slider-create/slider-create.component';
import { SliderEditComponent } from './slider-edit/slider-edit.component';


class ListRequestDto extends PagedRequestDto {
  isactive: boolean;
}

@Component({
  selector: 'app-sliders',
  templateUrl: './sliders.component.html',
  animations: [appModuleAnimation()]
})

export class SlidersComponent extends PagedListingComponentBase<any> {
  tournaments: SliderDto [] = [];
  keyword = '';
  pageRequest : ListRequestDto = new ListRequestDto();

  constructor(
    injector: Injector,
    private _service: SliderServiceProxy,
    private _modalService: BsModalService
  ) {
    super(injector);
  }

  list(
    request: ListRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    this._service
      .getAll(request.isactive,request.skipCount,request.maxResultCount)
      .pipe(
        finalize(() => {
          finishedCallback();
        })
      )
      .subscribe((result: SliderDtoPagedResultDto) => {
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
                this.refreshAll();
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
        SliderCreateComponent,
        {
          class: 'modal-lg'
        }
      );
    } else {
      createOrEditRoleDialog = this._modalService.show(
        SliderEditComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id
          },
        }
      );
    }

    createOrEditRoleDialog.content.onSave.subscribe(() => {
      this.refreshAll();
    });
  }

  refreshAll(): void {
    this.isTableLoading = true;
        this.list(this.pageRequest, 1, () => {
            this.isTableLoading = false;
        });
  }

}

