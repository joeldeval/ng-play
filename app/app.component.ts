import {Component} from '@angular/core';

@Component({
    selector: 'video-app',
    template: `
              <div class="row">
                <div class="col-sm-12 embed-responsive embed-responsive-16by9">
                  <video src="video/cow.mp4" width="100%" height="100%" class="embed-responsive-item" controls></video>
                </div>
              </div>
              `
})
export class AppComponent {
    constructor() {}
}
