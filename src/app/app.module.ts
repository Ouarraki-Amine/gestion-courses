import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent, //declaration du componsant principal 
    FooterComponent,  //declaration du footer
    NavbarComponent   //declaration du navbar
  ],
  imports: [
    BrowserModule,
    HttpClientModule, //importation du module hhtpclientmodule pour activer les requetes http afin de communiquer avec une api
    AppRoutingModule,  //importation du module de routage principal
    FormsModule,       //importation de formsmodule pour utiliser les formulaires et gerer les donnees avec ngModel
    CoreModule         //importation du module qui contient les dervices globaux de l'app
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
