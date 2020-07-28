import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  menu: any[] = [
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      subMenu: [
        {
          title: 'mascotas',
          icon: 'fa fa-paw',
          itemUrl: 'paciente',
        },
        {
          title: 'Dueño',
          icon: 'fa fa-user',
          itemUrl: 'dueno',
        },
      ],
    },
  ];

  constructor() {}
}
