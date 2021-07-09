import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Params, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { ServersService } from '../servers.service';
import { CanDeactivateGuard, ICanDeactivate } from './auth-guard-deactivate.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateGuard {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit: boolean = false;
  changesSaved: boolean = false;

  constructor(private serversService: ServersService, private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    
    this.activatedRoute.queryParams.subscribe((queryParams: Params)=> {
      this.allowEdit = +queryParams['allowEdit'] ? true: false;
    })

    this.activatedRoute.fragment.subscribe((fragment: string)  =>{
      console.log(fragment);
    });

    const id = this.activatedRoute.snapshot.params['id']
    this.server = this.serversService.getServer(+id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
    // console.log(this.activatedRoute.snapshot.queryParams['allowEdit']);
    // console.log(this.activatedRoute.snapshot.fragment);
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
  }

  canDeactivate(component: ICanDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(!this.allowEdit){
      return true;
    }

    if((this.server.name != this.serverName || this.serverStatus != this.server.status) && !this.changesSaved){
     return confirm('Discard changes?')
    } else {
      return true;
    }
  }

}
