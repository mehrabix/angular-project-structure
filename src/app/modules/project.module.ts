import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { HomePage } from "../pages/home/home.page"
import { LoginPage } from "../pages/login/login.page"
import { ShopPage } from "../pages/shop/shop.page"



const Modules:any = []
const pages:any = [HomePage,ShopPage,LoginPage]
const Components:any = []

@NgModule({
    declarations: [...Components,...pages],
    imports: [CommonModule,...Modules],
    exports: [...Components,...pages],
    providers: [],
})
export class ProjectModule {}