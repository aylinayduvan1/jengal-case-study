import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Router'ı ekleyin
import { RickAndMortyService } from '../../services/rick-and-morty.service';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.scss']
})
export class CharacterDetailsComponent implements OnInit {
  character: any;
  characters: any[] = [];


  constructor(
    private rickAndMortyService: RickAndMortyService,
    private route: ActivatedRoute,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const characterId = params.get('id');
      
      if (characterId !== null) {
        this.rickAndMortyService.getCharacterById(characterId).subscribe((data) => {
          this.character = data;
          console.log(data)
        });
      } else {
        // Karakter ID yoksa uygun bir hata işleme veya yönlendirme yapabilirsiniz.
      }
    });
  }
  


  goToPreviousCharacter() {
    // Mevcut karakterin ID'sini alın
    const currentCharacterId = this.character.id;
  
    // Bir önceki karakterin ID'sini hesaplayın (örneğin, 1 çıkarın)
    const previousCharacterId = currentCharacterId - 1;
  
    // Eğer önceki karakter ID'si 0'dan küçükse, ilk karaktere dönün
    if (previousCharacterId < 1) {
      this.router.navigate(['/character/1']);
    } else {
      // Önceki karakterin sayfasına yönlendirin
      this.router.navigate(['/character', previousCharacterId]);
    }
  }
  
  
  goToNextCharacter() {
    // Mevcut karakterin ID'sini alın
    const currentCharacterId = this.character.id;
  
    // Bir sonraki karakterin ID'sini hesaplayın (örneğin, 1 ekleyin)
    const nextCharacterId = currentCharacterId + 1;
  
    // Sonraki karakterin sayfasına yönlendirin
    this.router.navigate(['/character', nextCharacterId]);
  }
  


}

