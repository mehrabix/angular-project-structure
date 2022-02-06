import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { HomePage } from "../pages/home/home.page"
import { LoginPage } from "../pages/login/login.page"
import { ShopPage } from "../pages/shop/shop.page"



const Modules:any = []
const Components:any = [HomePage,ShopPage,LoginPage]

@NgModule({
    declarations: [...Components],
    imports: [CommonModule,...Modules],
    exports: [...Components],
    providers: [],
})
export class ProjectModule {}