import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character as CharacterService } from '../../services/character';
import { CharacterData } from '../../models/character.model';

@Component({
  selector: 'app-character-list',
  imports: [CommonModule],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css'
})
export class CharacterList implements OnInit {
  private readonly characterService = inject(CharacterService);

  characters = signal<CharacterData[]>([]);
  loading = signal(true);
  errorMessage = signal<string | null>(null);

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters(page: number = 1): void {
    this.loading.set(true);
    this.errorMessage.set(null);
    this.characterService.getCharacters(page).subscribe({
      next: (response) => {
        this.characters.set(response.results.map(c => ({ ...c, isDead: false })));
        this.loading.set(false);
      },
      error: (err) => {
        console.error('Error al obtener personajes:', err);
        this.errorMessage.set('Hubo un error al cargar los personajes. Intente de nuevo.');
        this.loading.set(false);
      }
    });
  }

  killCharacter(character: CharacterData): void {
    character.isDead = true;
    this.characters.set([...this.characters()]); // fuerza actualización visual
  }

  reviveCharacter(character: CharacterData): void {
    character.isDead = false;
    this.characters.set([...this.characters()]);
  }
}
