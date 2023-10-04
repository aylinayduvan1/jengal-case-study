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
  currentPage = 1;
  totalPages = 1;

  constructor(
    private rickAndMortyService: RickAndMortyService,
    private route: ActivatedRoute,
    private router: Router

  ) {}

  ngOnInit(): void {


    // ActivatedRoute'i kullanarak URL'den karakter ID'sini alın
    const characterId = this.route.snapshot.paramMap.get('id');

    if (characterId !== null) {
      // Karakteri API'den alın
      this.rickAndMortyService.getCharacterById(characterId).subscribe((data) => {
        this.character = data;
        console.log(data)
      });
    } else {
      // characterId null ise uygun bir hata işleme veya yönlendirme yapabilirsiniz.
    }
  }

  
}
