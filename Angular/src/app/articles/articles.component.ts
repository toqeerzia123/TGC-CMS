import { Component, Injector, OnInit } from '@angular/core';
import { appModuleAnimation } from '@shared/animations/routerTransition';
import { PagedListingComponentBase, PagedRequestDto } from '@shared/paged-listing-component-base';
import { PostCategoryServiceProxy, PostDto, PostDtoPagedResultDto, PostServiceProxy } from '@shared/service-proxies/service-proxies';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { finalize } from 'rxjs/operators';
import { ArticleCreateComponent } from './article-create/article-create.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';


class PagedPostResultRequestDto extends PagedRequestDto {
  keyword: string;
  postType:number;
}

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  animations: [appModuleAnimation()]
})

export class ArticlesComponent extends PagedListingComponentBase<any> {
  tournaments: PostDto [] = [];
  keyword = '';
  pageRequest : PagedPostResultRequestDto = new PagedPostResultRequestDto();

  constructor(
    injector: Injector,
    private _service: PostServiceProxy,
    private _modalService: BsModalService,
    private _categService : PostCategoryServiceProxy
  ) {
    super(injector);
    this.getBlogCategory();
  }

  getBlogCategory(){
    this._categService.getAll('',undefined,undefined,undefined).subscribe(
      res => {
        let category = res.items.find(d => d.categoryName == 'Articles');
        if(category != undefined){
          this.pageRequest.postType=category.id;
        this.isTableLoading = true;
        this.list(this.pageRequest, 1, () => {
            this.isTableLoading = false;
        });
        }
      }
    )
  }

  list(
    request: PagedPostResultRequestDto,
    pageNumber: number,
    finishedCallback: Function
  ): void {
    request.keyword = this.keyword;
    this._service
      .getAll(request.keyword,true,request.postType,request.skipCount,request.maxResultCount)
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
        ArticleCreateComponent,
        {
          class: 'modal-lg',
          initialState:{post_categoryId : this.pageRequest.postType}
        }
      );
    } else {
      createOrEditRoleDialog = this._modalService.show(
        ArticleEditComponent,
        {
          class: 'modal-lg',
          initialState: {
            id: id,
            post_categoryId : this.pageRequest.postType
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


