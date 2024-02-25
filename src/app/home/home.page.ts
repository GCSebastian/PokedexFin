import { Component } from '@angular/core';
import { APIServiceService } from '../Services/apiservice.service';
import { Firestore, doc, setDoc,getDoc, DocumentSnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  pokemon: any
  pokemonId: number=0;
  valor: any;
  pokemonName: string="";
  pokemonType: string="";

  tableled1: any;
  constructor(private api: APIServiceService, private db: Firestore) {}

  async encenderAzul(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"azul" });
  }
  async encenderVerde(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"verde" });
  }
  async encenderRojo(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"rojo" });
  }
  async encenderAmarillo(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"amarillo" });
  }
  async encenderTomate(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"tomate" });
  }
  async encenderMorado(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"Morado" });
  }
  async encenderVerdeO(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"verdeoz" });
  }
  async encenderBlanco(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"blanco" });
  }
  async encenderCafe(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"cafe" });
  }
  
  

  getPokemonData() {
    try {
      if (isNaN(this.valor)) {
        this.api.getPokemonName(this.valor).subscribe((response => {
          this.pokemon = response;
          //console.log(this.pokemon)
          //console.log(this.pokemon.sprites.front_default)
          for (let i = 0; i < this.pokemon.types.length; i++) {
            //console.log(this.pokemon.types[i].type.name);

            if (this.pokemon.types[i].type.name.toLowerCase() === "water") {
              this.encenderAzul();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "grass") {
              this.encenderVerde();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "fire") {
              this.encenderRojo();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "electric") {
              this.encenderAmarillo();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "dragon") {
              this.encenderTomate();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "ghost") {
              this.encenderMorado();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "poison") {
              this.encenderVerdeO();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "normal") {
              this.encenderBlanco();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "flying") {
              this.encenderCafe();
            }
          }
        }));
      } else {
        this.api.getPokemonID(this.valor).subscribe((response => {
          this.pokemon = response;
          //console.log("Tipos de Pokémon:");
          for (let i = 0; i < this.pokemon.types.length; i++) {
            //console.log(this.pokemon.types[i].type.name);

            if (this.pokemon.types[i].type.name.toLowerCase() === "water") {
              this.encenderAzul();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "grass") {
              this.encenderVerde();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "fire") {
              this.encenderRojo();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "electric") {
              this.encenderAmarillo();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "dragon") {
              this.encenderTomate();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "ghost") {
              this.encenderMorado();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "poison") {
              this.encenderVerdeO();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "normal") {
              this.encenderBlanco();
            }
            if (this.pokemon.types[i].type.name.toLowerCase() === "flying") {
              this.encenderCafe();
            }
          }
        }));
      }
    } catch (error) {
      //console.log(error);
    }
  }

  
}
