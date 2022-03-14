import { Component } from "@angular/core";
import { Game } from "./game-item/game-item.component";



@Component({
    selector: 'game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent {
    
    colorPrice: boolean = false;
    searchField: string = '';
    showItems : boolean = false;

    games: Game[] = [
        { title: "MineCraft", price: 10, img: "https://dkofva0t6jnyn.cloudfront.net/sites/default/files/styles/amp_blog_image_large/public/consumer/blog/parentsultimateguide-minecraft-blog.jpeg" },
        { title: "CS", price: 15, img: 'https://media.moddb.com/images/downloads/1/176/175986/Counter-Strike-1.6-Free-Download.jpg' },
        { title: "NFS", img: 'https://digistatement.com/wp-content/uploads/2020/12/maxresdefault-1-2.jpg' }
    ]

    public handleChangePriceColorClick(container : HTMLUListElement): void {
        console.log(container.children[0])
        this.colorPrice = this.colorPrice ? false : true;    
    }
}