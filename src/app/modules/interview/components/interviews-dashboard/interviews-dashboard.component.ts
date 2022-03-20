import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interviews-dashboard',
  templateUrl: './interviews-dashboard.component.html',
  styleUrls: ['./interviews-dashboard.component.css']
})
export class InterviewsDashboardComponent implements OnInit {

  jsTopics = [
    {
      title: 'basics',
      description: '',
      path:''
    },
    {
      title: 'strings',
      description: '',
      path:''
    },
    {
      title: 'arrays',
      description: '',
      path:''
    },
    {
      title: 'var-let-const',
      description: '',
      path:''
    },
    {
      title: 'objects',
      description: '',
      path:''
    },
    {
      title: 'functions',
      description: '',
      path:''
    },
    {
      title: 'OOPs',
      description: '',
      path:''
    },
    {
      title: 'Logical thinking',
      description: '',
      path:''
    }
  ]

  angularTopics = [
    {
      title: 'architecture',
      description: '',
      path:''
    },
    {
      title: 'cli',
      description: '',
      path:''
    },
    {
      title: 'routing',
      description: '',
      path:''
    },
    {
      title: 'HTTP',
      description: '',
      path:''
    },
    {
      title: 'Forms',
      description: '',
      path:''
    },
    {
      title: 'RXJS',
      description: '',
      path:''
    },
    {
      title: 'Advanced topics',
      description: '',
      path:''
    }
  ]

  workFlowTopics = [
    {
      title: 'GIT',
      description: '',
      path:''
    },
    {
      title: 'Development Flow',
      description: '',
      path:''

    }
  ]

  introductionTopics = [
    {
      title: 'Personal',
      description: '',
      path:''
    },
    {
      title: 'Project',
      description: '',
      path:''
    }
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigate(item:any){
    this.router.navigate(['/dashboard/explore'], { queryParams:{ topic: item.title }});
  }

}
