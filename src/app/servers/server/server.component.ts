import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.route.snapshot.params['id']) {
      const id = Number(this.route.snapshot.params['id']);
      this.server = this.serversService.getServer(id);
    } else {this.server = this.serversService.getServer(1)}

    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(Number(params['id']));
      }
    )
  }

}
