import { bootstrapApplication } from '@angular/platform-browser'
import { appConfig } from '@config/app.config'
import { AppComponent } from '@screens/app/app.component'

bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err))
