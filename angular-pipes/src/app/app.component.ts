import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchTerm: string = '';
  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable')
    }, 2000)
  });
  servers = [
    {
      type: 'large',
      name: 'production',
      status: 'stable',
      startDate: new Date(2019, 10, 12),
    },
    {
      type: 'medium',
      name: 'preprod',
      status: 'stable',
      startDate: new Date(2020, 2, 15),
    },
    {
      type: 'small',
      name: 'development',
      status: 'unstable',
      startDate: new Date(2020, 3, 4),
    },
    {
      type: 'small',
      name: 'testing environment server',
      status: 'offline',
      startDate: new Date(2021, 6, 2),
    },
  ]

  addServer() {
    this.servers.push(
      {
        type: 'small',
        name: 'testing environment server',
        status: 'offline',
        startDate: new Date(2021, 6, 2),
      },
    )
  }
}


