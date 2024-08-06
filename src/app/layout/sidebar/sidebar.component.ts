import {Component, OnInit} from '@angular/core';
import {SidebarService} from "./sidebar.service";
import {MenuItem} from "../../core/models/sidebarmodel/menu-item-interface";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";



@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    NgForOf,
    NgOptimizedImage,
    NgIf
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent   implements OnInit {
  isOpen = false;

  menuItems: MenuItem[] = [
    {
      name: 'Wonderlands',
      icon: 'assets/sidebarImg/wonderlands-icon.png',
      subItems: ['Weapons', 'Shields', 'Spells', 'Class Mods', 'Artifacts'],
      isExpanded: false

    },
    {
      name: 'Borderlands 3',
      icon: 'assets/sidebarImg/borderlands33-icon.png',
      subItems: ['Weapons', 'Shields', 'Grenades', 'Class Mods', 'Artifacts'],
      isExpanded: false
    },
    {
      name: 'Borderlands 2',
      icon: 'assets/sidebarImg/borderlands2-icon.png',
      subItems: ['Weapons', 'Shields', 'Grenades', 'Class Mods', 'Relics'],
      isExpanded: false
    },
    {
      name: 'Borderlands TPS',
      icon: 'assets/sidebarImg/borderlandstps-icon.png',
      subItems: ['Weapons', 'Shields', 'Oz Kits', 'Class Mods', 'Relics'],
      isExpanded: false
    },
    {
      name: 'Borderlands 1',
      icon: 'assets/sidebarImg/borderlands1-icon.png',
      subItems: ['Weapons', 'Shields', 'Class Mods', 'Artifacts'],
      isExpanded: false
    }
  ];


  constructor(private sidebarService: SidebarService){}

    ngOnInit() {
      this.sidebarService.isOpen$.subscribe(
         isOpen => {
           this.isOpen = isOpen
      }
      )
    }

  toggleSubMenu(item: MenuItem, event: Event) {
    event.preventDefault();
    item.isExpanded = !item.isExpanded;
  }

}
