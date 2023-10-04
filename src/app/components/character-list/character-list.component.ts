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
    this.rickAndMortyService.getCharacters().subscribe((data) => {
     
      
      this.characters = data.results;
      this.filteredCharacters = [...this.characters];
    });
  }
  
  applyFiltersAndSort(): void {
    this.filteredCharacters = this.characters.filter((character) => {
      return (
        character.name.toLowerCase().includes(this.filterName.toLowerCase()) &&
        character.species.toLowerCase().includes(this.filterSpecies.toLowerCase()) &&

        (this.filterStatus === '' || character.status === this.filterStatus) &&
        (this.filterGender === '' || character.gender === this.filterGender)
      );
    });
    // Sorting logic here based on user's choice (e.g., name, species, status)
  }

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
  


