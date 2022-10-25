import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html'
})
export class BindingComponent{

  title: string = "Demo du DATA Binding";
  status: boolean = true;
  nom: string = "Houssam";

  changerTitre() {
    this.title="Bonjour Vous Etes à la 3éme Type : Event Binding"
  }

}
