import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
              private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // this.route.data.subscribe(
    //   (data: Data) => {
    //     this.server = data['server'];
    //   }
    // )
    this.route.params.subscribe(
      (params: Params) => {
        if (params['id']) {
          this.server = this.serversService.getServer(Number(params['id']));
        } else {this.server = this.serversService.getServer(1)}
      }
    )
  }

  onEdit() {
    this.router.navigate(['edit'], {
      relativeTo: this.route,
      // queryParams: {allowEdit: this.server.id === 3 ? '1' : '0'}
      queryParamsHandling: 'preserve'
    })
  }
}
