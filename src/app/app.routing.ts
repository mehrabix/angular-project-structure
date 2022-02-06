import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePage } from "./pages/home/home.page";
import { LoginPage } from "./pages/login/login.page";
import { ShopPage } from "./pages/shop/shop.page";
import { BlankLayout } from "./shared/layouts/blank/blank.component";
import { MasterLayout } from "./shared/layouts/master/master.component";



const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: MasterLayout,
        children:[
            {
                path: '',
                component: HomePage
            },

        ]
    },
    {
        path: 'shop',
        component:MasterLayout,
        children:[
            {
                path: '',
                component:ShopPage
            }
        ]
    },
    {
        path: 'login',
        component:BlankLayout,
        children:[
            {
                path: '',
                component:LoginPage
            }
        ]
    }
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}