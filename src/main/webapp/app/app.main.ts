import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ProdConfig } from './blocks/config/prod.config';
import { ChunknorristestAppModule } from './app.module';

ProdConfig();

if (module['hot']) {
    module['hot'].accept();
}

platformBrowserDynamic()
    .bootstrapModule(ChunknorristestAppModule, { preserveWhitespaces: true })
    .then(success => console.log(`Application started now`))
    .catch(err => console.error(err));
