import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();

  // cart: IProduct[] = [];

  // addToCart(product: IProduct) {
  //   this.cart.push(product);
  //   console.log(`product ${product.name} added to cart`);
  // }

  buyButtonClicked(product: IProduct) {
    this.buy.emit();
  }

  getImageUrl(product: IProduct) {
    if (!product) return '';
    return 'assets/images/robot-parts/' + product.imageName;
  }

  getDiscountedClasses(product: IProduct) {
    // return { strikethrough: product.discount > 0 };
    // if (product.discount > 0) return 'strikethrough';
    // else return '';
    if (product.discount > 0) return ['strikethrough'];
    else return [''];
  }
}
