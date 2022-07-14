import { Component, OnInit } from '@angular/core';
import { ApiService } from '../core/api.service';
import { Product } from '../shared/types';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

    products!: Array<Product>;

    constructor(private apiService: ApiService) { }

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts() {
        this.apiService.getProductsList().subscribe({
            next: (data: Array<Product>) => { this.products = data },
            error: (err) => console.error(err),
        })
    }

    imagePath(image: string | null): string {
        return !image ? '' : `../../assets/images/${image}`;
    }

}