import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from '../../services/rick-and-morty.service';
import { SelectItem } from 'primeng/api';


@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  characters: any[] = [];
  filteredCharacters: any[] = [];
  filterName: string = '';
  filterSpecies: string = '';
  filterStatus: string = '';
  filterGender: string = '';

  //sayfa değişimi için
  nextPageUrl: string = '';
  prevPageUrl: string = '';

  constructor(private rickAndMortyService: RickAndMortyService) {}


  ngOnInit(): void {
    // rickAndMortyService üzerinden karakterleri getirir ve veriyi subscribe ile dinler.
    this.rickAndMortyService.getCharacters().subscribe((data) => {  
      this.characters = data.results;
      this.filteredCharacters = [...this.characters];
    });
  }
  


  // Bu fonksiyon, karakterleri filtrelemek ve sıralamak için kullanılır.
  applyFiltersAndSort(): void {
  
    // this.filteredCharacters, filtrelenmiş karakterlerin listesini tutar.
    this.filteredCharacters = this.characters.filter((character) => {
      // Aşağıdaki koşullar, karakterin filtrelenip filtrelenmeyeceğini kontrol eder:
      const nameMatches = character.name.toLowerCase().includes(this.filterName.toLowerCase()) || this.filterName === '';
      const speciesMatches = character.species.toLowerCase().includes(this.filterSpecies.toLowerCase()) || this.filterSpecies === '';
      const statusMatches = this.filterStatus === '' || character.status === this.filterStatus;
      const genderMatches = this.filterGender === '' || character.gender === this.filterGender;
  
      // Tüm koşulların sağlandığı karakterleri filteredCharacters listesine ekler.
      return nameMatches && speciesMatches && statusMatches && genderMatches;
    });
  }
  


  //açılan droplar için

  genderOptions: SelectItem[] = [
    { label: 'All Gender', value: '' },
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Unknown', value: 'unknown' }
  ];

  statusOptions: SelectItem[] = [
    { label: 'All Status', value: '' },
    { label: 'Dead', value: 'Dead' },
    { label: 'Alive', value: 'Alive' },
    { label: 'Unknown', value: 'unknown' }
  ];

}
  


