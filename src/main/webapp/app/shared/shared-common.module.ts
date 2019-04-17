import { NgModule } from '@angular/core';

import { ChunknorristestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [ChunknorristestSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [ChunknorristestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ChunknorristestSharedCommonModule {}
