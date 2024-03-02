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
  async encenderCelesteD(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"celesteD" });
  }
  async encenderMoradoG(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"moradoG" });
  }
  async encenderCelesteF(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"celesteF" });
  }
  async encenderRosado(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"rosado" });
  }
  async encenderRojoPelea(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"rojoP" });
  }
  async encenderGris(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"gris" });
  }
  async encenderCeleste(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"celeste" });
  }
  async encenderNegro(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"negro" });
  }
  async encenderGrisClaro(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"grisC" });
  }
  async encenderRosa(){
    this.tableled1= doc(this.db,'Leds','Led');
    await setDoc(this.tableled1, { color:"rosa" });
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

            if (this.pokemon.types[0].type.name.toLowerCase() === "water") {
              this.encenderAzul();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "grass") {
              this.encenderVerde();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "fire") {
              this.encenderRojo();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "electric") {
              this.encenderAmarillo();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "dragon") {
              this.encenderCelesteD();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "ghost") {
              this.encenderMoradoG();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "poison") {
              this.encenderMorado();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "normal") {
              this.encenderBlanco();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "flying") {
              this.encenderCelesteF();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "ground") {
              this.encenderCafe();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "psychic") {
              this.encenderRosado();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "fighting") {
              this.encenderRojoPelea();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "rock") {
              this.encenderGris();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "ice") {
              this.encenderCeleste();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "dark") {
              this.encenderNegro();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "steel") {
              this.encenderGrisClaro();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "fairy") {
              this.encenderRosa();
            }
          }
        }));
      } else {
        this.api.getPokemonID(this.valor).subscribe((response => {
          this.pokemon = response;
          //console.log("Tipos de Pokémon:");
          for (let i = 0; i < this.pokemon.types.length; i++) {
            //console.log(this.pokemon.types[i].type.name);

            if (this.pokemon.types[0].type.name.toLowerCase() === "water") {
              this.encenderAzul();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "grass") {
              this.encenderVerde();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "fire") {
              this.encenderRojo();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "electric") {
              this.encenderAmarillo();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "dragon") {
              this.encenderCelesteD();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "ghost") {
              this.encenderMoradoG();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "poison") {
              this.encenderMorado();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "normal") {
              this.encenderBlanco();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "flying") {
              this.encenderCelesteF();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "ground") {
              this.encenderCafe();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "psychic") {
              this.encenderRosado();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "fighting") {
              this.encenderRojoPelea();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "rock") {
              this.encenderGris();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "ice") {
              this.encenderCeleste();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "dark") {
              this.encenderNegro();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "steel") {
              this.encenderGrisClaro();
            }
            if (this.pokemon.types[0].type.name.toLowerCase() === "fairy") {
              this.encenderRosa();
            }
          }
        }));
      }
    } catch (error) {
      //console.log(error);
    }
  }

  
}

  

  

