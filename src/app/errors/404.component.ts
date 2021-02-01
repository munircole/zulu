import { Component } from '@angular/core';

@Component({
  selector: 'app-page404',
  template: `<div class="error-container">
              <div class="error">
                <section class="text">
                  <h1>404</h1>
                  <h2>Oops!! You're on a wrong page</h2>
                  <div class="button-div">
                    <button type="submit" class="button" routerLink="/login">Login</button>
                    <button type="submit" class="button" routerLink="/register">Register</button>
                  </div>

                </section>
              </div>
            </div>`,
  styles: [`.error {
            background: #36151e;
            color: #fff;
            height: 100%;
            padding-bottom: 20px;
          }
          .text {
            text-align: center;
            padding-top: 17%;
            padding-bottom: 17%;

          }
          .button-div{
             display: inline;
          }
          .button{
            width: 100px;
            height: 50px;
            margin: 10px;
            border: none;
            background: #29c785;
            color: white;
          }`]
})
export class ErrorPageComponent {

  constructor() { }

}
